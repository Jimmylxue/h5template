const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en' | 'xjp' | 'tai'

console.log('lang', lang)
// const langImgBasePath = {
// 	zh: 'img',
// 	en: 'enImg',
// }

// const basePath = langImgBasePath[lang]

import zhBgTop from '@/assets/img/bg-top.png'
import enBgTop from '@/assets/enImg/bg-top.png'
import xjpBgTop from '@/assets/xjpImg/bg-top.png'
import taiBgTop from '@/assets/taiImg/bg-top.png'

const bgTopMap = {
	zh: zhBgTop,
	en: enBgTop,
	xjp: xjpBgTop,
	tai: taiBgTop,
}

export const bgTop = bgTopMap[lang]

import zhDrawBtn from '@/assets/img/drawBtn.png'
import enDrawBtn from '@/assets/enImg/drawBtn.png'
import xjpDrawBtn from '@/assets/xjpImg/drawBtn.png'
import taiDrawBtn from '@/assets/taiImg/drawBtn.png'

const drawBtnMap = {
	zh: zhDrawBtn,
	en: enDrawBtn,
	xjp: xjpDrawBtn,
	tai: taiDrawBtn,
}

export const drawBtn = drawBtnMap[lang]

import zhXsmr from '@/assets/img/xsmr.png'
import enXsmr from '@/assets/enImg/xsmr.png'
import xjpXsmr from '@/assets/xjpImg/xsmr.png'
import taiXsmr from '@/assets/taiImg/xsmr.png'

const xsmrMap = {
	zh: zhXsmr,
	en: enXsmr,
	xjp: xjpXsmr,
	tai: taiXsmr,
}

export const xsmr = xsmrMap[lang]

import zhPowerBank from '@/assets/img/powerBank.png'
import enPowerBank from '@/assets/enImg/powerBank.png'
import xjpPowerBank from '@/assets/xjpImg/powerBank.png'
import taiPowerBank from '@/assets/taiImg/powerBank.png'

const powerBankMap = {
	zh: zhPowerBank,
	en: enPowerBank,
	xjp: xjpPowerBank,
	tai: taiPowerBank,
}

export const powerBank = powerBankMap[lang]

import zhFiveZhe from '@/assets/img/5zhe.png'
import enFiveZhe from '@/assets/enImg/5zhe.png'
import xjpFiveZhe from '@/assets/xjpImg/5zhe.png'
import taiFiveZhe from '@/assets/taiImg/5zhe.png'

const fiveZheMap = {
	zh: zhFiveZhe,
	en: enFiveZhe,
	xjp: xjpFiveZhe,
	tai: taiFiveZhe,
}

export const fiveZhe = fiveZheMap[lang]

import zhThreeZhe from '@/assets/img/3zhe.png'
import enThreeZhe from '@/assets/enImg/3zhe.png'
import xjpThreeZhe from '@/assets/xjpImg/3zhe.png'
import taiThreeZhe from '@/assets/taiImg/3zhe.png'

const threeZheMap = {
	zh: zhThreeZhe,
	en: enThreeZhe,
	xjp: xjpThreeZhe,
	tai: taiThreeZhe,
}

export const threeZhe = threeZheMap[lang]

import zhSorry from '@/assets/img/sorry.png'
import enSorry from '@/assets/enImg/sorry.png'
import xjpSorry from '@/assets/xjpImg/sorry.png'
import taiSorry from '@/assets/taiImg/sorry.png'

const sorryMap = {
	zh: zhSorry,
	en: enSorry,
	xjp: xjpSorry,
	tai: taiSorry,
}

export const sorry = sorryMap[lang]

import zhOneZhe from '@/assets/img/1zhe.png'
import enOneZhe from '@/assets/enImg/1zhe.png'
import xjpOneZhe from '@/assets/xjpImg/1zhe.png'
import taiOneZhe from '@/assets/taiImg/1zhe.png'

const oneZheMap = {
	zh: zhOneZhe,
	en: enOneZhe,
	xjp: xjpOneZhe,
	tai: taiOneZhe,
}

export const oneZhe = oneZheMap[lang]

import zhJiuJiu from '@/assets/img/jiujiu.png'
import enJiuJiu from '@/assets/enImg/jiujiu.png'
import xjpJiuJiu from '@/assets/xjpImg/jiujiu.png'
import taiJiuJiu from '@/assets/taiImg/jiujiu.png'

const jiujiuMap = {
	zh: zhJiuJiu,
	en: enJiuJiu,
	xjp: xjpJiuJiu,
	tai: taiJiuJiu,
}

export const jiujiu = jiujiuMap[lang]

import zhSorryLogo from '@/assets/img/sorryLogo.png'
import enSorryLogo from '@/assets/enImg/sorryLogo.png'
import taiSorryLogo from '@/assets/taiImg/sorryLogo.png'

