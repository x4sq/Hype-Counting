const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'add',
    timeout: 3000,

    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
        const member = message.mentions.members.first() || message.member;

        client.add(member.id, parseInt(args[0]));

        const addEmbed = new MessageEmbed()
        .setTitle('Success!')
        .setColor('#ffab44')
        .setFooter('Hype')
        .setTimestamp()
        .setDescription(`Successfully added ${args} doubloons to ${member}.`)

        message.channel.send(addEmbed)
    }
}