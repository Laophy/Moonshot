require('dotenv').config();


const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    console.log("Bot logging in.")
})

client.login(process.env.BOT_TOKEN);