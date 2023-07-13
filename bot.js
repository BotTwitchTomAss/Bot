const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'ModBan',
		password: 'oauth:msil3i2vhzydtshx8tan85vtalkg7g'
	},
	channels: [ 'Azaeps' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}

    if(message.toLowerCase().includes('!vip') && tags.username == 'azaeps') {
        client.say(channel, '/ban zzezzebzbezbebze');
        setTimeout(() => {
            client.say(channel, '/unban zzezzebzbezbebze');
        }, 5000);
    };
});