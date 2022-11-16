# included user avatar converters 

<h1> Fire </h1>

* Output
![Fire](https://media.discordapp.net/attachments/1026208224036261939/1031258331345604719/Fire.gif)

<span style= "color: red;"> this an amazing filter for your avatar and very eslasy making <hr /> For Example:  </span>


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

<h2> Make sure this card didnt need `toBuffer()` because its alredy declared if you add it it will returns an `png` image not `gif` </h2>