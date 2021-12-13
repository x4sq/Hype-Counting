const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'daily',
    timeout: 1000 * 60 * 60 * 24,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const doubloons = Math.floor(Math.random() * 2000) + 1;




        const dailyEmbed = new MessageEmbed()
        .setTitle('Successfully claimed daily reward!')
        .setColor('#ffab44')
        .setFooter('Hype')
        .setTimestamp()
        .setDescription(`You recieved **${doubloons} doubloons** as your daily reward. Make sure to come back and claim it in 24 hours!`)

        message.channel.send({ embeds: [dailyEmbed] })
        client.add(message.author.id, doubloons)
    }
}