# included user avatar converters 

<h1> FireSmoke </h1>

* Output
![FireSmoke](https://media.discordapp.net/attachments/830729769397125140/1025883282346360963/FireSmoke.png)

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
