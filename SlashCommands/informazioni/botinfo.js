const { version: djsversion, MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    name: "botinfo",
    description: "Mostra le informazioni del bot",

    run: async (client, interaction, args) => {
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
          let totalSeconds = (client.uptime / 1000);
          let days = Math.floor(totalSeconds / 86400);
          totalSeconds %= 86400;
          let hours = Math.floor(totalSeconds / 3600);
          totalSeconds %= 3600;
          let minutes = Math.floor(totalSeconds / 60);
          let seconds = Math.floor(totalSeconds % 60);
          let uptime = `${days} giorno, ${hours} ora, ${minutes} minuti ${seconds} secondi`;
            
        const embed = new MessageEmbed()
        .setColor('#ffffff')
        .setTitle(`${client.user.username}'Informazioni`)
        .setThumbnail(client.user.displayAvatarURL())
        .addFields(
        { name: `<a:899197516380254249:1017917881549340773> ・${client.user.username}'s Tag:`, value: client.user.tag },
        { name: `<a:899197516380254249:1017917881549340773> ・${client.user.username}'s ID:`, value: client.user.id },
        { name: "<a:899197516380254249:1017917881549340773> **・Node.js:**", value: process.version },
        { name: "<a:899197516380254249:1017917881549340773> **・Discord.js:**", value: `v${djsversion}` },
        { name: "<a:899197516380254249:1017917881549340773> **・Conteggio comandi:**", value: `${client.slashCommands.size}`},
        { name: "<a:899197516380254249:1017917881549340773> **・Conteggio server:**", value: numberWithCommas(client.guilds.cache.size) },
        { name: "<a:899197516380254249:1017917881549340773> **・Conteggio Utenti:**", value: numberWithCommas(client.guilds.cache.reduce((a,b) => a + b.memberCount, 0)) },
        { name: "<a:899197516380254249:1017917881549340773> **・Created at:**", value: `${moment(client.user.createdTimestamp).format('LT')} ${moment(client.user.createdTimestamp).format('LL')} - (${moment(client.user.createdTimestamp).fromNow()})` },
        )
        .setFooter({
            text: `Richiesto da ${interaction.user.username}`}
            )
        .setTimestamp();

        interaction.followUp({ embeds: [embed] }).catch((e) => {

        });
    },
};
