import fetch from "node-fetch";
//const fetch = require("./node_modules/node-fetch/src/index.js ")
//const fetch = require("node-fetch")
import Discord from "discord.js";
//const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})

const api_url = 
     "http://127.0.0.1:5000/" ;

api_url = api_url + msg.content;

const apiname = apiurl.replaceAll(' ', '_');


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  const data = getapi(apiname);
  if (msg.author.bot) return
  if (msg.content === "hi") {
    msg.reply("hello");
  }
  else if (msg.content === "abc") {
    msg.reply("def");
  }
})


//nsfw link filtering
var arr = ["pornhub", "redtube", "xvideo", "xhamster", "xnxx"];

client.on("messageCreate", msg => {
      if (msg.author.bot) return
      const link = msg.content;

      if(link.includes('https://www.')) {
        const site = link.slice(12);   //returns(site) leetcode.com/problems/decode-string/
        const index = site.indexOf('.');  //retuns(index) 8
        const sitename = site.slice(0, index); //returns(sitename) leetcode
        let count = 0;
        arr.forEach((item) => {
          if(item === sitename) {
            count++;
          } 
        })
        if(count) {
            msg.reply("⚠️  This message is inappropriate and goes against the community guidelines. PLease delete it or else strict actions will be taken. ⚠️");
          } 
        }
})






//const mySecret = process.env['TOKEN']
const mySecret = "";
client.login(mySecret);

// http://127.0.0.1:5000/name/3/0/13/1/0/5


// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data.Probability);
    return data ;

}
// Calling that async function