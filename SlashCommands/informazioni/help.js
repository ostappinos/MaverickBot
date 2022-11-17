const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
  name: "help",
  description: "Mostra il Help Menu",

  run: async (client, interaction, args) => {

    const BotInfo = new MessageEmbed()
    .setColor('#0000ff')
    .setThumbnail(client.user.displayAvatarURL())
    .addField('**Ei ciao! Sono Maverick. Il migliore bot per ascoltare musica in pace**', "**<a:X_dec_bluearrow:1017916680208388146>  Il mio prefisso ➡️ /**", "**Ho piu' di 15 comandi che puoi trovare nel menu sotto**", "**Invitami nel tuo server usando ora il comando /invita**")
    .addField('**Ho piu di 16 comandi che puoi trovare nel menu sotto**', "**Invitami nel tuo server usando ora il comando /invita**")
    .addField('**Aiuto Navigazione:**', '**Clicca nel Menu sotto per avere aiuto nelle specifiche categorie!**')
    .addField('**Menu:**', "**🧊  Informazioni**", '**🎵  Musica**')
    .addField('**🎵  Musica**', "**Se trovi dei bug o altro manda pure un messaggio a mav#23!**", '**🎵  Musica**')
    .addField('**Bot di:**', "**! mav#2319**")
    .setImage("https://cdn.discordapp.com/attachments/1042024104137592912/1042590173734653952/standard.gif")
    .setFooter({
      text: `Bot programmato da Mav | Chiamato da ${interaction.user.username}`}
      )
    .setTimestamp();


    const Information = new MessageEmbed()
    .setColor('#e0ffff')
    .setTitle('🧊 Informazioni')
    .addField("**/help**", "Mostra l'Help Menu")
    .addField("**/botinfo**", "Mostra informazioni del Bot.")
    .addField("**/ping**", "Mostra Ping del Bot")
    .addField("**/invite**", "Invito per il Bot")
    .addField("**/supporto**", "link al supporto del Bot")
    .addField("**/vota**", "Link per votare il Bot.")
    .setFooter({
      text: "Bot creato da !mav#2319"
    });
      const music = new MessageEmbed()
      .setColor("#4b0082")
      .setTitle('🎵 Musica')
      .addField("*/play*", "Metti una canzone")
      .addField("**/skip**", "Skippa una canzone")
      .addField("**/stop**", "Stoppa una canzone")
      .addField("**/pause**", "Metti in pausa una canzone")
      .addField("**/resume**", "Riprendi canzone")
      .addField("**/join**", "Fai entrare il bot in una chat vocale")
      .addField("**/leave**", "Fai uscire il bot da una chat vocale")
      .addField("**/volume**", "Setta il volume")
      .addField("**/queue**", "Mostra la coda attualmente in riproduzione.")
      .addField("**/loop**", "Esegue in loop una coda o un brano attualmente in riproduzione.")

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("help-menu")
          .setPlaceholder(`${client.user.username}'Help Menu`)
          .setDisabled(state)
          .addOptions([
            {
              label: "Informazioni",
              emoji: "🧊",
              description: 'Infomazioni dei comandi',
              value: "option1",
            },
            {
              label: "Musica",
              emoji: "🎵",
              description: 'Comandi della Musica',
              value: "option2",
            },        
          ])
      ),
    ];

    const initialMessage = await interaction.followUp({
      embeds: [BotInfo],
      components: components(false),
    }).catch((e) => {

  });

      const collector = interaction.channel.createMessageComponentCollector({
        componentType: "SELECT_MENU",
      });
  
      collector.on("collect", (message) => {
        if(message.values[0] == "option1") {
          initialMessage.edit({ embeds: [Information] });
      }
      if(message.values[0] == "option2") {
        initialMessage.edit({ embeds: [music] });
    }

      });

},
};
