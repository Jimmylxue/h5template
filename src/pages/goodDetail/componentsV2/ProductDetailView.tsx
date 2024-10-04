import { useTranslation } from 'react-i18next'
import { useCurrentGood } from '../core/useCurrentGood'

export function ProductDetailView() {
	const { t } = useTranslation()
	const { good } = useCurrentGood()
	return (
		<div className=" mt-2 bg-white py-3">
			<div className=" flex w-full justify-between items-center px-2">
				<div className=" flex items-center">
					<div className=" w-[4px] h-[14px] bg-[#FE4025] rounded"></div>
					<div className=" text-sm font-bold ml-2">
						{t('goodDetail.detail')}
					</div>
				</div>
			</div>
			{good?.productDetailImgs?.map((item, index) => (
				<img src={item} key={index} className=" w-full mt-2" />
			))}
		</div>
	)
}
