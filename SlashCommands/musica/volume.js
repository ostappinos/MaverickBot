const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "volume",
  description: "Sets song's volume",
  options: [
    {
      name: "number",
      description: "provide a number.",
      type: "NUMBER",
      required: true,
    }
  ],

  run: async(client, interaction, args) =>  {
    const VoiceChannel = interaction.member.voice.channel;
    const Volume = interaction.options.getNumber("number")

    let embed_1 = new MessageEmbed()
    .setDescription('<a:imp_cross:1017919034219565166> | You have to be in a voice channel in order to listen music.')
    .setColor('#26f8ff');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let embed_2 = new MessageEmbed()
    .setDescription(`<a:9970verifyblue:1017916682888564736> | Set volume to ${Volume}%`)
    .setColor('#26f8ff');

    try {
        if(Volume > 100 || Volume < 1) return interaction.followUp("<a:imp_cross:1017919034219565166> | Choose between 0 to 100");
      client.distube.setVolume(VoiceChannel, Volume)
      return interaction.followUp({embeds: [embed_2]}).catch((e) => {

    });
    } catch (e) {
      const embed = new MessageEmbed()
      .setDescription(`<a:imp_cross:1017919034219565166> | Error: ${interaction.guild.me.voice.channelId}!`)
      .setColor("#26f8ff");
      interaction.followUp({embeds: [embed]}).catch((e) => {

    });
      console.log(e); 
    };
  },
};