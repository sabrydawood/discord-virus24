/* import { createRequire } from "module";
const require = createRequire(import.meta.url);*/
const { ProfileCard , WelcomeCard,GodByeCard ,
      FireSmokeCard,
       FireCard,
PetPetCard

      }= require("../index.js") ;
const { Client, Intents,GatewayIntentBits, AttachmentBuilder, Guild } = require('discord.js');

const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ 
partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
intents: [
  GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,      GatewayIntentBits.GuildPresences
]});


client.once('ready', () => {
	console.log('Ready!');
});

client.on('messageCreate', async message => {
	if (message.content === 'P') {
let image = await new PetPetCard()
.setAvatar(message.author.displayAvatarURL({extension: 'jpg'})) 
.toAttachment();
const attachment = new AttachmentBuilder(image, { name: 'Fire.gif' });

		message.channel.send({ files: [attachment] });
  }
});



client.login(token);