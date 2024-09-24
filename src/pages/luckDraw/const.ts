import {
	xsmr,
	powerBank,
	fiveZhe,
	threeZhe,
	oneZhe,
	sorry,
	jiujiu,
	spowerbank1,
	spowerbank2,
	spowerbank3,
} from '@/assets/index'

import iphone from '../../assets/img/iphone2.jpg'
import chongdianbao from '../../assets/img/chongdianbao.jpg'
import iphoneGift from '../../assets/img/iphoneGift.png'
import powerBankGift from '../../assets/img/powerBankGift.png'
import sorryLogo from '../../assets/img/sorryLogo.png'
// 轮播图
import siphone1 from '../../assets/img/swiper/iphone1.jpg'
import siphone2 from '../../assets/img/swiper/iphone2.jpg'
import siphone3 from '../../assets/img/swiper/iphone3.jpg'
import siphone4 from '../../assets/img/swiper/iphone4.jpg'
import siphone5 from '../../assets/img/swiper/iphone5.jpg'
import siphone6 from '../../assets/img/swiper/iphone6.jpg'

import blackPowerBank from '@/assets/img/swiper/blackPowrBank.jpg'
import whitePowerBank from '@/assets/img/swiper/whitePowerBank.jpg'
import bluePowerBank from '@/assets/img/swiper/bluePowerBank.jpg'
import pinkPowerBank from '@/assets/img/swiper/pinkPowerBank.jpg'

import iphoneComment1 from '@/assets/img/goodDetail/iphoneComment/1.jpg'
import iphoneComment2 from '@/assets/img/goodDetail/iphoneComment/2.jpg'
import iphoneComment3 from '@/assets/img/goodDetail/iphoneComment/3.jpg'
import iphoneComment4 from '@/assets/img/goodDetail/iphoneComment/4.jpg'
import iphoneComment5 from '@/assets/img/goodDetail/iphoneComment/5.jpg'
import iphoneComment6 from '@/assets/img/goodDetail/iphoneComment/6.jpg'
import iphoneComment7 from '@/assets/img/goodDetail/iphoneComment/7.jpg'
import iphoneComment8 from '@/assets/img/goodDetail/iphoneComment/8.jpg'
import iphoneComment9 from '@/assets/img/goodDetail/iphoneComment/9.jpg'
import iphoneComment10 from '@/assets/img/goodDetail/iphoneComment/10.jpg'
import iphoneComment11 from '@/assets/img/goodDetail/iphoneComment/11.jpg'
import iphoneComment12 from '@/assets/img/goodDetail/iphoneComment/12.jpg'
import iphoneComment13 from '@/assets/img/goodDetail/iphoneComment/13.jpg'
import iphoneComment14 from '@/assets/img/goodDetail/iphoneComment/14.jpg'
import iphoneComment15 from '@/assets/img/goodDetail/iphoneComment/15.jpg'
import iphoneComment16 from '@/assets/img/goodDetail/iphoneComment/16.jpg'
import iphoneComment17 from '@/assets/img/goodDetail/iphoneComment/17.jpg'
import iphoneComment18 from '@/assets/img/goodDetail/iphoneComment/18.jpg'
import iphoneComment19 from '@/assets/img/goodDetail/iphoneComment/19.jpg'
import iphoneComment20 from '@/assets/img/goodDetail/iphoneComment/20.jpg'
import iphoneComment21 from '@/assets/img/goodDetail/iphoneComment/21.jpg'
import iphoneComment22 from '@/assets/img/goodDetail/iphoneComment/22.jpg'
import iphoneComment23 from '@/assets/img/goodDetail/iphoneComment/23.jpg'
import iphoneComment24 from '@/assets/img/goodDetail/iphoneComment/24.jpg'

import {
	pwpd1,
	pwpd2,
	pwpd3,
	pwpd4,
	pwpd5,
	pwpd6,
	pwpd7,
	pwpd8,
	pwpd9,
	ippd1,
	ippd2,
	ippd3,
	ippd4,
	ippd5,
	ippd6,
	ippd7,
	ippd8,
	ippd9,
	ippd10,
} from '@/assets/goodDetail'

