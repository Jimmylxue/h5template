import { useState } from 'react'
import { Popup } from 'react-vant'
import wait from '../../../assets/img/wait.png'
import { useTranslation } from 'react-i18next'

export function useGainCouponNode() {
	const [show, setShow] = useState<boolean>(false)
	const { t } = useTranslation()

	const node = (
		<div>
			<Popup
				visible={show}
				onClose={() => {
					setShow(false)
				}}
				round
			>
				<div className=" w-[250px] rounded-md py-4">
					<div className=" text-center text-lg font-bold">
						{t('gainCoupon.gainSuccess')}
					</div>
					<>
						<div className=" flex flex-col items-center justify-center my-2">
							<img src={wait} className=" size-[100px]" alt="" />
						</div>
						<div className=" text-center mt-2 text-sm">
							{t('gainCoupon.chatKf')}
						</div>
					</>
				</div>
			</Popup>
		</div>
	)

	const showGain = () => {
		setShow(true)
	}

	const closeGain = () => {
		setShow(false)
	}

	return { node, showGain, closeGain }
}
