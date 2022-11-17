const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "play",
  description: "Metti una canzone!",
  options: [
    {
      name: "canzone",
      description: "Link o Nome della canzone.",
      type: "STRING",
      required: true,
    }
  ],

  run: async(client, interaction, args) =>  {

    const VoiceChannel = interaction.member.voice.channel;
    const music = interaction.options.getString("canzone")

    if(!music) return interaction.followUp("<a:imp_cross:1017919034219565166> | Provide a Song name or a link to play a Song.")

    let embed_1 = new MessageEmbed()
    .setDescription('<a:imp_cross:1017919034219565166> | You must be in a voice channel in order to listen to music.')
    .setColor('#26f8ff');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let embed_2 = new MessageEmbed()
    .setDescription(`<a:imp_cross:1017919034219565166> | I am being used in <#${interaction.guild.me.voice.channelId}>!`)
    .setColor('#26f8ff');
    if(interaction.guild.me.voice.channelId && VoiceChannel.id !== interaction.guild.me.voice.channelId) return interaction.followUp({embeds: [embed_2]}).catch((e) => {
});

    try {
      client.distube.play(VoiceChannel, music, { textChannel: interaction.channel, member: interaction.member});
      let embed_3 = new MessageEmbed()
      .setDescription(`<a:9970verifyblue:1017916682888564736> | Canzone trovata.`)
      .setColor('#26f8ff');
      interaction.followUp({embeds: [embed_3]}).catch((e) => {

    });
    } catch (e) {
      const embed = new MessageEmbed()
      .setDescription(`<a:imp_cross:1017919034219565166> | Errore: ${interaction.guild.me.voice.channelId}!`)
      .setColor("#26f8ff");
      interaction.followUp({embeds: [embed]}).catch((e) => {

    });
    };
  },
};
