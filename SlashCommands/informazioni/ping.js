module.exports = {
    name: "ping",
    description: "Mostra il ping del Bot",

    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms! attuali del bot` }).catch((e) => {
          
        });
    },
};
