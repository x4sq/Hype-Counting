const client = require('../index');

client.on('interaction', async (interaction) =>{
    if(interaction.isCommand()){
        await interaction.deferReply().catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if(!cmd) return interaction.followUp({ content: 'An error has occured'});

        const args = [];
        interaction.options.array().map((x) => {
            args.push(x.value);
        });

        cmd.run(client, interaction, args)
    }
});

