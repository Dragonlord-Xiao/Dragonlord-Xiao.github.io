import siteConfig from "./src/lib/config";

const config = siteConfig({
	title: "我的博客",
	prologue: "记录生活，分享技术与思考。",
	author: {
		name: "Your Name",
		email: "hi@your.mail",
		link: "https://your.website"
	},
	description: "记录生活、技术与思考。",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2026"
	},
	timezone: "Asia/Shanghai",
	i18n: {
		locales: ["en", "zh-cn", "ja"],
		defaultLocale: "zh-cn"
	},
	pagination: {
		note: 10,
		jotting: 24
	},
	heatmap: {
		unit: "day",
		weeks: 20
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;


