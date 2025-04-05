import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//中文语言包
import zh from './zh.json'
// //英文语言包
// @ts-ignore
import en from './en.json'
/**
 * 新加坡
 */
import xjp from './xjp.json'
/**
 * 泰语
 */
import tai from './tai.json'

/**
 * ph
 */
// @ts-ignore
import ph from './ph.json'

// @ts-ignore
import my from './my.json'

const lang = import.meta.env.VITE_APP_LANGUAGE

const resources = {
	en: {
		// translation: my,
		// translation: en,
		translation: ph,
	},
	zh: {
		translation: zh,
	},
	xjp: {
		translation: xjp,
	},
	tai: {
		translation: tai,
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: lang, //设置默认语言（可用三元表达式进行动态切换）
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
