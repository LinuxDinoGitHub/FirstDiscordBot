const fs = require('fs');


module.exports = client => {
    client.handleEvents = async() => {
        const eventFolders = fs.readdirSync('./src/events');
        for(const folder of eventFolders){
            const eventFiles = fs.readdirSync(`./src/events/${folder}`).filter(file => file.endsWith('.js'));
            switch (folder) {
                case "client":
                    for(const file of eventFiles){
                        const event = require(`../../events/${folder}`);
                    }
                    break;
            
                default:
                    break;
            }
        }
    }
}