## you can make easy profile card with this package

### Out put 
![ProfileCard](https://media.discordapp.net/attachments/800368245218476083/1024439816080867348/profile-image.png)

### Example
 
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