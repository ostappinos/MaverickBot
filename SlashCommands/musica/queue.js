const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "queue",
  description: "Shows queue in the server.",
  aliases: ["q"],

  run: async(client, interaction, args) =>  {

    const VoiceChannel = interaction.member.voice.channel;
    const queue = await client.distube.getQueue(VoiceChannel);


    let embed_2 = new MessageEmbed()
    .setDescription(`${queue.songs.map(
        (song, id) => `\n**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
    )}`)
    .setColor('#26f8ff');

    if (queue) {
        interaction.followUp({embeds: [embed_2]}).catch((e) => {

      });
      };
      if(!queue || !queue.songs || queue.songs.length == 0) return interaction.followUp("<a:imp_cross:1017919034219565166> | I am not playing anything.").catch((e) => {

    });

  },
};