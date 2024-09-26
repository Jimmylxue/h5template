import { Popup } from 'react-vant'
import safeIcon from '@/assets/img/goodDetail/safeIcon.png'
import { useSku } from '../../SkuContext'
import { useCurrentGood } from '../../core/useCurrentGood'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'

const isEn = lang === 'en'

type TProps = {
	visible: boolean
	onClose: () => void
}

export function Selector({ visible, onClose }: TProps) {
	const { t } = useTranslation()
	const { good } = useCurrentGood()
	const {
		imgIndex,
		updateImgIndex,
		updateTextIndex,
		selectText,
		textIndex,
		updateAddressInputShow,
	} = useSku()

	const [tempChooseImg, setTempChooseImg] = useState<number>(0)
	const [tempChooseText, setTempChooseText] = useState<number>(0)

	const currentAttrImage = good?.attrImages?.[tempChooseImg]

	useEffect(() => {
		setTempChooseImg(imgIndex)
	}, [imgIndex])

	useEffect(() => {
		setTempChooseText(textIndex)
	}, [textIndex])

	return (
		<Popup
			visible={visible}
			closeable
			position="bottom"
			round
			description={
				<div className=" py-6">
					<div className=" flex items-center">
						<div className=" size-[72px]">
							<img src={currentAttrImage} className=" w-full h-full" alt="" />
						</div>
						<div className=" text-[11px] ml-2">
							<div className=" text-[#FD4864]">
								{t('goodDetail.activityPriceText')}
							</div>
							<div className=" flex items-end text-[#FD4864]">
								<div>{t('goodDetail.priceTag')}</div>
								<div className=" text-[24px] leading-5">{good?.price}</div>
							</div>
							<div className=" flex items-center">
								<div className=" text-[#CDCDCD] line-through">
									{t('goodDetail.originPriceText')}
									{good?.originPrice}
								</div>
								<div className=" text-[#333333] ml-2">-90%</div>
							</div>
							<div className=" text-[13px]">
								{t('goodDetail.hasSelectText')}
								{selectText}
							</div>
						</div>
					</div>

					<div className=" flex items-center text-[13px] my-2 truncate">
						<img src={safeIcon} className=" w-[11px] h-[13px]" alt="" />
						<div className=" ml-1 flex items-center truncate">
							<div
								className={classNames(' text-[#9E8EC2]', {
									'w-[120px]': isEn,
								})}
							>
								{t('goodDetail.getPackagePay')}
							</div>
							<div className="text-[#333333] truncate">
								{t('goodDetail.safeText')}
							</div>
						</div>
					</div>

					{good?.attrs?.map((attr, index) => {
						return attr.type === 'img' ? (
							<div
								key={index}
								className=" flex justify-between items-center flex-wrap mt-2"
							>
								{attr?.values?.map((at, idx) => (
									<div
										className={classNames(' size-[105px] mb-4 border', {
											'border-[#FF6751]': tempChooseImg === idx,
										})}
										key={idx}
										onClick={() => {
											setTempChooseImg?.(idx)
										}}
									>
										{/* @ts-ignore */}
										<img src={at.src} className=" w-full h-full" alt="" />
									</div>
								))}
								<div className=" w-[105px] mb-4"></div>
							</div>
						) : (
							<div key={index}>
								<div className=" flex items-center text-[#333333]">
									<div className=" w-[4px] h-[14px] bg-[#FE4025] rounded"></div>
									<div className=" text-sm font-bold ml-2">{attr.attr}</div>
								</div>

								<div className=" mt-2 flex">
									{attr.values.map((at, idx) => (
										<div
											key={idx}
											className={classNames(
												'text-[13px] text-[#333333] border border-[#E7E7E7] w-fit px-2 rounded relative mr-2',
												{
													'border-[#FE4025]': tempChooseText === idx,
													'text-[#FE4025]': tempChooseText === idx,
												}
											)}
											onClick={() => {
												// @ts-ignore
												if (!at.chooseAble) {
													return
												}
												setTempChooseText(idx)
											}}
										>
											{/* @ts-ignore */}
											<div>{at.name}</div>
											{/* @ts-ignore */}
											{!at.chooseAble && (
												<div className=" text-[9px] text-[#666666] bg-[#E5E5E5] rounded absolute px-1 right-0 -top-2">
													{t('goodDetail.noGood')}
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						)
					})}

					<div
						className=" w-full h-[50px] rounded-lg text-white flex justify-center items-center bg-[#FF4125] mt-4"
						onClick={() => {
							updateImgIndex?.(tempChooseImg)
							updateTextIndex?.(tempChooseText)
							updateAddressInputShow?.(true)
							onClose()
						}}
					>
						{t('goodDetail.confirmText')}
					</div>
				</div>
			}
			onClose={onClose}
		/>
	)
}
