const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en' | 'xjp' | 'tai'

// const langImgBasePath = {
// 	zh: 'img',
// 	en: 'enImg',
// }

// const basePath = langImgBasePath[lang]

import zhBgTop from '@/assets/img/bg-top.png'
import enBgTop from '@/assets/enImg/bg-top.png'
import xjpBgTop from '@/assets/xjpImg/bg-top.png'

const bgTopMap = {
	zh: zhBgTop,
	en: enBgTop,
	xjp: xjpBgTop,
	tai: enBgTop,
}

export const bgTop = bgTopMap[lang]

import zhDrawBtn from '@/assets/img/drawBtn.png'
import enDrawBtn from '@/assets/enImg/drawBtn.png'
import xjpDrawBtn from '@/assets/xjpImg/drawBtn.png'

const drawBtnMap = {
	zh: zhDrawBtn,
	en: enDrawBtn,
	xjp: xjpDrawBtn,
	tai: xjpDrawBtn,
}

export const drawBtn = drawBtnMap[lang]

import zhXsmr from '@/assets/img/xsmr.png'
import enXsmr from '@/assets/enImg/xsmr.png'
import xjpXsmr from '@/assets/xjpImg/xsmr.png'

const xsmrMap = {
	zh: zhXsmr,
	en: enXsmr,
	xjp: xjpXsmr,
	tai: xjpXsmr,
}

export const xsmr = xsmrMap[lang]

import zhPowerBank from '@/assets/img/powerBank.png'
import enPowerBank from '@/assets/enImg/powerBank.png'
import xjpPowerBank from '@/assets/xjpImg/powerBank.png'

const powerBankMap = {
	zh: zhPowerBank,
	en: enPowerBank,
	xjp: xjpPowerBank,
	tai: xjpPowerBank,
}

export const powerBank = powerBankMap[lang]

import zhFiveZhe from '@/assets/img/5zhe.png'
import enFiveZhe from '@/assets/enImg/5zhe.png'
import xjpFiveZhe from '@/assets/xjpImg/5zhe.png'

const fiveZheMap = {
	zh: zhFiveZhe,
	en: enFiveZhe,
	xjp: xjpFiveZhe,
	tai: xjpFiveZhe,
}

export const fiveZhe = fiveZheMap[lang]

import zhThreeZhe from '@/assets/img/3zhe.png'
import enThreeZhe from '@/assets/enImg/3zhe.png'
import xjpThreeZhe from '@/assets/xjpImg/3zhe.png'

const threeZheMap = {
	zh: zhThreeZhe,
	en: enThreeZhe,
	xjp: xjpThreeZhe,
	tai: xjpThreeZhe,
}

export const threeZhe = threeZheMap[lang]

import zhSorry from '@/assets/img/sorry.png'
import enSorry from '@/assets/enImg/sorry.png'
import xjpSorry from '@/assets/xjpImg/sorry.png'

const sorryMap = {
	zh: zhSorry,
	en: enSorry,
	xjp: xjpSorry,
	tai: xjpSorry,
}

export const sorry = sorryMap[lang]

import zhOneZhe from '@/assets/img/1zhe.png'
import enOneZhe from '@/assets/enImg/1zhe.png'
import xjpOneZhe from '@/assets/xjpImg/1zhe.png'

const oneZheMap = {
	zh: zhOneZhe,
	en: enOneZhe,
	xjp: xjpOneZhe,
	tai: xjpOneZhe,
}

export const oneZhe = oneZheMap[lang]

import zhJiuJiu from '@/assets/img/jiujiu.png'
import enJiuJiu from '@/assets/enImg/jiujiu.png'
import xjpJiuJiu from '@/assets/xjpImg/jiujiu.png'

const jiujiuMap = {
	zh: zhJiuJiu,
	en: enJiuJiu,
	xjp: xjpJiuJiu,
	tai: xjpJiuJiu,
}

export const jiujiu = jiujiuMap[lang]

