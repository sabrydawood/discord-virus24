# discord-virus24
A package to create profishnal profile card and more for your discord bot

# PROFILE CARD
<img src="https://media.discordapp.net/attachments/800368245218476083/1024439816080867348/profile-image.png" width="800" />

# Basic Usage
```js
const { ProfileCard }=require(`diacord-virus24`)
// ......
client.on('messageCreate', async message => {
	if (message.content === 'profile') {
let image = await new ProfileCard()
//.setAddon("rep", false)//disallow rep box if you need to allow it clear this line also (coins, level,xp)
.setAvatar(message.author.displayAvatarURL({extension: 'jpg'})) // loaded user avatar required extension (png, jpg,jpeg) only 
.setLevel(7) // add level count if addon level is true  only
.setRep(450) // add rep count if addon rep is true  only
.setColor("rep-box", "red") // change rep box color // also coins, xp, level use variableName-box 
.setColor("rep-text", "green")// change rep text color // also coins, xp, level use variableName-text
.setUsername(message.author.tag) // user name from discord client
.setStatues("idle") // as user statues online / idle /dnd 
.setBackground("https://cdn.discordapp.com/attachments/800023817480568852/800730959342207027/unknown.jpeg") // add background image if you didn't include this line will add custom background 
.toAttachment();
const attachment = new AttachmentBuilder(image.toBuffer(), { name: 'profile.png' });

		message.channel.send({ files: [attachment] });
  }
});
```
# Addon Methods
```js
.setAddon("rep", false)
.setAddon("xp", false)
.setAddon("coins", false)
.setAddon("level", false)

```
__by default all methods is allowed__

you can --disallow-- it by add `false` to it 

# cloros Methods

You can customize all img colors 

with `.setColor()` methods

<h1>  Basic Example </h1>
<h3> rectangles can change it </h3>

```js
.setColor("rep-box", "red")
.setColor("xp-box", "red")
.setColor("coins-box", "red")
.setColor("level-box", "red")
.setColor("bar", "red") // progress bar color
.setColor("bar-stroke", "yellow") //progress bar stroke

```
<h5> works as (variable, color) </h5>

<h3> Text can change it </h3>

```js
.setColor("rep-text", "red")
.setColor("xp-text", "red")
.setColor("coins-text", "red")
.setColor("level-text", "red")
.setColor("username", "red")

```
<h5> works as (key, value) </h5>

# WELCOME AND GODBYE CARDS


<img src="https://media.discordapp.net/attachments/830729769397125140/1025164221190766652/welcome.png" width="800" />

<img src="https://media.discordapp.net/attachments/830729769397125140/1025165521018175528/welcome.png" width="800" />

<h1> Godbye Card </h1>
<p> its easy to do it let me show you </p>
    

# for this card you need 
`Discord Intents` (__Guild__ , __presence__)
```js

intents: [
  GatewayIntentBits.Guilds,
GatewayIntentBits.GuildPresences
]
  ```

```js
const { WelcomeCard, GodByeCard }=require(`diacord-virus24`)
client.on('messageCreate', async message => {
	if (message.content === 'P') {
  //to get online/offline ....
let guild = message.guild
  let allMembers = guild.memberCount
 
  let onlineUsers = message.guild.members.cache.filter(member => member.presence === "online").size,
offlineUsers = message.guild.members.cache.filter(member => member.presence  ===  "offline").size,
  Bots = message.guild.members.cache.filter(member => member.user.bot).size
      
let image = await new GodByeCard()
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
  .setText("god-bye", "hNWHmMX4yzU7e5bjba9DT9VqC4znx1tollrhZJ6uWG2s46fjAPiPUh \n dzCEl9S9KJCnqr8UeWKEOquMJppnEspq7bGYgSq4rtrdPLgsgsggsgshsgs") 
  //change background image required [string, extensions (png,jpg,jpeg)]
//.setBackground()
.toAttachment();
const attachment = new AttachmentBuilder(image.toBuffer(), { name: 'godbye.png' });
		message.channel.send({ files: [attachment] });
  }
});
```
<h1> Methods Can changed </h1>
  <h2>Text </h2>
  
  ```js
  .setText(`key :`"god-bye", `value :` "your text goes her")
  ```
  <h2>on/of </h2>
  
```js
.setAddon(`key :`"background-image", `value :`false)
```
 <h2> Colors </h2>
 
```js
.setColor(`key :`"background", `value :`"your color")
.setColor(`key :`"username-box", `value :`"your color")
.setColor(`key :`"username",`value :` "your color")
.setColor(`key :`"god-bye-box",`value :` "your color")
.setColor(`key :`"god-bye-text",`value :` "your color")
.setColor(`key :`"info-box",`value :` "your color")
.setColor(`key :`"info-text",`value :` "your color")

```

# For Welcome card same as Godbye Card 

<h1> you just need to change god-bye `key` to welcome </h1>

# user avatar converters 

<h1> Fire </h1>
<span style= "color: red;"> this an amazing filter for your avatar and very eslasy making <hr /> For Example:  </span>

```js
const { FireSmokeCard } = require("discord-virus24")
client.on('messageCreate', async message => {
	if (message.content === 'fire') {
let image = await new FireSmokeCard()
.setAvatar(message.author.displayAvatarURL({extension: 'jpg'})) 
.toAttachment();
const attachment = new AttachmentBuilder(image.toBuffer(), { name: 'FireSmoke.png' });

		message.channel.send({ files: [attachment] });
  }
});
```

# Fire Card
<h2> Make sure this card didnt need `toBuffer()` because its alredy declared if you add it it will returns an `png` image not `gif` </h2>
<h1> Example </h1>

```js
const { FireCard } = require("discord-virus24")
client.on('messageCreate', async message => {
	if (message.content === 'P') {
let image = await new FireCard()
.setAvatar(message.author.displayAvatarURL({extension: 'jpg'})) 
.toAttachment();
const attachment = new AttachmentBuilder(image, { name: 'Fire.gif' });

		message.channel.send({ files: [attachment] });
  }
});
```

Thats All ☺️☺️ Ang Enjoy

<h2 style= "color:red">Hint : </h2><p> We will complete Coming soon Cards first and we will make some styles you can change as you need with small add in your code </p>
# if you need help just <a href="https://discord.gg/P56T4Xn8NF" > Join Discord Server </a>


## this package made with 💗❤️💗 By JavaScript (nodejs, canvas)

<h1> Coming Soon </h1>
<ul>
<li> Rank Card</li>
<li> Server info Card</li>
<li> User info Card</li>
</ul>
