const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableEveryone: true
})

const mongoose  = require('mongoose')
mongoose.connect(require(process.env.MONGO), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log('Connected to mongo db!'));

const path = require('path')
const fs = require('fs')
//const config = require('./config.json');
module.exports = client;
client.commands = new Collection();
client.prefix = process.env.PREFIX;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
}); 


process.on("unhandledRejection", (reason, p) => {
    console.log(" [antiCrash] :: Unhandled Rejection/Catch");
    console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch");
    console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
    console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
    console.log(" [antiCrash] :: Multiple Resolves");
    console.log(type, promise, reason);
});

client.login(process.env.TOKEN);