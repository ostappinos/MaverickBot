const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
    name: "supporto",
    description: "Link Supporto.",

    run: async(client, interaction, args) => {
     const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Join my server')
          .setURL("https://discord.gg/bXqBQcNw")
					.setStyle("LINK"),
			);


    const sembed = new MessageEmbed()
    .setColor('#0000ff')
    .setTitle(`Join ${client.user.username}'s support server for help`)
    .setImage(client.user.displayAvatarURL())
    .setFooter({
      text: `${client.user.username}`, 
      iconURL: client.user.displayAvatarURL({dynamic: true})})
      interaction.followUp({embeds: [sembed], components: [button]}).catch((e) => {
 
    });
}
}
