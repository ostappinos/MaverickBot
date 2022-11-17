const { joinVoiceChannel } = require("@discordjs/voice");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "join",
  description: "Joins the voice channel.",

  run: async(client, interaction, args) =>  {

    let user = await interaction.member.fetch();
    let channel = await user.voice.channel;
if(!channel) return interaction.followUp("<a:imp_cross:1017919034219565166> | You have to be in a Voice Channel in order to use this command.").catch((e) => {

});
    joinVoiceChannel({
        channelId: interaction.member.voice.channel.id,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator
    });
    let embed = new MessageEmbed()
    .setDescription("<a:9970verifyblue:1017916682888564736>  | Joined voice channel.");
    interaction.followUp({embeds: [embed]}).catch((e) => {

  });
  },
};