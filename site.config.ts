import siteConfig from "./src/lib/config";

const config = siteConfig({
	title: "Dragonlord",
	prologue: "Never say die！",
	author: {
		name: "Zilong Xiao",
		email: "xiaozilongdhumath@126.com",
		link: "https://dragonlord-xiao.github.io/"
	},
	description: "在实践中学习！",
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


