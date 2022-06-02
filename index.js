require('dotenv').config()
const SocialClient = require('./Client')
const { Intents, Client, Collection } = require('discord.js')

const client = new SocialClient({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
})

client.loadCommands()
client.loadEvents()


client.login(process.env.TOKEN)