const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'doubleornothing',
    aliases: ['don', 'double-or-nothing', 'double'],
    timeout: 4000, 
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!args[0]) return message.reply('Please specify an amount to bet!');

        if(isNaN(args[0])) return message.reply('Amount betting must be a number.');

        const amountToBet = parseInt(args[0]);

        if(await client.bal(message.author.id) < amountToBet) return message.reply('Insufficient balance.');

        function random(){
            const num = Math.floor(Math.random() * 2);
            return num === 1;
        };
        if(random() === true){
            const winAmount = amountToBet * 2;
            message.channel.send(`Congratulations! You have won ${winAmount} doubloons!`)
            client.add(message.author.id, winAmount)
        } else {
            message.channel.send(
                `You lost ${amountToBet} doubloons. Try again later!`
            );
            client.rmv(message.author.id, amountToBet);
        }

    }
}