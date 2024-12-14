const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en' | 'xjp' | 'tai'

import taiDisPrice1 from '@/assets/taiImg/luck2/disPrice1.png'
import xjpDisPrice1 from '@/assets/xjpImg/luck2/disPrice1.png'

const disPrice1Map = {
	zh: taiDisPrice1,
	en: taiDisPrice1,
	xjp: xjpDisPrice1,
	tai: taiDisPrice1,
}

export const disPrice1 = disPrice1Map[lang]

import taiDisPrice2 from '@/assets/taiImg/luck2/disPrice2.png'
import xjpDisPrice2 from '@/assets/xjpImg/luck2/disPrice2.png'

const disPrice2Map = {
	zh: taiDisPrice2,
	en: taiDisPrice2,
	xjp: xjpDisPrice2,
	tai: taiDisPrice2,
}

export const disPrice2 = disPrice2Map[lang]

import taiDisPrice3 from '@/assets/taiImg/luck2/disPrice3.png'
import xjpDisPrice3 from '@/assets/xjpImg/luck2/disPrice3.png'

const disPrice3Map = {
	zh: taiDisPrice3,
	en: taiDisPrice3,
	xjp: xjpDisPrice3,
	tai: taiDisPrice3,
}

export const disPrice3 = disPrice3Map[lang]
