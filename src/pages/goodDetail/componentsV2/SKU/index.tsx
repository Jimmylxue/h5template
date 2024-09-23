import { useState } from 'react'
import menuIcon from '@/assets/img/goodDetail/menuIcon.png'
import right from '@/assets/img/goodDetail/right.png'
import { useCurrentGood } from '../../core/useCurrentGood'
import classNames from 'classnames'
import { Selector } from './selector'
import { useSku } from '../../SkuContext'
import { useTranslation } from 'react-i18next'

export function SKU() {
	const { good } = useCurrentGood()
	const { t } = useTranslation()

	const [visible, setVisible] = useState<boolean>(false)

	const { imgIndex, selectText } = useSku()

	return (
		<div>
			<div className=" py-1 text-[13px] flex items-center w-full justify-between px-2">
				<div className=" flex items-center">
					<img src={menuIcon} className=" size-[10px] mr-1" alt="" />
					{good?.attrImages?.map((item, index) => (
						<div
							key={index}
							className={classNames(' size-[32px] ml-1 border', {
								'border-[#FF6751]': imgIndex === index,
							})}
						>
							<img src={item} className=" w-full h-full" alt="" />
						</div>
					))}
				</div>
				<div
					className=" text-[13px] flex items-center"
					onClick={() => {
						setVisible(true)
					}}
				>
					<div className=" text-[#444444]">
						{t('goodDetail.hasSelectText')}
						{selectText}
					</div>
					<img className=" w-[6px] h-[10px] ml-2" src={right} alt="" />
				</div>
			</div>
			<Selector
				visible={visible}
				onClose={() => {
					setVisible(false)
				}}
			/>
		</div>
	)
}
