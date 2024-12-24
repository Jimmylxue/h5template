import { observer } from 'mobx-react-lite'
import { Overlay } from 'react-vant'
import { lineBox } from './lineModalShow'
import { useSystemConfig } from '../../../api/address'
import { useNavigate } from 'react-router-dom'
import { useCurrentGood } from '../core/useCurrentGood'
import { randomJumpPage } from '@/utils/index'
import { glowEffect } from '@/pages/common/glowEffect'
import classNames from 'classnames'
import { chatLine } from '@/assets/index'
import { scrollToTask } from '@/pages/luckDraw'

const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en' | 'xjp' | 'tai'

/**
 * 是否是使用后端上传 pix 像素点
 */
const useBackUploadPix = import.meta.env.VITE_APP_USE_BACK_UPLOAD_PIX === 'true'

export const LineModalV2 = observer(() => {
	const navigate = useNavigate()
	const { isSharePage } = useCurrentGood()
	const { data } = useSystemConfig({
		queryKey: ['systemConfig'],
	})
	const { good } = useCurrentGood()

	return (
		<div>
			{/* <Popup visible={lineBox.show} round> */}
			<Overlay
				visible={lineBox.iphoneModalShow}
				className=" z-10 flex justify-center items-center"
			>
				<div className=" w-[305px] h-[516px] rounded-md py-4 bg-transparent relative">
					<img src={chatLine} className=" absolute left-0 top-0" alt="" />
					<button
						onClick={() => {
							console.log('lineBox.canNavigate', lineBox.iphoneModalShow)
							if (!useBackUploadPix) {
								if (lineBox.iphoneModalShow === true) {
									/**
									 * canNavigate = true 表示是iphone
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
									scrollToTask()
									if (good?.id === 2) {
										glowEffect.addGlowEffect('reward-1')
									} else {
										glowEffect.addGlowEffect('bindKf')
									}
								}, 300)
							}
						}}
						className={classNames(
							' w-[254px] h-[54px] absolute z-10 bottom-9 left-1/2 -translate-x-1/2  bg-[length:100%_100%]',
							{
								"bg-[url('/src/assets/img/chatBtn.png')]": ['zh'].includes(
									lang
								),
								"bg-[url('/src/assets/enImg/chatBtn.png')]": [
									'en',
									'xjp',
								].includes(lang),
								"bg-[url('/src/assets/taiImg/chatBtn.png')]": ['tai'].includes(
									lang
								),
							}
						)}
					></button>
				</div>
			</Overlay>
		</div>
	)
})
