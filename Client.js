const { Client, ClientOptions, Collection } = require("discord.js");

class SocialClient extends Client {
    /**
     * @param {ClientOptions} options 
     */
    constructor(options) {
        super(options)
        this.client = new Client(options)
        this.commands = new Collection()
        this.users = new Collection()
    }
}

module.exports = SocialClient;