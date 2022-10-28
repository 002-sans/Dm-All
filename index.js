const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})
const toolversion = "1.0.0"
const snekfetch = require('snekfetch')
const fs = require('fs')

const q = require('readline-sync')

const consolecolor = require("gradient-string")

if (!fs.existsSync("./config.js")) fs.writeFileSync(`./config.js`, 'module.exports = {\n    token: "", // Your discord token\n    message: `` // The message to send\n}');
if (!fs.existsSync("./scraped.json")) fs.writeFileSync(`./scraped.json`, '{\n    "IDs": []\n}');


const config = require('./config')

let token = config.token
let message = config.message

if (!token) {console.log(consolecolor.instagram("[!] Put your token in the config.js file !")); process.exit(1)}
if (!message) message = "https://github.com/002-sans/Dm-All"

client.login(token)

snekfetch.get('https://api.npoint.io/7356a4b327ad51e35439').then(async r => {
    var version = r.body.version
    var serveur = r.body.server
    var nodm = r.body.cantdmall





    // Functions

    /**
 * Scrape Users
 * @param {string} guildID ID of gthe guild which to scrape the users from
 */
    async function Scrape(guildID) {

        const slt = client.guilds.cache.get(guildID)
        if (!slt){
            console.log(consolecolor("#FF0000","#FF0000")("No guild found..."))
        }
else{
        await client.guilds.fetch(guildID).then(async(guild) => {
            const file_path = './scraped.json';
            await guild.members.fetch();
            const MemberIDs = guild.members.cache.map((users) => users.id)
            console.log(consolecolor("#03fc24","#03fc90")("[!] " + MemberIDs.length + " Users Scraped"))
            const Data = {
                IDs: MemberIDs
            }
            const content = JSON.stringify(Data, null, 2)
            fs.writeFileSync(file_path, content, (err) => {
                if (err) return console.log(consolecolor("#FF0000","#FF0000")("Writing File Error: " + err))
                console.log(consolecolor("#03fc24","#03fc90")("Successfully made " + file_path))
            })
        }).catch((err) => {
            console.log(consolecolor("#FF0000","#FF0000")("Fetching Guild Error: " + err))
            setTimeout(() => {
                console.log("Warning: Restarting.");
            }, 1000);
            setTimeout(() => {
                main()
            }, 2000);
        })
    }
}

    function MassDMNormal(users, msg) {
        return new Promise((resolve, reject) => {
            const scraped = require("./scraped.json");
            users = scraped.IDs;
                for (let i = 0; i <= users.length; i++) {
                    client.users.fetch(users[i]).then((u) => {
                        u.send(msg).then(() => console.log(consolecolor("#00ffbf","#00ffee")("[+] Message Sent: " + u.tag + " messaged."))).catch((err) => console.log(consolecolor("#FF0000","#FF0000")("DM Error: User: " + u.tag + " may have DMs off. " + err)));
                    }).catch((err) => console.log(consolecolor("#FF0000","#FF0000")("Fetching User Error: " + err)));
                }
                resolve();
        })
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    function UpdateFile(FileName, Link) {
        let a = FileName;
        let b = Link;
        fs.unlink(`./${a}`, function(err) {
            if (err && err.code == 'ENOENT') {
                console.info("Un fichier n'existe pas, ne fermez pas la fenetre je vais l'installer.");
            } else if (err) {
                console.error("Une erreur s'est produite lors de la tentative de suppression du fichier");
            } else {
            }
        });
        var file = fs.createWriteStream(`./${a}`);
        var r = request(`${b}`).pipe(file);
        r.on('error', function(err) {
            console.log(err);
        });
        r.on('finish', function() {
            file.close(sleep(1));
        });
        }




        if (toolversion !== version){
            console.clear()
            console.log(consolecolor.cristal(`
                                     ██╗   ██╗██████╗ ██████╗  █████╗ ████████╗███████╗
                                     ██║   ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
                                     ██║   ██║██████╔╝██║  ██║███████║   ██║   █████╗  
                                     ██║   ██║██╔═══╝ ██║  ██║██╔══██║   ██║   ██╔══╝  
                                     ╚██████╔╝██║     ██████╔╝██║  ██║   ██║   ███████╗
                                      ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                                              
                                        Do not exit...
            `))

    UpdateFile("index.js", "https://raw.githubusercontent.com/002-sans/Dm-All/main/index.js");
    UpdateFile("start.bat", "https://raw.githubusercontent.com/002-sans/Dm-All/main/start.bat");

    console.clear()
    console.log(consolecolor.cristal(`
                                     ███████╗██╗███╗   ██╗██╗███████╗██╗  ██╗███████╗██████╗ 
                                     ██╔════╝██║████╗  ██║██║██╔════╝██║  ██║██╔════╝██╔══██╗
                                     █████╗  ██║██╔██╗ ██║██║███████╗███████║█████╗  ██║  ██║
                                     ██╔══╝  ██║██║╚██╗██║██║╚════██║██╔══██║██╔══╝  ██║  ██║
                                     ██║     ██║██║ ╚████║██║███████║██║  ██║███████╗██████╔╝
                                     ╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═════╝ 

                                        Restart the tool`))
    process.exit(1)
        }
        else{





        async function main() {
            console.clear()
    console.log(consolecolor("#03fc24","#03fc90")(`
                                :::::::::  ::::    ::::           :::     :::        :::        
                                :+:    :+: +:+:+: :+:+:+        :+: :+:   :+:        :+:        
                                +:+    +:+ +:+ +:+:+ +:+       +:+   +:+  +:+        +:+        
                                +#+    +:+ +#+  +:+  +#+      +#++:++#++: +#+        +#+        
                                +#+    +#+ +#+       +#+      +#+     +#+ +#+        +#+        
                                #+#    #+# #+#       #+#      #+#     #+# #+#        #+#        
                                #########  ###       ###      ###     ### ########## ########## `))
console.log(consolecolor("#03fc24","#03fcdf","#03fc24","#03fcdf","#03fc24")("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor.cristal(`                                      Friends: ${client.relationships.friendCache.size} | Guilds: ${client.guilds.cache.size} | Username: ${client.user.username}`))
console.log(consolecolor("#03fc24","#03fcdf","#03fc24","#03fcdf","#03fc24")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor("#03fc24","#03fc90")(`
    [1] DM ALL Server
    [2] DM ALL Friends
    [3] Exit
`))
const e = q.question(consolecolor("#03fc24","#03fc90")("[+] : "))
if (e === "1"){
    async function server() {
        console.clear()
console.log(consolecolor("#03fc24","#03fc90")(`
                        ::::::::  :::::::::: :::::::::  :::     ::: :::::::::: :::::::::  
                        :+:    :+: :+:        :+:    :+: :+:     :+: :+:        :+:    :+: 
                        +:+        +:+        +:+    +:+ +:+     +:+ +:+        +:+    +:+ 
                        +#++:++#++ +#++:++#   +#++:++#:  +#+     +:+ +#++:++#   +#++:++#:  
                               +#+ +#+        +#+    +#+  +#+   +#+  +#+        +#+    +#+ 
                        #+#    #+# #+#        #+#    #+#   #+#+#+#   #+#        #+#    #+# 
                         ########  ########## ###    ###     ###     ########## ###    ### `))
console.log(consolecolor("#03fc24","#03fcdf","#03fc24","#03fcdf","#03fc24")("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor.cristal(`                                      Friends: ${client.relationships.friendCache.size} | Guilds: ${client.guilds.cache.size} | Username: ${client.user.username}`))
console.log(consolecolor("#03fc24","#03fcdf","#03fc24","#03fcdf","#03fc24")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor("#03fc24","#03fc90")(`
    [1] DM ALL
    [2] Back
`))
const qu = q.question(consolecolor("#03fc24","#03fc90")("[+] : "))
if (qu === "1"){
    let response = q.question(consolecolor.cristal("What's the server ID ? : "))
    if (!response){
        console.log(consolecolor.instagram("No server id..."))
        await sleep(2000)
        server()
    }
    Scrape(response).then(() => {
        setTimeout(() => {
                MassDMNormal(null, message).catch((err) => {
                    console.log(err)
                    setTimeout(() => {
                        console.log(consolecolor.retro("Warning: Restarting."));
                    }, 1000);
                    setTimeout(() => {
                        main();
                    }, 2000);
            });
        }, 20000);
    });
}
else if (qu === "2"){
    main()
}
else{
    console.log(consolecolor.cristal("Missclick ???"))
    await sleep(1000)
    server()
}
}
server()
}
else if (e === "2"){
    async function friend() {
        console.clear()
console.log(consolecolor("#03fc24","#03fc90")(`
                        :::::::::: :::::::::  ::::::::::: :::::::::: ::::    ::: :::::::::   ::::::::  
                        :+:        :+:    :+:     :+:     :+:        :+:+:   :+: :+:    :+: :+:    :+: 
                        +:+        +:+    +:+     +:+     +:+        :+:+:+  +:+ +:+    +:+ +:+        
                        :#::+::#   +#++:++#:      +#+     +#++:++#   +#+ +:+ +#+ +#+    +:+ +#++:++#++ 
                        +#+        +#+    +#+     +#+     +#+        +#+  +#+#+# +#+    +#+        +#+ 
                        #+#        #+#    #+#     #+#     #+#        #+#   #+#+# #+#    #+# #+#    #+# 
                        ###        ###    ### ########### ########## ###    #### #########   ########  `))
console.log(consolecolor("#03fc24","#03fcdf","#03fc24","#03fcdf","#03fc24")("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor.cristal(`                                      Friends: ${client.relationships.friendCache.size} | Guilds: ${client.guilds.cache.size} | Username: ${client.user.username}`))
console.log(consolecolor("#03fc24","#03fcdf","#03fc24","#03fcdf","#03fc24")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
console.log(consolecolor("#03fc24","#03fc90")(`
    [1] DM ALL SPEED
    [2] DM ALL INTERVAL
    [3] Back
`))
const qu = q.question(consolecolor("#03fc24","#03fc90")("[+] : "))
if (qu === "1"){
    client.relationships.friendCache.forEach((friend) => {
        friend.send(message).then(() => console.log(consolecolor("#00ffbf","#00ffee")(`[+] Message Sent: ${friend.username}`))).catch((e) => console.log(consolecolor("#ff0000","#ff0099")(`[-] Message not sent: ${friend.username} | Error: ${e}`)))
    })
}
else if (qu === "2"){
const time = q.question(consolecolor.cristal("How long do you want to wait before sending the next message? (s) : "))
        client.relationships.friendCache.forEach((friend) => {
            setTimeout(() => {
            friend.send(message).then(() => console.log(consolecolor("#00ffbf","#00ffee")(`[+] Message Sent: ${friend.username}`))).catch((e) => console.log(consolecolor("#ff0000","#ff0099")(`[-] Message not sent: ${friend.username} | Error: ${e}`)))
        }, time * 1000);
        })
}
else if (qu === "3"){
    main()
}
else{
    console.log(consolecolor.cristal("Missclick ???"))
    await sleep(1000)
    friend()
}
}
friend()
}
else if (e === "3"){
    process.exit(1)
}
else{
    console.log(consolecolor.cristal("Missclick ???"))
    await sleep(1000)
    main()
}
        }

        client.on("ready", async () => main())


    }

}).catch(() => console.log(consolecolor.instagram("[!] An error occurred while connecting to the API, please restart the script...")) && process.exit(1))