const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1].trim();
        return message.reply({
            content: "Generating Short ID for " + url,
        });
    }

    message.reply({
        content: "Hi From Bot",
    });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply('Pong!!');
});

client.login(process.env.DISCORD_BOT_TOKEN);

app.get('/', (req, res) => {
    res.send('Discord bot is running!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
