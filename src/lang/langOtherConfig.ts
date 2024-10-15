const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'

const zhLuckDrawBgConfig = [
	{ padding: '10px', background: '#fff', borderRadius: 15 },
	{ padding: '10px', background: '#9982E3', borderRadius: 15 },
	// { padding: '10px', background: '#f2da86', borderRadius: 15 },
]

const enLuckDrawBgConfig = [
	{ padding: '10px', background: '#fff', borderRadius: 15 },
	{ padding: '10px', background: '#C42CA3', borderRadius: 15 },
	// { padding: '10px', background: '#f2da86', borderRadius: 15 },
]

const LuckDrawBlocksMap = {
	zh: zhLuckDrawBgConfig,
	en: enLuckDrawBgConfig,
	xjp: enLuckDrawBgConfig,
	tai: zhLuckDrawBgConfig,
}

export const LuckDrawBlocks = LuckDrawBlocksMap[lang]
