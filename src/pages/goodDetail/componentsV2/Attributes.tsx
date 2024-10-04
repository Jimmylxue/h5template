import { useState } from 'react'
import { Popup } from 'react-vant'
import right from '@/assets/img/goodDetail/right.png'
import { useTranslation } from 'react-i18next'
import { useCurrentGood } from '../core/useCurrentGood'

export function Attribute() {
	const { t } = useTranslation()
	const [visible, setVisible] = useState<boolean>(false)

	const { good } = useCurrentGood()

	return (
		<>
			<div
				className=" mt-2 bg-white  py-3"
				onClick={() => {
					setVisible(true)
				}}
			>
				<div className=" flex w-full justify-between items-center px-2">
					<div className=" flex items-center">
						<div className=" w-[4px] h-[14px] bg-[#FE4025] rounded"></div>
						<div className=" text-sm font-bold ml-2">
							{t('goodDetail.productData')}
						</div>
					</div>
					<div>
						<img className=" w-[6px] h-[10px]" src={right} alt="" />
					</div>
				</div>
				<div className=" flex justify-between items-center text-[13px] mt-4 mb-2">
					{good?.attribute?.slice(0, 3)?.map((item, index) => (
						<div
							key={index}
							className=" w-1/3 flex flex-col justify-center items-center"
						>
							<div className=" text-[#999999]">{item.name}</div>
							<div className=" text-[#333333] mt-2">{item.value}</div>
						</div>
					))}
				</div>
			</div>
			<Popup
				visible={visible}
				closeable
				title={t('goodDetail.productData')}
				description={
					<div className=" pb-4 text-[13px] text-[#333333]">
						{good?.attribute?.map((item, index) => (
							<div
								key={index}
								className=" flex justify-between items-start mt-2"
							>
								<div className=" w-1/2">{item.name}</div>
								<div className=" w-1/2 text-right break-words">
									{item.value}
								</div>
							</div>
						))}
					</div>
				}
				position="bottom"
				round
				onClose={() => setVisible(false)}
			/>
		</>
	)
}
