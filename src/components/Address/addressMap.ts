const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'

const city_list = {
	'710100': '台北市',
	'710200': '高雄市',
	'710300': '台南市',
	'710400': '台中市',
	'710500': '金門縣',
	'710600': '南投縣',
	'710700': '基隆市',
	'710800': '新竹市',
	'710900': '嘉義市',
	'711100': '新北市',
	'711200': '宜蘭縣',
	'711300': '新竹縣',
	'711400': '桃園市',
	'711500': '苗栗縣',
	'711700': '彰化縣',
	'711900': '嘉義縣',
	'712100': '雲林縣',
	'712400': '屏東縣',
	'712500': '台東縣',
	'712600': '花蓮縣',
	'712700': '澎湖縣',
	'712800': '連江縣',
}

const en_list = [
	'Johor',
	'Kedah',
	'Kelantan',
	'Melaka',
	'Negeri Sembilan',
	'Pahang',
	'Perak',
	'Perlis',
	'Pulau Pinang',
	'Sabah',
	'Sarawak',
	'Selangor',
	'Terengganu',
]

const cityMap = {
	zh: Object.values(city_list),
	en: en_list,
}

export const cityArr = cityMap[lang]
