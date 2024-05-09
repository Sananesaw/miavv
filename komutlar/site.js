const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`**:cat: Site Linki [TIKLA](https://miav.vercel.app/)**\n`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

module.exports.help = {
  name: 'site',
  description: 'Bot Davet',
  usage: 'komutlar'
};
