import { observer } from 'mobx-react-lite'
import { Button, Popup } from 'react-vant'
import kuaidi from '../../../assets/img/kuaidi.png'
import { lineBox } from './lineModalShow'
import { useSystemConfig } from '../../../api/address'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const lang = import.meta.env.VITE_APP_LANGUAGE

export const LineModal = observer(() => {
	const navigate = useNavigate()
	const { t } = useTranslation()

	const { data } = useSystemConfig({
		queryKey: ['systemConfig'],
	})

	const LineCode = data?.result?.[0]?.lineCode

	return (
		<div>
			<Popup visible={lineBox.show} round>
				<div className=" w-[250px] rounded-md py-4">
					<div className=" text-center text-lg font-bold">
						{t('lineModal.submitSuccess')}
					</div>
					<>
						<div className=" flex flex-col items-center justify-center">
							<img src={kuaidi} className=" size-[100px]" alt="" />
							<div className=" text-xs text-gray-600">
								{t('lineModal.arriveText')}
							</div>
						</div>
						{lineBox.canNavigate && (
							<div className=" text-center mt-2 text-sm">
								{t('lineModal.packageText')}{' '}
								{lang === 'en' ? '' : `: ${LineCode}`}
							</div>
						)}
					</>

					<div className=" flex justify-center">
						<Button
							type="danger"
							round
							className=" px-8 mt-2"
							onClick={() => {
								console.log('lineBox.canNavigate', lineBox.canNavigate)
								// if (lineBox.canNavigate === true) {
								// 	/**
								// 	 * canNavigate = true 表示是iphone
								// 	 */
								// 	// @ts-ignore
								// 	fbq('track', 'Purchase', { value: 0.0, currency: 'USD' })
								// } else {
								// 	fbq('track', 'AddPaymentInfo')
								// }
								lineBox.closeModal()
								navigate(-1)
								fbq('trackCustom', 'confirmEnd')

								setTimeout(() => {
									document
										.getElementById('taskContainer')
										?.scrollIntoView({ behavior: 'smooth' })
								}, 300)
							}}
						>
							{t('lineModal.confirmText')}
						</Button>
					</div>
				</div>
			</Popup>
		</div>
	)
})
