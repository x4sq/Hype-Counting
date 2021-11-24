const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require('../../Collection');
module.exports = {
    name: "afk",
    usage: '>afk',
    description: 'Sets you as afk and lets people know when they mention you',
    timeout: 5000,

    run: async (client, message, args) =>{
        const reason = args.join(' ') || 'No reason provided.';

        afk.set(message.author.id,[ Date.now(), reason]);

        message.reply(`You are now afk for reason: \`${reason}\``)
    }
}