import powerBankComment1_1 from '@/assets/img/goodDetail/powerBankComment/1-1.jpg'
import powerBankComment1_2 from '@/assets/img/goodDetail/powerBankComment/1-2.jpg'

import powerBankComment2_1 from '@/assets/img/goodDetail/powerBankComment/2-1.jpg'
import powerBankComment2_2 from '@/assets/img/goodDetail/powerBankComment/2-2.jpg'

import powerBankComment3_1 from '@/assets/img/goodDetail/powerBankComment/3-1.jpg'
import powerBankComment3_2 from '@/assets/img/goodDetail/powerBankComment/3-2.jpg'

import powerBankComment4_1 from '@/assets/img/goodDetail/powerBankComment/4-1.jpg'
import powerBankComment4_2 from '@/assets/img/goodDetail/powerBankComment/4-2.jpg'

import powerBankComment5_1 from '@/assets/img/goodDetail/powerBankComment/5-1.jpg'
import powerBankComment5_2 from '@/assets/img/goodDetail/powerBankComment/5-2.jpg'

import powerBankComment6_1 from '@/assets/img/goodDetail/powerBankComment/6-1.jpg'
import powerBankComment6_2 from '@/assets/img/goodDetail/powerBankComment/6-2.jpg'

import powerBankComment7_1 from '@/assets/img/goodDetail/powerBankComment/7-1.jpg'
import powerBankComment7_2 from '@/assets/img/goodDetail/powerBankComment/7-2.jpg'

import powerBankComment8_1 from '@/assets/img/goodDetail/powerBankComment/8-1.jpg'
import powerBankComment8_2 from '@/assets/img/goodDetail/powerBankComment/8-2.jpg'

import powerBankComment9_1 from '@/assets/img/goodDetail/powerBankComment/9-1.jpg'
import powerBankComment10_1 from '@/assets/img/goodDetail/powerBankComment/10-1.jpg'
import powerBankComment11_1 from '@/assets/img/goodDetail/powerBankComment/11-1.jpg'
import powerBankComment12_1 from '@/assets/img/goodDetail/powerBankComment/12-1.jpg'
import powerBankComment13_1 from '@/assets/img/goodDetail/powerBankComment/13-1.jpg'
import powerBankComment14_1 from '@/assets/img/goodDetail/powerBankComment/14-1.jpg'

import i18n from '../../lang/config'

