const { getVoiceConnection } = require("@discordjs/voice");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "disconnect",
  description: "Leaves the voice channel.",

  run: async(client, interaction, args) =>  {
    const connection = getVoiceConnection(interaction.guild.id);

    if(!connection) return interaction.followUp("<a:imp_cross:1017919034219565166> | I'm not in a voice channel!").catch((e) => {

  });

    let embed = new MessageEmbed()
    .setDescription("<a:9970verifyblue:1017916682888564736>  | Left voice channel.");

    connection.destroy();
    interaction.followUp({embeds: [embed]}).catch((e) => {

  });

},
};