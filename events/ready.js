const SocialClient = require('../Client')

module.exports = {
	name: 'ready',
	once: true,
    /**
     * @param {SocialClient} client 
     */
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};