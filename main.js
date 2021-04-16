require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const BOT_PREFIX = "!"

client.on('ready', () => {
    console.log("Bot logging in.")
})


client.on('message', msg =>{
    if(msg.content === '!moonshot'){
        msg.react(":heart:");
        msg.reply("Join the test flight!: http://testflight.apple.com/join/LINhIVOP");
        msg.member.roles.add("832459385292062763");
    }
})



client.login(process.env.BOT_TOKEN);