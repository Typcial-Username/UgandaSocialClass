const { SlashCommandBuilder } = require('@discordjs/builders')
const { CommandInteraction } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("pings the bot"),
    /**
     * @param {CommandInteraction} interaction 
     */
    async callback(interaction) {
        await interaction.reply('Pong')
    }
}