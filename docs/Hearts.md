# included user avatar converters 

<h1> HeartsCard </h1>

* Output
![HeartsCard](https://media.discordapp.net/attachments/830729794844753930/1031689050731597884/hearts.png)

<span style= "color: red;"> this an amazing filter for your avatar and very eslasy making <hr /> For Example:  </span>

```js
const { HeartsCard } = require("discord-virus24")
client.on('messageCreate', async message => {
	if (message.content === 'fire') {
let image = await new HeartsCard()
.setAvatar(message.author.displayAvatarURL({extension: 'jpg'})) 
.toAttachment();
const attachment = new AttachmentBuilder(image.toBuffer(), { name: 'FireSmoke.png' });

		message.channel.send({ files: [attachment] });
  }
});
```