import zhKfLogo from '@/assets/img/kflogo.png'
import enKfLogo from '@/assets/enImg/kflogo.png'
import xjpKfLogo from '@/assets/xjpImg/kflogo.png'

const kflogoMap = {
	zh: zhKfLogo,
	en: enKfLogo,
	xjp: xjpKfLogo,
	tai: enKfLogo,
}

export const kflogo = kflogoMap[lang]

import zhModalTitle from '@/assets/img/modalTitle.png'
import enModalTitle from '@/assets/enImg/modalTitle.png'

const modalTitleMap = {
	zh: zhModalTitle,
	en: enModalTitle,
	xjp: enModalTitle,
	tai: enModalTitle,
}

export const modalTitle = modalTitleMap[lang]

import zhXiajiText from '@/assets/img/xiajiText.png'
import enXiajiText from '@/assets/enImg/xiajiText.png'

const xiajiTextMap = {
	zh: zhXiajiText,
	en: enXiajiText,
	xjp: enXiajiText,
	tai: enXiajiText,
}

export const xiajiText = xiajiTextMap[lang]

import zhBindLogo from '@/assets/img/bindLogo.png'
import enBindLogo from '@/assets/enImg/bindLogo.png'

const bindLogoMap = {
	zh: zhBindLogo,
	en: enBindLogo,
	xjp: enBindLogo,
	tai: enBindLogo,
}

export const bindLogo = bindLogoMap[lang]

import zhSmallText from '@/assets/img/smallText.png'
import enSmallText from '@/assets/enImg/smallText.png'

const smallTextMap = {
	zh: zhSmallText,
	en: enSmallText,
	xjp: enSmallText,
	tai: enSmallText,
}

export const smallText = smallTextMap[lang]

import zhPowerbank1 from '@/assets/img/swiper/powerbank1.jpg'
import enPowerbank1 from '@/assets/enImg/swiper/powerbank1.jpg'

const powerbank1Map = {
	zh: zhPowerbank1,
	en: enPowerbank1,
	xjp: enPowerbank1,
	tai: enPowerbank1,
}

export const spowerbank1 = powerbank1Map[lang]

import zhPowerbank2 from '@/assets/img/swiper/powerbank2.jpg'
import enPowerbank2 from '@/assets/enImg/swiper/powerbank2.jpg'

const powerbank2Map = {
	zh: zhPowerbank2,
	en: enPowerbank2,
	xjp: enPowerbank2,
	tai: enPowerbank2,
}

export const spowerbank2 = powerbank2Map[lang]

import zhPowerbank3 from '@/assets/img/swiper/powerbank3.jpg'
import enPowerbank3 from '@/assets/enImg/swiper/powerbank3.jpg'

const powerbank3Map = {
	zh: zhPowerbank3,
	en: enPowerbank3,
	xjp: enPowerbank3,
	tai: enPowerbank3,
}

export const spowerbank3 = powerbank3Map[lang]

import zh2Icon from '@/assets/img/2Icon.png'
import en2Icon from '@/assets/enImg/2Icon.png'
import xjp2Icon from '@/assets/xjpImg/2Icon.png'

const _2IconMap = {
	zh: zh2Icon,
	en: en2Icon,
	xjp: xjp2Icon,
	tai: xjp2Icon,
}

import zh6Icon from '@/assets/img/6Icon.png'
import en6Icon from '@/assets/enImg/6Icon.png'
import xjp6Icon from '@/assets/xjpImg/6Icon.png'

const _6IconMap = {
	zh: zh6Icon,
	en: en6Icon,
	xjp: xjp6Icon,
	tai: xjp6Icon,
}

export const iconMap = {
	2: _2IconMap[lang],
	6: _6IconMap[lang],
}

import zhVideo3 from '@/assets/video/video3.mp4'
import enVideo3 from '@/assets/enVideo/video3.mp4'

const video3Map = {
	zh: zhVideo3,
	en: enVideo3,
	xjp: enVideo3,
	tai: enVideo3,
}

export const video3 = video3Map[lang]
