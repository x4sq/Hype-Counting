const { Client, Message, MessageEmbed } = require('discord.js');
const Schema = require('../../schema/welcomeChannel')

module.exports = {
    name: 'check-channel',
    timeout: 10000,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_ROLES')) return message.reply('Invalid permissions.')


        Schema.findOne({ Guild: message.guild.id}, async(err, data) =>{
            if(!data) return message.reply('This guild has no data stored.');
            
            const channel = client.channels.cache.get(data.Channel);

            message.reply(`Welcome channel => ${channel}`)


        })

    }
}