#!/bin/sh
# Shell Script to add all files, commit them with a commit message from user and then push them to remote GitHub repo
echo "*** Automating Git Add, Commit and Push ***"

git config --global user.email "kazouya44@gmail.com"

git config --global user.name "virgel1995"
#Ask for Username
echo "Enter your GitHub username: "
read username

#Ask for User Github's personal access token
echo "Enter your GitHub personal access token: "
read token

# Ask for repository name
echo "Enter repository name"
read repoName
# Check if repository exists at GitHub
curl "https://api.github.com/repos/${username}/${repoName}.git"
# If repository exits then

if [ $? -eq 0 ]; then
    cd $repoName
    # Display unstaged files
    git status
    git remote set-url origin https://${token}@github.com/${username}/${repoName}.git
    # If there are any uncommited and unstatged files, ask user to commit them
    if [ "$(git status --porcelain)" ]; then
        echo "There are uncommited and unstatged files. Commit them before pushing"
        echo "Enter commit message"
        read commitMessage
        git add .
        git commit -m "$commitMessage"
        git push -f origin master
        echo "Files pushed to GitHub"
        # else push all commited and staged files to remote repo
    else
        git push -f origin master
        echo "Files pushed to GitHub"
        
    fi
    #Echo message if there is no files to commit, stage or push
    if [ "$(git status --porcelain)" ]; then
        echo "There are no files to commit, stage or push"
    fi
else
    echo "Repository does not exist"
fi


# End of script