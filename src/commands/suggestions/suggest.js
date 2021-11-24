const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'suggest',
    description: 'Suggest something for me to add to the bot',
    timeout: 15000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const suggestionQuery = args.join(" ");
        if(!suggestionQuery) return message.reply('Please specify something to suggest.');
        const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Suggestion: ** ${suggestionQuery}`)
        .setColor('YELLOW')
        .setTimestamp()
        .setFooter('Please do not ask someone to review your suggestion. Please wait patiently until it is accepted or denied.')
        .addField('**Status:**', '*PENDING*')

        message.channel.send('Submitted suggestion successfully.');
        message.guild.channels.cache.get('849881360135225364').send(embed)
    }
}