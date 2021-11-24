const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'accept-suggestion',
    timeout: 2000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
        const messageID = args[0];
        const acceptQuery = args.slice(1).join(" ");

        if(!messageID) return message.reply('Please specify a suggestion messageID.')
        if(!acceptQuery) return message.reply('Please specify a reason for accepting this suggestion.')
        try {
            const suggestionChannel = message.guild.channels.cache.get('849881360135225364');
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);

            const suggestedEmbedData = suggestedEmbed.embeds[0];
            const acceptEmbed = new MessageEmbed()
            .setAuthor(suggestedEmbedData.author.name, suggestedEmbedData.author.iconURL)
            .setDescription(suggestedEmbedData.description)
            .setColor('GREEN')
            .addField('**Status:**', '*ACCEPTED*', acceptQuery)
            .setFooter('Congratulations! Your suggestion has been accepted! It will most likely be implemented in the next few days, unless I change my mind. >:)')
            .setTimestamp()

            suggestedEmbed.edit(acceptEmbed);

            
            const user = await client.users.cache.find(
                (u)=> u.tag === suggestedEmbedData.author.name
                );
            user.send(`Your suggestion has been accepted by a moderator in Hytrix Studio.`)

        } catch(err) {
            console.log(err)
            message.channel.send('That suggestion messageId does not exist.')

        }
    }
}