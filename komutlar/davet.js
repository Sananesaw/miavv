const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`**💼 Botun Davet Linki [TIKLA](https://discord.com/api/oauth2/authorize?client_id=1171024619466137700&permissions=8&scope=bot)**\n`);
    } catch (e) {
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0,
  kategori: 'Genel'
};

module.exports.help = {
  name: 'davet',
  description: 'Bot Davet',
  usage: 'komutlar'
};
