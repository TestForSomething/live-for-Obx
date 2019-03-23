const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', msg => {
    if (msg.content == 'join') {
        if (msg.member.voiceChannel) {

         if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react(👍'));
     }
    }
}
})
client.on('ready', () => { 
client.channels.get("557617568924303380").join();
    });

client.login(process.env.BOT_TOKEN);
