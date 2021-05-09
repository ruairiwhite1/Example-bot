const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
    console.log('Bot ready!')
})

client.on('message', message => {
    if (message.content === 'can I get a') {
        message.channel.send('HUUU YEAH!')
    } 
})

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('pong!')
    } 
})

client.on('message', message => {
    if (message.content === '!mealdeal') {
        number = 11;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/mealdeal" + imageNumber + ".png"]})
    } 
})

client.on('message', message => {
    if (message.content === '!finest') {
        number = 11;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./images/finest" + imageNumber + ".png"]})
    } 
})

client.login(config.token)