const sorryLogoMap = {
	zh: zhSorryLogo,
	en: enSorryLogo,
	xjp: enSorryLogo,
	tai: taiSorryLogo,
}

export const sorryLogo = sorryLogoMap[lang]

import zhKfLogo from '@/assets/img/kflogo.png'
import enKfLogo from '@/assets/enImg/kflogo.png'
import xjpKfLogo from '@/assets/xjpImg/kflogo.png'
import taiKfLogo from '@/assets/taiImg/kflogo.png'

const kflogoMap = {
	zh: zhKfLogo,
	en: enKfLogo,
	xjp: xjpKfLogo,
	tai: taiKfLogo,
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
import taiXiajiText from '@/assets/taiImg/xiajiText.png'

const xiajiTextMap = {
	zh: zhXiajiText,
	en: enXiajiText,
	xjp: enXiajiText,
	tai: taiXiajiText,
}

export const xiajiText = xiajiTextMap[lang]

import zhBindLogo from '@/assets/img/bindLogo.png'
import enBindLogo from '@/assets/enImg/bindLogo.png'
import taiBindLogo from '@/assets/taiImg/bindLogo.png'

const bindLogoMap = {
	zh: zhBindLogo,
	en: enBindLogo,
	xjp: enBindLogo,
	tai: taiBindLogo,
}

export const bindLogo = bindLogoMap[lang]

import zhSmallText from '@/assets/img/smallText.png'
import enSmallText from '@/assets/enImg/smallText.png'
import taiSmallText from '@/assets/taiImg/smallText.png'

const smallTextMap = {
	zh: zhSmallText,
	en: enSmallText,
	xjp: enSmallText,
	tai: taiSmallText,
}

export const smallText = smallTextMap[lang]

import zh2Icon from '@/assets/img/2Icon.png'
import en2Icon from '@/assets/enImg/2Icon.png'
import xjp2Icon from '@/assets/xjpImg/2Icon.png'
import tai2Icon from '@/assets/taiImg/2Icon.png'

const _2IconMap = {
	zh: zh2Icon,
	en: en2Icon,
	xjp: xjp2Icon,
	tai: tai2Icon,
}

import zh6Icon from '@/assets/img/6Icon.png'
import en6Icon from '@/assets/enImg/6Icon.png'
import xjp6Icon from '@/assets/xjpImg/6Icon.png'
import tai6Icon from '@/assets/taiImg/6Icon.png'

const _6IconMap = {
	zh: zh6Icon,
	en: en6Icon,
	xjp: xjp6Icon,
	tai: tai6Icon,
}

export const iconMap = {
	2: _2IconMap[lang],
	6: _6IconMap[lang],
}

import zhVideo3 from '@/assets/video/video3.mp4'
import enVideo3 from '@/assets/enVideo/video3.mp4'
import taiVideo3 from '@/assets/taiVideo/video3.mp4'

const video3Map = {
	zh: zhVideo3,
	en: enVideo3,
	xjp: enVideo3,
	tai: taiVideo3,
}

export const video3 = video3Map[lang]

import zhChatLine from '@/assets/img/chatLine.png'
import enChatLine from '@/assets/enImg/chatLine.png'
import xjpChatLine from '@/assets/xjpImg/chatLine.png'
import taiChatLine from '@/assets/taiImg/chatLine.png'

const chatLineMap = {
	zh: zhChatLine,
	en: enChatLine,
	xjp: xjpChatLine,
	tai: taiChatLine,
}

export const chatLine = chatLineMap[lang]

import zhIphoneGift from '@/assets/img/iphoneGift.png'
import taiIphoneGift from '@/assets/taiImg/iphoneGift.png'

const iphoneGiftMap = {
	zh: zhIphoneGift,
	en: zhIphoneGift,
	xjp: zhIphoneGift,
	tai: taiIphoneGift,
}

export const iphoneGift = iphoneGiftMap[lang]

import _0Zhe from '@/assets/img/sorry.png'
import en_0Zhe from '@/assets/enImg/0zhe.png'

const _0ZheMap = {
	zh: _0Zhe,
	en: en_0Zhe,
	xjp: _0Zhe,
	tai: _0Zhe,
}

export const _0zhe = _0ZheMap[lang]

// import zhChatBtn from '@/assets/img/chatBtn.png'
// import enChatBtn from '@/assets/enImg/chatBtn.png'
// import xjpChatBtn from '@/assets/xjpImg/chatBtn.png'
// import taiChatBtn from '@/assets/taiImg/chatBtn.png'

// const chatBtnMap = {
// 	zh: zhChatBtn,
// 	en: enChatBtn,
// 	xjp: xjpChatBtn,
// 	tai: taiChatBtn,
// }

// export const chatBtn = chatBtnMap[lang]
