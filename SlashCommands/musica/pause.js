const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "pause",
  description: "Pauses the song.",

  run: async(client, interaction, args) =>  {
    const VoiceChannel = interaction.member.voice.channel;
    const queue = await client.distube.getQueue(VoiceChannel);
    let embed_1 = new MessageEmbed()
    .setDescription('<a:imp_cross:1017919034219565166> | You have be in a voice channel in order to listen to music.')
    .setColor('#26f8ff');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let embed_2 = new MessageEmbed()
    .setDescription("<a:9970verifyblue:1017916682888564736>  | Song is paused.")
    .setColor('#26f8ff');

    try {
      if(!queue || !queue.songs || queue.songs.length == 0) return interaction.followUp("<a:imp_cross:1017919034219565166> | I am not playing anything.");
        queue.pause(VoiceChannel)
      return interaction.followUp({embeds: [embed_2]}).catch((e) => {

    });
    } catch (e) {
      const embed = new MessageEmbed()
      .setDescription(`<a:imp_cross:1017919034219565166> | Error: ${interaction.guild.me.voice.channelId}!`)
      .setColor("#26f8ff");
      interaction.followUp({embeds: [embed]}).catch((e) => {

    });
      console.log(e) ;
    };
  },
};