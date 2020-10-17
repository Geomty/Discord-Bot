const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // change the prefix here

client.once('ready', () => {
    console.log(`The bot is online!`);
});

client.on('message', message => {
    // these three lines below just help filter which messages are actually commands, don't worry about them
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    // this is the ping command
    if (command === 'ping') {
        message.channel.send('pong');
    }
});

client.login('(token)');
// please put the token in the line above, where it says "(token")
