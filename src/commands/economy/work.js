const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'work',
    timeout: 1000 * 60 * 1,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const jobs = ['Programmer', 'Janitor', 'Architect', 'Waiter', 'Bus Driver', 'Teacher', 'Chef', 'Doctor'];

        const jobIndex = Math.floor(Math.random() * jobs.length);
        const doubloons = Math.floor(Math.random() * 200) + 1;






        
        const workEmbed = new MessageEmbed()
        .setTitle('Successfully worked!')
        .setColor('#ffab44')
        .setFooter('Hype')
        .setTimestamp()
        .setDescription(`You worked as **a/an ${jobs[jobIndex]}** and earned **${doubloons} doubloons!**`)

        message.channel.send({ embeds: [workEmbed] })
        client.add(message.author.id, doubloons)
    }
}