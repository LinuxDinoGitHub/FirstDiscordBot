require('dotenv').config();//initialises .env

const { token } = process.env; //gets the environement file
const { Client, Collection, GatewayIntentBits } = require('discord.js'); //unpacks the discord.js module
const fs = require('fs'); //file system module

const client = Client({ intents: GatewayIntentBits.Guilds }); //discord api stuff
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync('./src/functions');
for (const folder of functionFolders) {
    const functionFiles = fs
        .readdirSync(`./src/function/${folder}`)
        .filter(file => file.endsWith('.js'));
    for (const file of functionFiles)
        require(`./functions/${folder}/${file}`)(client);
}