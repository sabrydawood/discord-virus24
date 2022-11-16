# included user avatar converters 

<h1> PetPet </h1>

* Output
![PetPet](https://media.discordapp.net/attachments/830729769397125140/1042410552321912874/Fire.gif)

<span style= "color: red;"> this an amazing filter for your avatar and very eslasy making <hr /> For Example:  </span>


```js
const { PetPetCard } = require("discord-virus24")
client.on('messageCreate', async message => {
	if (message.content === 'P') {
let image = await new PetPetCard()
.setAvatar(message.author.displayAvatarURL({extension: 'jpg'})) 
.toAttachment();
const attachment = new AttachmentBuilder(image, { name: 'Pet.gif' });

		message.channel.send({ files: [attachment] });
  }
});
```

<h2> Make sure this card didnt need `toBuffer()` because its alredy declared if you add it it will returns an `png` image not `gif` </h2>