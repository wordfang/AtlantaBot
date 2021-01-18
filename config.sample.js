module.exports = {
	/* The token of your Discord Bot */
	token: "XXXXXXXXXXX",
	/* For the support server */
	support: {
		id: "799256537901039616", // The ID of the support server
		logs: "800287491436707892", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "800287491436707892", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://discord.io/caffeinee" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: "*", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#1a1a1a", // The default color for the embeds
		footer: "© c a f f e i n e ● 2021" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "750572665496010813", // The ID of the bot's owner
		name: "Billl#3043" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "800287491436707892" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "tKK_R.5TgkNRqkQ-i-e-DWUXv6B2wvyhsfzs1KLsP0SXz7fUk0vK_KY_Koigo_dd",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "6a919f74-5f8b-4ea5-99a3-9c8fced3ac8a",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "b5019c4a1b0d8f192b124543e5a17f0f608ab64910ee961a8c6adff8547f43b54541be2c84bd36441ea43d7f6d9fc6f68634a183ed179ac8398913228664af90",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: ""
	},
	/* The others utils links */
	others: {
		github: "https://github.com/wordfang", // Founder's github account
		donate: "https://saweria.co/nabill" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "{serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "🪐 at discord.io/caffeinee",
			type: "PLAYING"
		}
	]
};
