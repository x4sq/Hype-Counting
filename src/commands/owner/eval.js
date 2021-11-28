const { Message, MessageEmbed, Client } = require('discord.js');
const beautify = require('beautify');


module.exports = {
    name: 'eval',
    timeout: 10000,
    usage: 'eval [string]',
    description: 'Evaluates JavaScript code inputed from args.\nOnwer Only Command\nSelfnote: don\'t use this next to many people idk they could take your token i guess lmao',
    
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {string[]} args 
     */
    run: async(client, message, args) => {
        if (message.author.id !== '354770008804425743') {
            return message.channel.send('No.')
                .then(m => setTimeout(() => { m.delete(); }, 5000));
        }

        if (!args[0]) { 
            return message.channel.send('Give me something to evaluate tho')
                .then(m => setTimeout(() => { m.delete(); }, 5000));
        }

        try {
            if (args.join(' ').toLowerCase().includes('token')) return message.channel.send('oh nononono you\'re not getting the token you\'re NOT GETTING IT IDNFIABGDJDNWIKG');

            const toEval = args.join(' ');
            const evaluated = eval(toEval);

            let embed = new MessageEmbed()
                .setColor('GREEN')
                .setTimestamp()
                .setTitle('Eval')
                .addField('To Evaluate', `\`\`\`js\n${beautify(toEval, { format: 'js' })}\n\`\`\``)
                .addField('Evaluated', evaluated)
                .addField('Type of', typeof(evaluated))
                .setFooter(client.user.username, client.user.displayAvatarURL);

            message.channel.send(embed);
        } catch (e) {
            let embed = new MessageEmbed()
                .setColor('RED')
                .setTitle('Error')
                .setDescription(e)
                .setFooter(client.user.username, client.user.displayAvatarURL);

            message.channel.send(embed);
        }
    }
};