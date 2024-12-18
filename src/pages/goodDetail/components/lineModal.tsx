import { observer } from 'mobx-react-lite'
import { Button, Popup } from 'react-vant'
import kuaidi from '../../../assets/img/kuaidi.png'
import { lineBox } from './lineModalShow'
import { useSystemConfig } from '../../../api/address'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCurrentGood } from '../core/useCurrentGood'
import { randomJumpPage } from '@/utils/index'
import { glowEffect } from '@/pages/common/glowEffect'

const lang = import.meta.env.VITE_APP_LANGUAGE

/**
 * 是否是使用后端上传 pix 像素点
 */
const useBackUploadPix = import.meta.env.VITE_APP_USE_BACK_UPLOAD_PIX === 'true'

export const LineModal = observer(() => {
	const navigate = useNavigate()
	const { t } = useTranslation()

	const { isSharePage } = useCurrentGood()

	const { data } = useSystemConfig({
		queryKey: ['systemConfig'],
	})

	const { good } = useCurrentGood()

	const LineCode = data?.result?.[0]?.lineCode

	return (
		<div>
			<Popup visible={lineBox.powerBankModalShow} round>
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
						{lineBox.iphoneModalShow && (
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
								console.log('lineBox.canNavigate', lineBox.iphoneModalShow)
								if (!useBackUploadPix) {
									if (lineBox.iphoneModalShow === true) {
										/**
										 * iphoneModalShow = true 表示是iphone
										 */
										// @ts-ignore
										fbq('track', 'Purchase', { value: 0.0, currency: 'USD' })
										console.log('ttq', ttq, ttq.track)
										ttq?.track?.('PlaceAnOrder', {
											contents: [
												{
													content_id: '1', // string. ID of the product. Example: "1077218".
													content_type: 'product', // string. Either product or product_group.
													content_name: 'shirt', // string. The name of the page or product. Example: "shirt".
												},
											],
											value: 0.1, // number. Value of the order or items sold. Example: 100.
											currency: 'USD', // string. The 4217 currency code. Example: "USD".
										})
										console.log('ttqUpdate')
									} else {
										fbq('track', 'AddPaymentInfo')
									}
								}
								lineBox.closeModal()
								if (isSharePage) {
									const jumpList =
										data?.result?.[0]?.inviteCode?.split('@@') || []
									randomJumpPage(jumpList)
								} else {
									navigate(-1)
									fbq('trackCustom', 'confirmEnd')

									setTimeout(() => {
										document
											.getElementById('taskContainer')
											?.scrollIntoView({ behavior: 'smooth', block: 'end' })
										if (good?.id === 2) {
											glowEffect.addGlowEffect('reward-1')
										} else {
											glowEffect.addGlowEffect('bindKf')
										}
									}, 300)
								}
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
