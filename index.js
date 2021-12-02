const { Client, Intents } = require('discord.js');
const { TOKEN } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    console.log('interaction', interaction); // eslint-disable-line
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'beep') {
        await interaction.reply('Boop!');
    }
});

client.login(TOKEN);
