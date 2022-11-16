## This can generate an profishnal welcome Card for your Bot 

### Output
![Welcome](https://media.discordapp.net/attachments/830729769397125140/1025164221190766652/welcome.png)


### for this card you need 
`Discord Intents` (__Guild__ , __presence__)
```js

intents: [
  GatewayIntentBits.Guilds,
GatewayIntentBits.GuildPresences
]
  ```

```js
const { WelcomeCard }=require(`diacord-virus24`)
client.on('messageCreate', async message => {
	if (message.content === 'P') {
  //to get online/offline ....
let guild = message.guild
  let allMembers = guild.memberCount
 
  let onlineUsers = message.guild.members.cache.filter(member => member.presence === "online").size,
offlineUsers = message.guild.members.cache.filter(member => member.presence  ===  "offline").size,
  Bots = message.guild.members.cache.filter(member => member.user.bot).size
      
let image = await new WelcomeCard()
.setAddon("background-image", false) //hide and show background image 
  //print user Avatar 
.setAvatar(message.author.displayAvatarURL({extension: 'jpg'})) 
  //print user username
.setUsername(message.author.tag)
// print avatar stroke color as user presence
.setStatues(message.guild.member.presence) 
  //changes color background if image is disabled
//.setColor("background", "aqua")
//print guild name
.setGuildName(message.guild.name)
//print guild icon
.setGuildIcon(message.guild.iconURL({extension: 'jpg'}))
//print guild users counts
  .setMembers(allMembers)
  .setOnline(onlineUsers)
  .setOffline(offlineUsers)
  .setBots(Bots)
  //change godbye text required [string , less than 100 characters]
  .setText("Welcome", "hNWHmMX4yzU7e5bjba9DT9VqC4znx1tollrhZJ6uWG2s46fjAPiPUh \n dzCEl9S9KJCnqr8UeWKEOquMJppnEspq7bGYgSq4rtrdPLgsgsggsgshsgs") 
  //change background image required [string, extensions (png,jpg,jpeg)]
//.setBackground()
.toAttachment();
const attachment = new AttachmentBuilder(image.toBuffer(), { name: 'welcome.png' });
		message.channel.send({ files: [attachment] });
  }
});
```
### Methods Can changed 
  #### Text 
  
  ```js
  .setText(`key :`"welcome", `value :` "your text goes her")
  ```
  #### addOn = requires=>Boolean
```js
.setAddon(`key :`"background-image", `value :`false)
```
 #### Colors 
 
```js
.setColor(`key :`"background", `value :`"your color")
.setColor(`key :`"username-box", `value :`"your color")
.setColor(`key :`"username",`value :` "your color")
.setColor(`key :`"welcome-box",`value :` "your color")
.setColor(`key :`"welcome-text",`value :` "your color")
.setColor(`key :`"info-box",`value :` "your color")
.setColor(`key :`"info-text",`value :` "your color")

```