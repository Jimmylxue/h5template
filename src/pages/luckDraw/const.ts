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
		attrs: [
			{
				type: 'color',
				attr: i18n.t('prizeList.powerBank.colorAttrName'),
				values: [
					i18n.t('prizeList.powerBank.colorAttrValue'),
					// '黑色-0^^disabled',
					// '白色-0^^disabled',
					// '蓝色-0^^disabled',
					// '红色-0^^disabled',
				],
			},
			{
				type: 'number',
				attr: i18n.t('prizeList.powerBank.capacityAttrName'),
				// values: ['10000毫安', '20000毫安-0^^disabled'],
				values: [i18n.t('prizeList.powerBank.capacityAttrValue')],
			},
		],
		desc: [
			i18n.t('prizeList.powerBank.desc1'),
			i18n.t('prizeList.powerBank.desc2'),
			i18n.t('prizeList.powerBank.desc3'),
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
		discount: 1,
		attrs: [
			{
				type: 'color',
				attr: i18n.t('prizeList.oneZhe.colorAttrName'),
				values: [
					i18n.t('prizeList.oneZhe.colorAttrValue1'),
					i18n.t('prizeList.oneZhe.colorAttrValue2'),
					i18n.t('prizeList.oneZhe.colorAttrValue3'),
					i18n.t('prizeList.oneZhe.colorAttrValue4'),
					i18n.t('prizeList.oneZhe.colorAttrValue5'),
				],
			},
			{
				type: 'price',
				attr: i18n.t('prizeList.oneZhe.storageAttrName'),
				// values: ['256G-48000', '512G-52000^^disabled', '1T-58900^^disabled'],
				values: [i18n.t('prizeList.oneZhe.storageAttrValue')],
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
