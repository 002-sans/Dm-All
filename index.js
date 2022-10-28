// Modules
const { Client } = require("discord.js-selfbot-v13");
const consolecolor = require("gradient-string");
const red = consolecolor("#FF0000", "#ff6200")
const yellow = consolecolor("#fffb00", "#aeff00")
const greenBright = consolecolor("#22ff00", "#00ff99")
const yellowBright = consolecolor("#00ff99", "#8cff00")
const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });
const fs = require("fs");
const snekfetch = require('snekfetch')
const toolver = "1.0.0"

snekfetch.get("https://api.npoint.io/7356a4b327ad51e35439").then(r => {
const version = r.body.version
if (toolver === version){
// Instance(s) & Settings
const client = new Client({checkUpdate: false});
let { token, message } = require("./settings");
if (!token) throw new Error("You must put your token in the settings file")
if (!message) message = "https://github.com/002-sans/Dm-All"

// When client is on
client.on("ready", () => {
    Main();
});


function Main() {
    console.clear()
    console.log(greenBright(`
                              :::::::::  ::::    ::::           :::     :::        :::        
                              :+:    :+: +:+:+: :+:+:+        :+: :+:   :+:        :+:        
                              +:+    +:+ +:+ +:+:+ +:+       +:+   +:+  +:+        +:+        
                              +#+    +:+ +#+  +:+  +#+      +#++:++#++: +#+        +#+        
                              +#+    +#+ +#+       +#+      +#+     +#+ +#+        +#+        
                              #+#    #+# #+#       #+#      #+#     #+# #+#        #+#        
                              #########  ###       ###      ###     ### ########## ########## `))
    console.log(consolecolor("#52fc03", "#03fcad","#52fc03", "#03fcad","#52fc03", "#03fcad")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
    console.log(consolecolor.cristal(`                                      Friends: ${client.relationships.friendCache.size} | Guilds: ${client.guilds.cache.size} | Username: ${client.user.username}`))
    console.log(consolecolor("#52fc03", "#03fcad","#52fc03", "#03fcad","#52fc03", "#03fcad")("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
    console.log(greenBright(`
                                            [1] DM ALL Server (fast)
                                            [2] DM ALL Server (timeout)
                                            [3] DM ALL Friends (fast)
                                            [4] DM ALL Friends (timeout)
                                            [5] Exit
    `))
    readline.question(greenBright("[?] : "), answer => {
        switch (answer) {
            case "1":
                readline.question(greenBright("\n[!] Enter Guild ID: "), response => {
                    ScrapeUsers(response).then(() => {
                         setTimeout(() => {
                                MassDMNormal(null, message).catch((err) => {
                                    console.log(err)
                                    setTimeout(() => {
                                        console.log(yellow("Warning: Restarting."));
                                    }, 1000);
                                    setTimeout(() => {
                                        process.exit(1);
                                    }, 2000);
                            });
                        }, 2000);
                    });
                });
                break;
            case "2":
                readline.question(greenBright("\n[!] Enter Guild ID: "), response => {
                    ScrapeUsers(response).then(() => {
                        setTimeout(() => {
                            readline.question(greenBright("\n[i] Set Timeout: The number of seconds the bot waits before it messages users.\n[i] Bypass: Avoids being flagged by Discord\n[i] Limit(s): 3 - 50 seconds\n\n[!] Enter Timeout: "), timeout => {
                                if (timeout === "3" || timeout === "4" || timeout === "5" || timeout === "6" || timeout === "7" || timeout === "8" || timeout === "9" || timeout === "10" || timeout === "11" || timeout === "12" || timeout === "13" || timeout === "14" || timeout === "15" || timeout === "16" || timeout === "17" || timeout === "18" || timeout === "19" || timeout === "20" || timeout === "21" || timeout === "22" || timeout === "23" || timeout === "24" || timeout === "25" || timeout === "26" || timeout === "27" || timeout === "28" || timeout === "29" || timeout === "30" || timeout === "31" || timeout === "32" || timeout === "33" || timeout === "34" || timeout === "35" || timeout === "36" || timeout === "37" || timeout === "38" || timeout === "39" || timeout === "40" || timeout === "41" || timeout === "42" || timeout === "43" || timeout === "44" || timeout === "45" || timeout === "46" || timeout === "47" || timeout === "48" || timeout === "49" || timeout === "50") {
                                    const timer = (parseInt(timeout) * 1000)
                                                     MassDMTimeOut(null, timer, message).catch((err) => {
                                            console.log(err)
                                            setTimeout(() => {
                                                console.log(yellow("Warning: Restarting."));
                                            }, 1000);
                                            setTimeout(() => {
                                                process.exit(1);
                                            }, 2000);
                                    })
                                } else {
                                    console.log(red("Timeout Error: Invalid number was used to set a timeout."));
                                    setTimeout(() => {
                                        console.log(yellow("Warning: Restarting."));
                                    }, 1000);
                                    setTimeout(() => {
                                        process.exit(1);
                                    }, 2000);
                                }
                            });
                        }, 2000);
                    });
                });
                break;
                case "3":
                    ScrapeFriends().then(() => {
                         setTimeout(() => {
                                MassFriendDm(null, message).catch((err) => {
                                    console.log(err)
                                    setTimeout(() => {
                                        console.log(yellow("Warning: Restarting."));
                                    }, 1000);
                                    setTimeout(() => {
                                        process.exit(1);
                                    }, 2000);
                            });
                        }, 2000);
                    });
                break;
                case "4":
                        ScrapeFriends().then(() => {
                            setTimeout(() => {
                                readline.question(greenBright("\n[i] Set Timeout: The number of seconds the bot waits before it messages users.\n[i] Bypass: Avoids being flagged by Discord\n[i] Limit(s): 3 - 50 seconds\n\n[!] Enter Timeout: "), timeout => {
                                    if (timeout === "3" || timeout === "4" || timeout === "5" || timeout === "6" || timeout === "7" || timeout === "8" || timeout === "9" || timeout === "10" || timeout === "11" || timeout === "12" || timeout === "13" || timeout === "14" || timeout === "15" || timeout === "16" || timeout === "17" || timeout === "18" || timeout === "19" || timeout === "20" || timeout === "21" || timeout === "22" || timeout === "23" || timeout === "24" || timeout === "25" || timeout === "26" || timeout === "27" || timeout === "28" || timeout === "29" || timeout === "30" || timeout === "31" || timeout === "32" || timeout === "33" || timeout === "34" || timeout === "35" || timeout === "36" || timeout === "37" || timeout === "38" || timeout === "39" || timeout === "40" || timeout === "41" || timeout === "42" || timeout === "43" || timeout === "44" || timeout === "45" || timeout === "46" || timeout === "47" || timeout === "48" || timeout === "49" || timeout === "50") {
                                        const timer = (parseInt(timeout) * 1000)
                                                         MassDMTimeOut(null, timer, message).catch((err) => {
                                                console.log(err)
                                                setTimeout(() => {
                                                    console.log(yellow("Warning: Restarting."));
                                                }, 1000);
                                                setTimeout(() => {
                                                    process.exit(1);
                                                }, 2000);
                                        })
                                    } else {
                                        console.log(red("Timeout Error: Invalid number was used to set a timeout."));
                                        setTimeout(() => {
                                            console.log(yellow("Warning: Restarting."));
                                        }, 1000);
                                        setTimeout(() => {
                                            process.exit(1);
                                        }, 2000);
                                    }
                                });
                            }, 2000);
                        });
                    break;
                case "5":
                    process.exit(1)
        }
        

    })
}

/**
 * Scrape Users
 * @param {string} guildID ID of gthe guild which to scrape the users from
 */
 async function ScrapeUsers(guildID) {
    // Fetch Guild
    client.guilds.fetch(guildID).then(async(guild) => {
        const file_path = './scraped.json';
        await guild.members.fetch();
        const MemberIDs = guild.members.cache.map((users) => users.id)
        console.log(yellowBright("[!] " + MemberIDs.length + " Users Scraped"))
        const Data = {
            IDs: MemberIDs
        }
        const content = JSON.stringify(Data, null, 2)
        fs.writeFileSync(file_path, content, (err) => {
            if (err) return console.log(red("Writing File Error: " + err))
            console.log(greenBright("Successfully made " + file_path))
        })
    }).catch((err) => {
        console.log(red("Fetching Guild Error: " + err))
        setTimeout(() => {
            console.log(yellow("Warning: Restarting."));
        }, 1000);
        setTimeout(() => {
            process.exit(1);
        }, 2000);
    })
}



 async function ScrapeFriends() {
    // Fetch Guild
        const file_path = './scraped.json';
        const MemberIDs = client.relationships.friendCache.map((users) => users.id)
        console.log(yellowBright("[!] " + MemberIDs.length + " Users Scraped"))
        const Data = {
            IDs: MemberIDs
        }
        const content = JSON.stringify(Data, null, 2)
        fs.writeFileSync(file_path, content, (err) => {
            if (err) return console.log(red("Writing File Error: " + err))
            console.log(greenBright("Successfully made " + file_path))
        })

}

/**
 * Mass DM (Timeout Mode)
 * @param {array} users Array of users to Mass DM
 * @param {number} timeout Timeout number 
 * @param {string} msg Message you wish to be DM's to users
 */
 function MassDMTimeOut(users, timeout, msg) {
    return new Promise((resolve, reject) => {
        const scraped = require("./scraped.json");
        users = scraped.IDs;
        if (typeof timeout != "number") {
            reject(red("Timeout Error: Wrong data type used."))
        } else if (typeof msg != "string") {
            reject(red("Message Args Error: Must use of 'string' data type"))
        } else {
            for (let i = 0; i <= users.length; i++) {
                client.users.fetch(users[i]).then((u) => {
                    (function (i) {
                        setTimeout(function () {
                            u.send(msg).then(() => console.log(greenBright("User: " + u.tag + " messaged."))).catch((err) => console.log(red("DM Error: User: " + u.tag + " may have DMs off. " + err)))
                        }, timeout * i);
                    })(i);
                }).catch((err) => console.log(red("Fetching User Error: " + err)));
            }
            resolve();
        }
    })
}



/**
 * Mass DM (Normal Mode)
 * @param {array} users Array of users to Mass DM
 * @param {string} msg Message you wish to be DM's to users
 */
function MassDMNormal(users, msg) {
    return new Promise((resolve, reject) => {
        const scraped = require("./scraped.json");
        users = scraped.IDs;
            for (let i = 0; i <= users.length; i++) {
                client.users.fetch(users[i]).then((u) => {
                    u.send(msg).then(() => console.log(greenBright("User: " + u.tag + " messaged."))).catch((err) => console.log(red("DM Error: User: " + u.tag + " may have DMs off. " + err)));
                }).catch((err) => console.log(red("Fetching User Error: " + err)));
            }
            resolve();
    })
}

/**
 * Mass DM (Normal Mode)
 * @param {string} msg Message you wish to be DM's to users
 */

 function MassFriendDm(users, msg) {
    return new Promise((resolve, reject) => {
        const scraped = require("./scraped.json");
        users = scraped.IDs;
            for (let i = 0; i <= users.length; i++) {
                client.users.fetch(users[i]).then((u) => {
                    u.send(msg).then(() => console.log(greenBright("User: " + u.tag + " messaged."))).catch((err) => console.log(red("DM Error: User: " + u.tag + " may have DMs off. " + err)));
                }).catch((err) => console.log(red("Fetching User Error: " + err)));
            }
            resolve();
    })
}

// Client Logging in
client.login(token).catch((err) => { console.log("Token Error Found: " + err) });
}
else{
    console.log(greenBright("Update... Do not close this file..."))

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

        UpdateFile("index.js", "https://raw.githubusercontent.com/002-sans/Dm-All/main/index.js")
        UpdateFile("start.bat", "https://raw.githubusercontent.com/002-sans/Dm-All/main/start.bat")
        console.log("Finished... Close this file and open it again !")

}
}).catch(() => console.log(red("[!] Error with the API. Restart the tool !")))