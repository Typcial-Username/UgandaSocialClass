const { Client, ClientOptions, Collection } = require("discord.js");
const fs = require('node:fs');
const path = require('node:path');

class SocialClient extends Client {
    /**
     * @param {ClientOptions} options 
     */
    constructor(options) {
        super(options)
        // this.client = new Client(options)
        this.commands = new Collection()
        this.users = new Collection()
    }

    loadCommands() {
        const commandsPath = path.join(__dirname, 'commands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            this.commands.set(command.data.name, command);
        }
    }

    loadEvents() {
        const eventsPath = path.join(__dirname, 'events');
        const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

        for (const file of eventFiles) {
            const filePath = path.join(eventsPath, file);
            const event = require(filePath);
            if (event.once) {
                this.once(event.name, (...args) => event.execute(...args));
            } else {
                this.on(event.name, (...args) => event.execute(...args));
            }
        }
    }
}

module.exports = SocialClient;