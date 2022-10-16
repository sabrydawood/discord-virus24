/* import { createRequire } from "module";
const require = createRequire(import.meta.url);*/
const { ProfileCard , WelcomeCard,GodByeCard ,
      FireSmokeCard
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
//const { FireSmokeCard } = require("discord-virus24")
client.on('messageCreate', async message => {
	if (message.content === 'fire') {
let image = await new FireSmokeCard()
.setAvatar(message.author.displayAvatarURL({extension: 'jpg'})) 
.toAttachment();
const attachment = new AttachmentBuilder(image.toBuffer(), { name: 'FireSmoke.png' });

		message.channel.send({ files: [attachment] });
  }
});



client.login(token);