const { GuildMember } = require('discord.js')
const { lowClass } = require('../config.json')

module.exports = {
	name: 'guildMemberAdd',
    /**
     * 
     * @param {GuildMember} member 
     */
	execute(member) {
		console.log(`${member.user.username} joined`);
        member.roles.add(lowClass, "user join low class")
	},
};