const {Discord, MessageEmbed, Permissions, ButtonBuilder, ButtonStyle, ActionRowBuilder, EmbedBuilder, Colors, version,
} = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new EmbedBuilder()
    .setAuthor({
      name: "Bot İstatistik",
      iconURL: client.user.avatarURL(),
    })
    .setDescription(
      `
 
  📊 Toplam Kullanıcı: **${client.users.cache.size}**
  📊 Toplam Sunucu: **${client.guilds.cache.size}**
  📊 Toplam Kanal: **${client.channels.cache.size}**
 
  📊 Hafıza Kullanımı: **${(
    process.memoryUsage().heapUsed /
    1024 /
    512
  ).toFixed(2)}Mb**
  📊 Uptime: **${Uptime}**
 
  📊 NodeJS Sürümü: **${process.version}**
  📊 DiscordJS Sürümü: **${version}**`
    )
    .setFooter({
      text: `Bot İstatistik`,
      iconURL: message.member.displayAvatarURL({ dynamic: true }),
    })
    .setColor("#ff0000");
  message.reply({ embeds: [embed] });
};
module.exports.conf = {
aliases: ['istatistik'],
permLevel: 0, 
kategori: 'Sunucu'
};

module.exports.help = {
    name: 'istatistik',
    description: 'Sunucu İstatistik Gösterir.',
    usage: 'istatistik'
};
