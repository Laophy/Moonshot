require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const BOT_PREFIX = "!";

client.on("ready", () => {
  console.log("Moonshot bot has logged in.");
});

client.on("message", (msg) => {
  if (msg.content === `${BOT_PREFIX}moonshot`) {
    msg.react("❤️");
    msg.reply(
      "Join the test flight!: http://testflight.apple.com/join/LINhIVOP"
    );
    //msg.member.roles.add("832459385292062763");
  }
  if (
    msg.content === `${BOT_PREFIX}help` ||
    msg.content === `${BOT_PREFIX}commands`
  ) {
    //Do something
    const helpEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Moonstot Help")
      .setDescription(
        "Welcome to the Moonshot Discord! Here you will find the list of commands available to you!"
      )
      .addFields(
        { name: "Bot Help", value: "!help, !commands", inline: true },
        { name: "Test Flight", value: "!moonshot", inline: true }
      )
      .setThumbnail("https://i.imgur.com/2OBXsKZ.png");
    msg.channel.send(helpEmbed);
  }
  if (
    msg.content === `moonshot` ||
    msg.content === `great app` ||
    msg.content === `cool idea` ||
    msg.content === `moonshot is awesome` ||
    msg.content === `good idea`
  ) {
    msg.react("❤️");
  }
});

client.login(process.env.BOT_TOKEN);
