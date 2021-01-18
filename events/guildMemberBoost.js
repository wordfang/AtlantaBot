let discord = require('discord.js')
let p = [
    'https://media.discordapp.net/attachments/799318423766171658/799931309828734986/20210116_161842_0000.png'
]
let rstatus = Math.floor(Math.random() * p.length);

module.exports = async (client, member) => {
    let embed = new discord.MessageEmbed()
        .setColor('#f674ff')
        .setAuthor('Member Boost', 'https://cdn.discordapp.com/emojis/638719606738911236.gif')
        .setDescription(`Thanks you ${member}, for boosting the server!`)
        .setImage(p[rstatus])
    client.channels.cache.get('799256537901039619').send(embed)
}
