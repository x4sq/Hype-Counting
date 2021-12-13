const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'bal',
    timeout: 3000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.member;

        const bal = await client.bal(message.member.id);
        const balEmbed = new MessageEmbed()
        .setTimestamp()
        .setFooter('Hype')
        .setDescription(`**Your balance is ${bal}` + " doubloons **")
        .setTitle('Balance')
        .setColor('#ffab44')
        message.channel.send({ embeds: [balEmbed] });

    }
}