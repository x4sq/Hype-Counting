const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'deny-suggestion',
    timeout: 2000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
        const messageID = args[0];
        const denyQuery = args.slice(1).join(" ");

        if(!messageID) return message.reply('Please specify a suggestion messageID.')
        if(!denyQuery) return message.reply('Please specify a reason for denying this suggestion.')
        try {
            const suggestionChannel = message.guild.channels.cache.get('849881360135225364');
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);
            console.log(suggestedEmbed)

            const suggestedEmbedData = suggestedEmbed.embeds[0];
            const denyEmbed = new MessageEmbed()
            .setAuthor(suggestedEmbedData.author.name, suggestedEmbedData.author.iconURL)
            .setDescription(suggestedEmbedData.description)
            .setColor('RED')
            .addField('**Status:**', '*DENIED*', denyQuery)
            .setFooter('Your suggestion has been denied. Feel free to submit another suggestion.')
            .setTimestamp()

            suggestedEmbed.edit(denyEmbed);

            
            const user = await client.users.cache.find(
                (u)=> u.tag === suggestedEmbedData.author.name
                );
            user.send(`Your suggestion has been denied by a moderator in Hytrix Studio.`)

        } catch(err) {
            console.log(err)
            message.channel.send('That suggestion messageId does not exist.')

        }
    }
}