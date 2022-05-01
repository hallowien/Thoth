const Discord = require('discord.js');
const client = new Discord.Client({
	intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES]
});
const prefix = '!';
const fs = require('fs');
const mongoose = require("mongoose");
require('dotenv').config();
client.commands = new Discord.Collection();

const commandFiles = fs. readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    
    console.log('Percephone is online');

});


client.on('messageCreate', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 't'){
       client.commands.get('t').execute(message, args);
    }
});

mongoose
    .connect(process.env.CONNECT_TOKEN, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        userFindAndModify: false
})
.then(() =>{
    console.log("connected to the db");
})
.catch((err) =>{
    console.log(err);
});

client.login(process.env.LOGIN_KEY);