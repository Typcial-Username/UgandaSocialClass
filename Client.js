const { Client, ClientOptions, Collection } = require("discord.js");

class SocialClient extends Client {
    /**
     * @param {ClientOptions} options 
     */
    constructor(options) {
        super(options)
        this.client = new Client(options)
        this.commands = new Collection()
    }

    // get commands() {
    //     return this.commands
    // }

    // set commands(commands) {
    //     this.commands = commands
    // }
}

module.exports = SocialClient;