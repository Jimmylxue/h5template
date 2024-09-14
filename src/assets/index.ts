const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'

// const langImgBasePath = {
// 	zh: 'img',
// 	en: 'enImg',
// }

// const basePath = langImgBasePath[lang]

import zhBgTop from '@/assets/img/bg-top.png'
import enBgTop from '@/assets/enImg/bg-top.png'

const bgTopMap = {
	zh: zhBgTop,
	en: enBgTop,
}

export const bgTop = bgTopMap[lang]

import zhDrawBtn from '@/assets/img/drawBtn.png'
import enDrawBtn from '@/assets/enImg/drawBtn.png'

const drawBtnMap = {
	zh: zhDrawBtn,
	en: enDrawBtn,
}

export const drawBtn = drawBtnMap[lang]

import zhXsmr from '@/assets/img/xsmr.png'
import enXsmr from '@/assets/enImg/xsmr.png'

const xsmrMap = {
	zh: zhXsmr,
	en: enXsmr,
}

export const xsmr = xsmrMap[lang]

import zhPowerBank from '@/assets/img/powerBank.png'
import enPowerBank from '@/assets/enImg/powerBank.png'

const powerBankMap = {
	zh: zhPowerBank,
	en: enPowerBank,
}

export const powerBank = powerBankMap[lang]

import zhFiveZhe from '@/assets/img/5zhe.png'
import enFiveZhe from '@/assets/enImg/5zhe.png'

const fiveZheMap = {
	zh: zhFiveZhe,
	en: enFiveZhe,
}

export const fiveZhe = fiveZheMap[lang]

import zhThreeZhe from '@/assets/img/3zhe.png'
import enThreeZhe from '@/assets/enImg/3zhe.png'

const threeZheMap = {
	zh: zhThreeZhe,
	en: enThreeZhe,
}

export const threeZhe = threeZheMap[lang]

import zhSorry from '@/assets/img/sorry.png'
import enSorry from '@/assets/enImg/sorry.png'

const sorryMap = {
	zh: zhSorry,
	en: enSorry,
}

export const sorry = sorryMap[lang]

import zhOneZhe from '@/assets/img/1zhe.png'
import enOneZhe from '@/assets/enImg/1zhe.png'

const oneZheMap = {
	zh: zhOneZhe,
	en: enOneZhe,
}

export const oneZhe = oneZheMap[lang]

import zhJiuJiu from '@/assets/img/jiujiu.png'
import enJiuJiu from '@/assets/enImg/jiujiu.png'

const jiujiuMap = {
	zh: zhJiuJiu,
	en: enJiuJiu,
}

export const jiujiu = jiujiuMap[lang]

import zhKfLogo from '@/assets/img/kflogo.png'
import enKfLogo from '@/assets/enImg/kflogo.png'

const kflogoMap = {
	zh: zhKfLogo,
	en: enKfLogo,
}

export const kflogo = kflogoMap[lang]

import zhModalTitle from '@/assets/img/modalTitle.png'
import enModalTitle from '@/assets/enImg/modalTitle.png'

const modalTitleMap = {
	zh: zhModalTitle,
	en: enModalTitle,
}

export const modalTitle = modalTitleMap[lang]

import zhXiajiText from '@/assets/img/xiajiText.png'
import enXiajiText from '@/assets/enImg/xiajiText.png'

const xiajiTextMap = {
	zh: zhXiajiText,
	en: enXiajiText,
}

export const xiajiText = xiajiTextMap[lang]

import zhBindLogo from '@/assets/img/bindLogo.png'
import enBindLogo from '@/assets/enImg/bindLogo.png'

const bindLogoMap = {
	zh: zhBindLogo,
	en: enBindLogo,
}

export const bindLogo = bindLogoMap[lang]

import zhSmallText from '@/assets/img/smallText.png'
import enSmallText from '@/assets/enImg/smallText.png'

const smallTextMap = {
	zh: zhSmallText,
	en: enSmallText,
}

export const smallText = smallTextMap[lang]

import zhPowerbank1 from '@/assets/img/swiper/powerbank1.jpg'
import enPowerbank1 from '@/assets/enImg/swiper/powerbank1.jpg'

const powerbank1Map = {
	zh: zhPowerbank1,
	en: enPowerbank1,
}

export const spowerbank1 = powerbank1Map[lang]

import zhPowerbank2 from '@/assets/img/swiper/powerbank2.jpg'
import enPowerbank2 from '@/assets/enImg/swiper/powerbank2.jpg'

const powerbank2Map = {
	zh: zhPowerbank2,
	en: enPowerbank2,
}

export const spowerbank2 = powerbank2Map[lang]

import zhPowerbank3 from '@/assets/img/swiper/powerbank3.jpg'
import enPowerbank3 from '@/assets/enImg/swiper/powerbank3.jpg'

const powerbank3Map = {
	zh: zhPowerbank3,
	en: enPowerbank3,
}

export const spowerbank3 = powerbank3Map[lang]

import zh2Icon from '@/assets/img/2Icon.png'
import en2Icon from '@/assets/enImg/2Icon.png'

const _2IconMap = {
	zh: zh2Icon,
	en: en2Icon,
}

import zh6Icon from '@/assets/img/6Icon.png'
import en6Icon from '@/assets/enImg/6Icon.png'

const _6IconMap = {
	zh: zh6Icon,
	en: en6Icon,
}

export const iconMap = {
	2: _2IconMap[lang],
	6: _6IconMap[lang],
}
