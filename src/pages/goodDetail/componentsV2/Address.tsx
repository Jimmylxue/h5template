import homeIcon from '@/assets/img/goodDetail/homeIcon.png'
import { AddressForm } from './AddressForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Address() {
	const [visible, setVisible] = useState<boolean>(false)
	const navigate = useNavigate()
	const { t } = useTranslation()

	return (
		<>
			<div className=" fixed w-full bg-white text-[13px] flex items-center justify-between h-[78px] bottom-0 left-0 px-6">
				<div
					className=" flex flex-col justify-center items-center"
					onClick={() => {
						navigate(-1)
					}}
				>
					<div>
						<img src={homeIcon} className=" w-[21px] h-[19px]" alt="" />
					</div>
					<div className=" text-[12px] text-[#333333] mt-1">
						{t('goodDetail.home')}
					</div>
				</div>
				<div
					className=" w-[287px] h-[52px] bg-[#FF4125] text-[#fff] flex justify-center items-center rounded-lg"
					onClick={() => {
						setVisible(true)
					}}
				>
					{t('goodDetail.inputAddressBtn')}
				</div>
			</div>

			<AddressForm
				visible={visible}
				onClose={() => {
					setVisible(false)
				}}
			/>
		</>
	)
}
