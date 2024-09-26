import activityBg from '@/assets/img/goodDetail/activityBg.png'
import priceIcon from '@/assets/img/goodDetail/priceIcon.png'
import timeIcon from '@/assets/img/goodDetail/timeIcon.png'
import saveIcon from '@/assets/img/goodDetail/saveIcon.png'
import right from '@/assets/img/goodDetail/right.png'
import safeIcon from '@/assets/img/goodDetail/safeIcon.png'
import { Attribute } from './componentsV2/Attributes'
import { Comment } from './componentsV2/Comment'
import { Address } from './componentsV2/Address'
import { Swipers } from './componentsV2/Swiper'
import { SKU } from './componentsV2/SKU'
import { SKUContextProvider } from './SkuContext'
import { CountDown } from 'react-vant'
import { useLocalStorageState } from 'ahooks'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useCurrentGood } from './core/useCurrentGood'
import { ProductDetailView } from './componentsV2/ProductDetailView'
import { LineModal } from './components/lineModal'

export function GoodDetailV2() {
	const { t } = useTranslation()
	const { good } = useCurrentGood()
	const [timeEndStart, setTimeEndStart] = useLocalStorageState<number>(
		'snow-time-start',
		{
			defaultValue: Date.now(),
		}
	)

	useEffect(() => {
		if (!localStorage.getItem('snow-time-start')) {
			setTimeEndStart(Date.now() + 1000 * 60 * 30)
		}
	}, [])

	const timeEnd = useMemo(() => {
		if (!timeEndStart) {
			return 0
		}
		const dep = timeEndStart - Date.now()

		return dep > 0 ? dep : 0
	}, [timeEndStart])

	return (
		<SKUContextProvider>
			<div className=" bg-[#F7F7F7] pb-[90px]">
				<Swipers />
				<div className=" w-full h-[65px] relative">
					<img
						src={activityBg}
						alt=""
						className=" absolute w-full h-full left-0 top-0 z-[1]"
					/>
					<div className=" relative z-[2] h-full flex justify-between items-center px-3">
						<div className=" text-white">
							<div className=" text-[11px]">
								{t('goodDetail.activityPriceText')}
							</div>
							<div className=" flex items-center leading-6">
								<div className=" text-[11px]">{t('goodDetail.priceTag')}</div>
								<div className=" text-[24px]">{good?.price}</div>
							</div>
							<div className=" flex items-center text-[11px]">
								<div className="  opacity-50">
									{t('goodDetail.originPriceText')}
									{good?.originPrice}
								</div>
								<div className=" ml-2">-90%</div>
							</div>
						</div>
						<div className=" flex flex-col justify-center items-center">
							<img src={priceIcon} alt="" className="w-[22px] h-[18px]" />
							<div className="text-white text-[11px] mt-1 w-[50px] leading-3 text-center">
								{t('goodDetail.getPackagePay')}
							</div>
						</div>
					</div>
				</div>

				<div className=" bg-white">
					<div className=" mt-2">
						<div className=" text-base font-bold text-[#333]">{good?.name}</div>
						<div className=" flex items-center text-[13px] bg-[#FE4025] w-fit text-white px-1 rounded ml-2 mt-1">
							<img src={timeIcon} className=" size-[15px]" alt="" />
							<div className=" ml-1">{t('goodDetail.saleText2')}</div>
							<div className=" ml-1 w-[60px]">
								<CountDown
									time={timeEnd}
									millisecond
									className=" text-white"
									format="mm:ss:SS"
								/>
							</div>
						</div>
					</div>
					<div className=" py-1 text-[13px] flex items-center w-full justify-between px-2">
						<div className=" flex items-center">
							<img src={saveIcon} className=" w-[13px] h-[11px]" alt="" />
							<div className=" text-[#444444] ml-1">
								{t('goodDetail.saleCount2')}
							</div>
						</div>
						<div>
							<img className=" w-[6px] h-[10px]" src={right} alt="" />
						</div>
					</div>
					<div className=" py-1 flex items-center w-full justify-between px-2 text-[13px]">
						<div className=" flex items-center">
							<img src={safeIcon} className=" w-[11px] h-[13px]" alt="" />
							<div className=" ml-1 flex items-center">
								<div className=" text-[#9E8EC2]">
									{t('goodDetail.getPackagePay')}
								</div>
								<div className="text-[#333333]">{t('goodDetail.safeText')}</div>
							</div>
						</div>
						<div>
							<img className=" w-[6px] h-[10px]" src={right} alt="" />
						</div>
					</div>

					<SKU />
				</div>

				<Attribute />

				<Comment />

				<ProductDetailView />

				<Address />

				<LineModal />
			</div>
		</SKUContextProvider>
	)
}
