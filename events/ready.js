const client = require("../index");

client.on("ready", async () => {
    console.log(`${client.user.tag} Bot Online`);
    console.log("Creato da !mav#2319");
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 
        let serverIn = numberWithCommas(client.guilds.cache.size);
        let totalMembers = numberWithCommas(client.guilds.cache.reduce((a,b) => a + b.memberCount, 0));

        client.user?.setPresence({
            status: "idle", 
            activities: [   
                {
                    name: `/help | Mav Music ♪`,
                    type: "STREAMING", 
                    url: "https://www.twitch.tv/ostapippo" 
                }
            ]
    });
});