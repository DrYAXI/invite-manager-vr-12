const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});



const fs = require("fs");
const Discord = require ("discord.js")
const moment = require ("moment")
const yaxi = new Discord.Client();
const prefix = "Y!";


yaxi.login("ODUwNDUwMTg0OTYxMzkyNjUy.YLp5dA.6JqTnpK81y6v7NNQiL3XGeqT0Bg");
yaxi.on("ready", async () => {
  console.log(`Logged in as ${yaxi.user.username}!`);
  yaxi.user.setStatus("ONLINE");
  yaxi.user.setActivity(`Y!help`, { type: "WATCHING" });
  yaxi.guilds.cache.forEach(g => {
    if (g.member(yaxi.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////





yaxi.on("message", message => {
  if (message.content === prefix + "about") {
    const embed = new Discord.MessageEmbed()
    .setDescription(`                         
**[ invite ]**
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/3wykSpqjZq)**`)
      .setColor("BLACK")
    
      .addField("`my name`", `** ${yaxi.user.tag} **`, true)

      .addField("`Server`", `**${yaxi.guilds.cache.size} Server**`, true)
    
     .addField("`Usres`",  `**${yaxi.users.cache.size}  Users**`, true)
    
    
     .addField( "`developer bot` ",`<@681553671364018196>`,true)


      .setImage("https://cdn.discordapp.com/attachments/696796419595567108/741981480653291570/image0-40.gif"
      );
    
    message.channel.send(embed);
    message.react("");
  }
});



yaxi.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(" click touch for link bot ")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=799228179784794183&permissions=8&scope=bot"
      );
    message.channel.send(embed);
     message.react("");
  }
});

///////




////// code invite vr 12 by yaxi///////
const invites = {};
const wait = require("util").promisify(setTimeout);
yaxi.on("ready", () => {
  wait(1000);
  yaxi.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  }); 
});
///////////////////
yaxi.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = yaxi.users.cache.get(invite.inviter.id);
    const channel = member.guild.channels.cache.find(
      channel => channel.name === "𝐈𝐧𝐯𝐢𝐭𝐞𝐬" 
    );
    channel.send(
      `__**<@${member.id}> **|invite kra la layan** | <@${inviter.id}> | **Zhmaray henan** |${invite.uses}**__`
    );
  });
});
