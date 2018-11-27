const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', async() => {
var server = "399549569769144320"; // ايدي السررفر
var channel = "515593865575661578";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,gloryglory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory,glory , **')
    },305);
});





client.login("NTE1NTkzMDQ4MzQ0ODg3Mjk2.Dt4PlA.gZ-8zE-iYa_8ys8Tf71feV8nb3A");
