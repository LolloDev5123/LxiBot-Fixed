const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if(message.content === "l+ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Offical LxiBot","WorldGame","BOT Creator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    
   
  
    // Now, time for a swift kick in the nuts!
  
	
	
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = message.content.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
     member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  client.user.setActivity(`Do for help | l+help `);
  if (message.content === 'Hello') {
    message.reply('Hello, i am the Official Bot of Lxi Inc.'); 
  }
     if (message.content === 'Hi') {
    message.reply('Hello'); 
     }
     
        if(message.content === "l+purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(message.content[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error =>
	  message.reply(`Couldn't delete messages because of: ${error}`));
  }                               
       
                                         
   if (message.content === 'Ciao') {
    message.reply('Ciao, sono il robot ufficiale degli Lxi'); 
  }
   if (message.content === 'l+info') {
    message.reply(' :smiley:| LxiBot | Created by Lxi Inc. Dev | Programmed by @Andrea Pasculli#8957 | :smiley:'); 
  }
     if (message.content === 'Bonnaserah') {
    message.reply('Cosa?'); 
     }
   if (message.content === 'mi aiuti?') {
    message.reply('In cosa posso aiutarla?'); 
     }
   if (message.content === 'Benvenuto') {
    message.reply('Grazie'); 
     }
  //-----------------------------
  //Bot Commands^ | WG Commands >
  //------------------------------
  if (message.content === 'l+WGJoin') {
    message.reply('https://discord.gg/8hYBFZc | Official Community of **WG**'); 
     }
  if (message.content === 'l+WGInfo') {
    message.reply('WorldGame is a **Community** of Gaming, with hundreds of Users'); 
     }
   if (message.content === 'l+WGChat') {
    message.reply('| **WorldGame** - WorldGame#4277 |'); 
     }
  //-----------------------------
  //LxiCraft Commands
  //------------------------------
  if (message.content === 'lc+serverinfo') {
    message.reply('| MINECRAFT | LxiCraft Server  | **LxiCraft.aternos.me** | 34 Threads | '); 
     }
  if (message.content === 'lc+serverthreads') {
    message.reply(' | **LxiCraft.aternos.me** | 34 Threads | '); 
     }
  //-----------------------------
  //Bot Commands
  //------------------------------
  if(message.content === "l+SayHelloAdmins") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Admin","Moderator","Moderatore"].includes(r.name)) )
      message.reply("Ciao e Buon **Programming**,xD");
    message.channel.send("Ciao Admins!");
  }
  if (message.content === 'aiuto') {
    message.reply('In cosa posso aiutarla?'); 
  }
  if (message.content === 'a scalare una montagna') {
    message.reply('Ok, N.1: Prendere una corda, N.2: Scalare una montagna, N.3: Raggiungere la vetta'); 
  }
   if (message.content === 'l+help') {
   message.reply(' | You can use: __**l+ban**__ for ban a player, and the __**all**__ commands of a normal discord bot. | l+info for the **informations** of LxiBot | WG Commands: l+WGJoin - l+WGChat - l+WGInfo | LxiCraft Commands: lc+serverinfo - lc+serverthreads | ');
   }
   if(message.content === "mc+join") {
	  //sorry, this version is too complicated for do this
  message.reply("Sorry ${message.author}, i can't do this, i'm in the Beta 1.1.0");
}
    if (message.content === '?ping') {
      message.channel.send(":ping_pong:  Pong!")
  }
   if (message.content === 'l+SayHello') {
      message.channel.send("/tts Ciao");
  }
  });
client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Il bot è startato, con ${client.users.size} utenti, in ${client.channels.size} canali da ${client.guilds.size} .`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Do for help | l+help `);

});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

var mybot = new Discord.Client();

mybot.on("Hello, i am the Official Bot of Lxi Inc.", function(message) {
	 if(!message.member.roles.some(r=>["Moderatore", "GL | Clan"].includes(r.name)) )
        message.send("Ciao GLs e Admins!");
    if(message.content === "Hi") {
        mybot.reply(message, "Hello, ${message.author}");
    }
	 if(message.content === "Hello") {
        mybot.reply(message, "Hello, ${message.author}");
    }
  
});

client.login("NDQ4ODU4MDM3Mzk5MzIyNjM1.DeoUMg.x-wkkQ2wSzZRo4rvBvWDCy7gXOc")