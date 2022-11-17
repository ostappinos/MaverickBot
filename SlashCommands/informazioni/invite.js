const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invita",
    description: "Link per invitare il bot",
    run: async(client, interaction, args) => {
      const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('INVITAMI')
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=975606637509345290&permissions=294241990656&scope=bot`)
					.setStyle("LINK"),
			);

  const inviteembed = new MessageEmbed()
  .setColor('#ff0000')
  .setTitle(`Invito ${client.user.username}`)
  .setImage(client.user.displayAvatarURL())
  .setFooter({
    text: `${client.user.username}`, 
    iconURL: client.user.displayAvatarURL({dynamic: true})})

    interaction.followUp({embeds: [inviteembed], components: [button]}).catch((e) => {

  });
}
}
