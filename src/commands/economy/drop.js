const { Client, Message, MessageEmbed } = require('discord.js');
const prefix = process.env.PREFIX
module.exports = {
    name: 'drop',
    timeout: 15000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(message.member.hasPermission('MANAGE_MESSAGES')) return;

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('Please mention a channel or channelId.')

        const doubloonsAmount = args[1];
        if(!coins) return message.reply('Please specify an amount of coins.')

        const filter = (msg) => msg.guild.id === message.guild.id && msg.content === `${prefix}claim`;

        channel.awaitMessages(filter, { max: 1, time: 6000 })
            .then(async(msg) =>{
                const id = msg.first().author.id
                const doubloonsToClaim = parseInt(doubloonsAmount);

                client.addListener(id, doubloonsToClaim);
                msg.first().reply(`Congratulations ${msg.first().author.id} you have claimed ${doubloonsToClaim} doubloons!`)
            })
    }
}