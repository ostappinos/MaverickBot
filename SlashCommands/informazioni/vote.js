const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "vota",
    description: "Link per votare il bot",
    run: async(client, interaction, args) => {
      const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('VOTAMI COME MIGLIORE BOT')
          .setURL(`https://top.gg/bot/1018080976557047858`)
					.setStyle("LINK"),
			);

  const inviteembed = new MessageEmbed()
  .setColor('#0000ff')
  .setTitle(`Invite ${client.user.username} now`)
  .setImage(client.user.displayAvatarURL())
  .setFooter({
    text: `${client.user.username}`, 
    iconURL: client.user.displayAvatarURL({dynamic: true})})

    interaction.followUp({embeds: [inviteembed], components: [button]}).catch((e) => {

  });
}
}
