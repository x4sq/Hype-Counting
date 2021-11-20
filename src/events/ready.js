const client = require('../../src/index');

client.on('ready', (message) => {
    console.log(`${client.user.tag} is now online!`);



})