export const PrizeList = [
	{
		id: 1,
		x: 0,
		y: 0,
		background: '#fefffa',
		imgs: [
			{
				src: xsmr,
				width: 100,
				height: 100,
			},
		],
		name: i18n.t('prizeList.NuNuTicker.name'),
		borderRadius: 10,
		giftLogo: xsmr,
		giftName: i18n.t('prizeList.NuNuTicker.giftName'),
	},
	{
		id: 2,
		x: 1,
		y: 0,
		background: '#fefffa',
		imgs: [
			{
				src: powerBank,
				width: 100,
				height: 100,
			},
		],
		discount: 10,
		name: i18n.t('prizeList.powerBank.name'),
		giftName: i18n.t('prizeList.powerBank.giftName'),
		giftLogo: powerBankGift,
		price: i18n.t('prizeList.powerBank.price'),
		borderRadius: 10,
		originPrice: i18n.t('prizeList.powerBank.originPrice'),
		originImage: chongdianbao,
		swiperImages: [spowerbank1, spowerbank2, spowerbank3, powerBankGift],
		attrImages: [blackPowerBank, whitePowerBank, bluePowerBank, pinkPowerBank],
		attrs: [
			{
				type: 'img',
				attr: i18n.t('prizeList.powerBank.colorAttrName'),
				values: [
					{
						chooseAble: true,
						src: blackPowerBank,
						name: i18n.t('prizeList.powerBank.colorAttrValue1'),
					},
					{
						chooseAble: true,
						src: whitePowerBank,
						name: i18n.t('prizeList.powerBank.colorAttrValue2'),
					},
					{
						chooseAble: true,
						src: bluePowerBank,
						name: i18n.t('prizeList.powerBank.colorAttrValue3'),
					},
					{
						chooseAble: true,
						src: pinkPowerBank,
						name: i18n.t('prizeList.powerBank.colorAttrValue4'),
					},
				],
			},
			{
				type: 'text',
				attr: i18n.t('prizeList.powerBank.capacityAttrName'),
				// values: ['10000毫安', '20000毫安-0^^disabled'],
				values: [
					{
						chooseAble: true,
						name: i18n.t('prizeList.powerBank.storageAttrValue1'),
					},
					{
						chooseAble: false,
						name: i18n.t('prizeList.powerBank.storageAttrValue2'),
					},
				],
			},
		],
		desc: [
			i18n.t('prizeList.powerBank.desc1'),
			i18n.t('prizeList.powerBank.desc2'),
			i18n.t('prizeList.powerBank.desc3'),
		],
		attribute: [
			{
				name: i18n.t('prizeList.powerBank.sizeName'),
				value: i18n.t('prizeList.powerBank.sizeValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.brandName'),
				value: i18n.t('prizeList.powerBank.brandValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.xhName'),
				value: i18n.t('prizeList.powerBank.xhValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.cdxyName'),
				value: i18n.t('prizeList.powerBank.cdxyValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.powerName'),
				value: i18n.t('prizeList.powerBank.powerValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.styleName'),
				value: i18n.t('prizeList.powerBank.styleValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.powerSizeName'),
				value: i18n.t('prizeList.powerBank.powerSizeValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.ksName'),
				value: i18n.t('prizeList.powerBank.ksValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.functionName'),
				value: i18n.t('prizeList.powerBank.functionValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.chargeName'),
				value: i18n.t('prizeList.powerBank.chargeValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.rlName'),
				value: i18n.t('prizeList.powerBank.rlValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.powerTypeName'),
				value: i18n.t('prizeList.powerBank.powerTypeValue'),
			},
			{
				name: i18n.t('prizeList.powerBank.colorTypeName'),
				value: i18n.t('prizeList.powerBank.colorTypeValue'),
			},
		],
		productDetailImgs: [
			pwpd1,
			pwpd2,
			pwpd3,
			pwpd4,
			pwpd5,
			pwpd6,
			pwpd7,
			pwpd8,
			pwpd9,
		],
		comments: [
			{
				commentId: 1,
				imgs: [powerBankComment1_1, powerBankComment1_2],
				text: i18n.t('prizeList.powerBank.commentText1'),
				userName: 'H***',
				descText: i18n.t('prizeList.powerBank.commentDescText1'),
			},
			{
				commentId: 2,
				imgs: [powerBankComment2_1, powerBankComment2_2],
				text: i18n.t('prizeList.powerBank.commentText2'),
				userName: 'i***',
				time: '2024-09-20',
				descText: i18n.t('prizeList.powerBank.commentDescText2'),
			},
			{
				commentId: 3,
				imgs: [powerBankComment3_1, powerBankComment3_2],
				text: i18n.t('prizeList.powerBank.commentText3'),
				userName: 'p***',
				time: '2024-09-20',
				descText: i18n.t('prizeList.powerBank.commentDescText3'),
			},
			{
				commentId: 4,
				imgs: [powerBankComment4_1, powerBankComment4_2],
				text: i18n.t('prizeList.powerBank.commentText4'),
				userName: 'j***',
				time: '2024-09-18',
				descText: i18n.t('prizeList.powerBank.commentDescText4'),
			},
			{
				commentId: 5,
				imgs: [powerBankComment5_1, powerBankComment5_2],
				text: i18n.t('prizeList.powerBank.commentText5'),
				userName: 'k***',
				descText: i18n.t('prizeList.powerBank.commentDescText5'),
			},
			{
				commentId: 6,
				imgs: [powerBankComment6_1, powerBankComment6_2],
				text: i18n.t('prizeList.powerBank.commentText6'),
				userName: 'o***',
				descText: i18n.t('prizeList.powerBank.commentDescText6'),
			},
			{
				commentId: 7,
				imgs: [powerBankComment7_1, powerBankComment7_2],
				text: i18n.t('prizeList.powerBank.commentText7'),
				userName: 'l***',
				descText: i18n.t('prizeList.powerBank.commentDescText7'),
			},
			{
				commentId: 8,
				imgs: [powerBankComment8_1, powerBankComment8_2],
				text: i18n.t('prizeList.powerBank.commentText8'),
				userName: 'l***',
				descText: i18n.t('prizeList.powerBank.commentDescText8'),
			},
			{
				commentId: 9,
				imgs: [powerBankComment9_1],
				text: i18n.t('prizeList.powerBank.commentText9'),
				userName: 'h***',
				descText: i18n.t('prizeList.powerBank.commentDescText9'),
			},
			{
				commentId: 10,
				imgs: [powerBankComment10_1],
				text: i18n.t('prizeList.powerBank.commentText10'),
				userName: 'f***',
				descText: i18n.t('prizeList.powerBank.commentDescText10'),
			},
			{
				commentId: 11,
				imgs: [powerBankComment11_1],
				text: i18n.t('prizeList.powerBank.commentText11'),
				userName: 's***',
				descText: i18n.t('prizeList.powerBank.commentDescText11'),
			},
			{
				commentId: 12,
				imgs: [powerBankComment12_1],
				text: i18n.t('prizeList.powerBank.commentText12'),
				userName: 'z***',
				descText: i18n.t('prizeList.powerBank.commentDescText12'),
			},
			{
				commentId: 13,
				imgs: [powerBankComment13_1],
				text: i18n.t('prizeList.powerBank.commentText13'),
				userName: 'f***',
				descText: i18n.t('prizeList.powerBank.commentDescText13'),
			},
			{
				commentId: 14,
				imgs: [powerBankComment14_1],
				text: i18n.t('prizeList.powerBank.commentText14'),
				userName: 'c***',
				descText: i18n.t('prizeList.powerBank.commentDescText14'),
			},
		],
	},
	{
		id: 3,
		x: 2,
		y: 0,
		background: '#fefffa',
		imgs: [
			{
				src: fiveZhe,
				width: 100,
				height: 100,
			},
		],
		discount: 5,
		name: 'iphone15 pro max 五折貨到付款',
		borderRadius: 10,
		attrs: [
			{
				type: 'color',
				attr: '颜色',
				values: ['原色', '藍色', '白色', '黑色鈦金圈'],
			},
			{
				type: 'price',
				attr: '存储',
				values: ['256G-44900', '512G-51900', '1T-58900'],
			},
		],
		desc: [
			'6.7英寸超視網膜XDR顯示屏，ProMotion自適應刷新率技術',
			'露動島功能和iPhone互動的新方式',
			'具備抗水性能，在6米深的水下停留時間最長可達30分鐘',
			'4800萬主摄、1200萬超廣角及1200萬長焦三攝，4K視频拍摄',
			'1200萬像素前置原深感攝像頭，支持人像模式智能HDR',
			'A17Pro芯片，6核中央處理器，6核圖形處理器，16核網絡引擎',
			'面容ID，SOS緊急聯絡車祸檢测，USB-C接口',
		],
	},
	{
		id: 4,
		x: 2,
		y: 1,
		background: '#fefffa',
		price: '8500',
		imgs: [
			{
				src: threeZhe,
				width: 100,
				height: 100,
			},
		],
		name: 'iphone15 pro max 三折貨到付款',
		borderRadius: 10,
		discount: 3,
		attrs: [
			{
				type: 'color',
				attr: '颜色',
				values: ['原色', '藍色', '白色', '黑色鈦金圈'],
			},
			{
				type: 'price',
				attr: '存储',
				values: ['256G-44900', '512G-51900', '1T-58900'],
			},
		],
		desc: [
			'6.7英寸超視網膜XDR顯示屏，ProMotion自適應刷新率技術',
			'露動島功能和iPhone互動的新方式',
			'具備抗水性能，在6米深的水下停留時間最長可達30分鐘',
			'4800萬主摄、1200萬超廣角及1200萬長焦三攝，4K視频拍摄',
			'1200萬像素前置原深感攝像頭，支持人像模式智能HDR',
			'A17Pro芯片，6核中央處理器，6核圖形處理器，16核網絡引擎',
			'面容ID，SOS緊急聯絡車祸檢测，USB-C接口',
		],
	},
	{
		id: 5,
		x: 2,
		y: 2,
		background: '#fefffa',
		imgs: [
			{
				src: sorry,
				width: 100,
				height: 100,
			},
		],
		giftLogo: sorryLogo,
		originImage: sorry,
		name: i18n.t('winPrize.sorryText'),
		borderRadius: 10,
	},
	{
		id: 6,
		x: 1,
		y: 2,
		background: '#fefffa',
		imgs: [
			{
				src: oneZhe,
				width: 100,
				height: 100,
			},
		],
		name: i18n.t('prizeList.oneZhe.name'),
		giftName: i18n.t('prizeList.oneZhe.giftName'),
		giftLogo: iphoneGift,
		borderRadius: 10,
		originPrice: i18n.t('prizeList.oneZhe.originPrice'),
		price: i18n.t('prizeList.oneZhe.price'),
		originImage: iphone,
		swiperImages: [siphone1, siphone2, siphone3, siphone4, siphone5, siphone6],
		attrImages: [siphone2, siphone3, siphone4, siphone5, siphone6],
		discount: 1,
		attrs: [
			{
				type: 'img',
				attr: i18n.t('prizeList.oneZhe.colorAttrName'),
				values: [
					{
						chooseAble: true,
						src: siphone2,
						name: i18n.t('prizeList.oneZhe.colorAttrValue1'),
					},
					{
						chooseAble: true,
						src: siphone3,
						name: i18n.t('prizeList.oneZhe.colorAttrValue2'),
					},
					{
						chooseAble: true,
						src: siphone4,
						name: i18n.t('prizeList.oneZhe.colorAttrValue3'),
					},
					{
						chooseAble: true,
						src: siphone5,
						name: i18n.t('prizeList.oneZhe.colorAttrValue4'),
					},
					{
						chooseAble: true,
						src: siphone6,
						name: i18n.t('prizeList.oneZhe.colorAttrValue5'),
					},
				],
			},
			{
				type: 'text',
				attr: i18n.t('prizeList.oneZhe.storageAttrName'),
				// values: ['256G-48000', '512G-52000^^disabled', '1T-58900^^disabled'],
				values: [
					{
						chooseAble: false,
						name: i18n.t('prizeList.oneZhe.storageAttrValue1'),
					},
					{
						chooseAble: true,
						name: i18n.t('prizeList.oneZhe.storageAttrValue2'),
					},
					{
						chooseAble: false,
						name: i18n.t('prizeList.oneZhe.storageAttrValue3'),
					},
				],
			},
		],
		desc: [
			i18n.t('prizeList.oneZhe.desc1'),
			i18n.t('prizeList.oneZhe.desc2'),
			i18n.t('prizeList.oneZhe.desc3'),
			i18n.t('prizeList.oneZhe.desc4'),
			i18n.t('prizeList.oneZhe.desc5'),
			i18n.t('prizeList.oneZhe.desc6'),
			i18n.t('prizeList.oneZhe.desc7'),
		],
		attribute: [
			{
				name: i18n.t('prizeList.oneZhe.brandName'),
				value: i18n.t('prizeList.oneZhe.brandValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.systemName'),
				value: i18n.t('prizeList.oneZhe.systemValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.cpuName'),
				value: i18n.t('prizeList.oneZhe.cpuValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.syName'),
				value: i18n.t('prizeList.oneZhe.syValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.pxName'),
				value: i18n.t('prizeList.oneZhe.pxValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.powerName'),
				value: i18n.t('prizeList.oneZhe.powerValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.powerTypeName'),
				value: i18n.t('prizeList.oneZhe.powerTypeValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.screenSizeName'),
				value: i18n.t('prizeList.oneZhe.screenSizeValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.screenUpdateName'),
				value: i18n.t('prizeList.oneZhe.screenUpdateValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.backPxName'),
				value: i18n.t('prizeList.oneZhe.backPxValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.prePxName'),
				value: i18n.t('prizeList.oneZhe.prePxValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.statusName'),
				value: i18n.t('prizeList.oneZhe.statusValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.saveTimeName'),
				value: i18n.t('prizeList.oneZhe.saveTimeValue'),
			},
			{
				name: i18n.t('prizeList.oneZhe.saveTimeTypeName'),
				value: i18n.t('prizeList.oneZhe.saveTimeTypeValue'),
			},
		],
		productDetailImgs: [
			ippd1,
			ippd2,
			ippd3,
			ippd4,
			ippd5,
			ippd6,
			ippd7,
			ippd8,
			ippd9,
			ippd10,
		],
		comments: [
			{
				commentId: 1,
				imgs: [iphoneComment1, iphoneComment2, iphoneComment3],
				text: i18n.t('prizeList.oneZhe.commentText1'),
				userName: 'H***',
				descText: i18n.t('prizeList.oneZhe.commentDescText1'),
			},
			{
				commentId: 2,
				imgs: [iphoneComment4, iphoneComment5],
				text: i18n.t('prizeList.oneZhe.commentText2'),
				userName: 'i***',
				descText: i18n.t('prizeList.oneZhe.commentDescText2'),
			},
			{
				commentId: 3,
				imgs: [iphoneComment6, iphoneComment7],
				text: i18n.t('prizeList.oneZhe.commentText3'),
				userName: 'p***',
				descText: i18n.t('prizeList.oneZhe.commentDescText3'),
			},
			{
				commentId: 4,
				imgs: [iphoneComment8, iphoneComment9],
				text: i18n.t('prizeList.oneZhe.commentText4'),
				userName: 'j***',
				descText: i18n.t('prizeList.oneZhe.commentDescText4'),
			},
			{
				commentId: 5,
				imgs: [iphoneComment10, iphoneComment11],
				text: i18n.t('prizeList.oneZhe.commentText5'),
				userName: 'a***',
				descText: i18n.t('prizeList.oneZhe.commentDescText5'),
			},
			{
				commentId: 6,
				imgs: [iphoneComment12, iphoneComment13, iphoneComment14],
				text: i18n.t('prizeList.oneZhe.commentText6'),
				userName: 'w***',
				descText: i18n.t('prizeList.oneZhe.commentDescText6'),
			},
			{
				commentId: 7,
				imgs: [
					iphoneComment15,
					iphoneComment16,
					iphoneComment17,
					iphoneComment18,
				],
				text: i18n.t('prizeList.oneZhe.commentText7'),
				userName: 'q***',
				descText: i18n.t('prizeList.oneZhe.commentDescText7'),
			},
			{
				commentId: 8,
				imgs: [iphoneComment19, iphoneComment20],
				text: i18n.t('prizeList.oneZhe.commentText8'),
				userName: 'v***',
				descText: i18n.t('prizeList.oneZhe.commentDescText8'),
			},
			{
				commentId: 9,
				imgs: [
					iphoneComment21,
					iphoneComment22,
					iphoneComment23,
					iphoneComment24,
				],
				text: i18n.t('prizeList.oneZhe.commentText9'),
				userName: 'k***',
				descText: i18n.t('prizeList.oneZhe.commentDescText9'),
			},
		],
	},
	{
		id: 7,
		x: 0,
		y: 2,
		background: '#fefffa',
		imgs: [
			{
				src: sorry,
				width: 100,
				height: 100,
			},
		],
		name: '感謝參與',
		borderRadius: 10,
	},
	{
		id: 8,
		x: 0,
		y: 1,
		background: '#fefffa',
		imgs: [
			{
				src: jiujiu,
				width: 100,
				height: 100,
			},
		],
		name: 'JIU JIU 折價券NT$8500',
		borderRadius: 10,
	},
]
