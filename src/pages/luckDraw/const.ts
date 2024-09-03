import fiveZhe from '../../assets/img/5zhe.png'
import threeZhe from '../../assets/img/3zhe.png'
import oneZhe from '../../assets/img/1zhe.png'
import xsmr from '../../assets/img/xsmr.png'
import jiujiu from '../../assets/img/jiujiu.png'
import sorry from '../../assets/img/sorry.png'
import powerBank from '../../assets/img/powerBank.png'
import iphone from '../../assets/img/iphone2.jpg'
import chongdianbao from '../../assets/img/chongdianbao.jpg'
import iphoneGift from '../../assets/img/iphoneGift.png'
import powerBankGift from '../../assets/img/powerBankGift.png'
import sorryLogo from '../../assets/img/sorryLogo.png'
// 轮播图
import spowerbank1 from '../../assets/img/swiper/powerbank1.jpg'
import spowerbank2 from '../../assets/img/swiper/powerbank2.png'
import spowerbank3 from '../../assets/img/swiper/powerbank3.png'
import siphone1 from '../../assets/img/swiper/iphone1.jpg'
import siphone2 from '../../assets/img/swiper/iphone2.jpg'
import siphone3 from '../../assets/img/swiper/iphone3.jpg'
import siphone4 from '../../assets/img/swiper/iphone4.jpg'
import siphone5 from '../../assets/img/swiper/iphone5.jpg'
import siphone6 from '../../assets/img/swiper/iphone6.jpg'

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
		name: 'Nu Nu-折價卷NT$100',
		borderRadius: 10,
		giftLogo: xsmr,
		giftName: 'Nu Nu-折價卷NT$100',
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
		name: 'KC認證行動充10000毫安',
		giftName: 'NT$15貨到付款',
		giftLogo: powerBankGift,
		price: 15,
		borderRadius: 10,
		originPrice: 380,
		originImage: chongdianbao,
		swiperImages: [spowerbank1, spowerbank2, spowerbank3, powerBankGift],
		attrs: [
			{
				type: 'color',
				attr: '颜色',
				values: [
					'随机颜色',
					// '黑色-0^^disabled',
					// '白色-0^^disabled',
					// '蓝色-0^^disabled',
					// '红色-0^^disabled',
				],
			},
			{
				type: 'number',
				attr: '颜色',
				// values: ['10000毫安', '20000毫安-0^^disabled'],
				values: ['10000毫安'],
			},
		],
		desc: [
			'時尚優雅，多種顏色隨機出貨',
			'相容市面絕大多數手機快充協議',
			'10000毫安超大容量',
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
		name: '感謝參與',
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
		name: '【官方正品】Apple/蘋果 iPhone 15 全新未拆封',
		giftName: 'NT$3960貨到付款',
		giftLogo: iphoneGift,
		borderRadius: 10,
		originPrice: 39600,
		originImage: iphone,
		swiperImages: [siphone1, siphone2, siphone3, siphone4, siphone5, siphone6],
		discount: 1,
		attrs: [
			{
				type: 'color',
				attr: '颜色',
				values: ['黑色', '粉色', '黄色', '蓝色', '绿色'],
			},
			{
				type: 'price',
				attr: '存储',
				// values: ['256G-48000', '512G-52000^^disabled', '1T-58900^^disabled'],
				values: ['256G-39600'],
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
