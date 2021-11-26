const { Client, Message, MessageEmbed } = require('discord.js');
const items = require('../../shopItems');

module.exports = {
    name: 'shop',
    aliases: ['shop'],
    timeout: 12000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(items.length === 0) return message.reply('No items for sale.');

        const shopListEmbed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('')
        .setTitle('Shop')
        .setDescription(items.map((value, index) => {
            return `**${index+1}) ${value.item}**\n*${value.price} doubloons*\n`
        }))
        .setFooter('Hype Shop')
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))


        message.channel.send(shopListEmbed)
    }
}