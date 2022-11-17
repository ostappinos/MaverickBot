const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "loop",
  description: "Toggle loop.",

  run: async(client, interaction, args) =>  {

    const VoiceChannel = interaction.member.voice.channel;
    const queue = await client.distube.getQueue(VoiceChannel);
    let embed_1 = new MessageEmbed()
    .setDescription('<a:imp_cross:1017919034219565166> | You have be in a voice channel in order to listen to music.')
    .setColor('#0000ff');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let Mode = await client.distube.setRepeatMode(queue);

    let embed_2 = new MessageEmbed()
    .setDescription(`<a:9970verifyblue:1017916682888564736>  | Modalita Loop attivata per **${Mode ? Mode == 2 ? "All Queue" : "Questa canzone" : "Off"}**.`)
    .setColor('#0000ff');

    try {
      if(!queue || !queue.songs || queue.songs.length == 0) return interaction.followUp("<a:imp_cross:1017919034219565166> | I am not playing anything.");
      interaction.followUp({embeds: [embed_2]}).catch((e) => {

    });
    } catch (e) {
      const embed = new MessageEmbed()
      .setDescription(`<a:imp_cross:1017919034219565166> | Errore: ${interaction.guild.me.voice.channelId}!`)
      .setColor("#0000ff");
      interaction.followUp({embeds: [embed]}).catch((e) => {

    });
      console.log(e);
    };
 
  },
};