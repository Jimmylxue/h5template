import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//中文语言包
import zh from './zh.json'
// //英文语言包
import en from './en.json'
/**
 * 新加坡
 */
import xjp from './xjp.json'

const lang = import.meta.env.VITE_APP_LANGUAGE

const resources = {
	en: {
		translation: en,
	},
	zh: {
		translation: zh,
	},
	xjp: {
		translation: xjp,
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
