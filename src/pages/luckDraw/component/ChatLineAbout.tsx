import { useSystemConfig, useUploadChat } from '../../../api/address'
import { useWaitingNode } from './WaitingNode'
import { useEffect } from 'react'
import { addGlowEffect } from '../core'
import { Toast } from 'react-vant'
import { copyToClipboard } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { kflogo } from '@/assets/index'
import bindKfBg from '@/assets/img/bindKfBg.png'
import { useFbData } from '@/hooks/useFb'

const isRandomJump = import.meta.env.VITE_APP_RANDOM_JUMP
/**
 * 是否是使用后端上传 pix 像素点
 */
const useBackUploadPix = import.meta.env.VITE_APP_USE_BACK_UPLOAD_PIX === 'true'

console.log('isJump~~~', isRandomJump)

export function ChatLineAbout() {
	const { data } = useSystemConfig({
		queryKey: ['systemConfig'],
		refetchOnWindowFocus: false,
	})
	const { t } = useTranslation()

	const { node: waitingNode, showWait, closeWait } = useWaitingNode()

	const { fbc, fbp } = useFbData()

	const { mutateAsync: uploadChat } = useUploadChat()

	useEffect(() => {
		setTimeout(() => {
			addGlowEffect('bindKf')
		}, 800)
	}, [])

	return (
		<>
			<div className="flex justify-between relative">
				<img
					src={bindKfBg}
					id="bindKf"
					alt=""
					className=" absolute w-full h-full"
				/>
				<div className=" w-full flex justify-between items-center text-white py-2 text-sm pr-2">
					<div className=" w-3/4 text-xs flex justify-start items-center pl-2 relative">
						<img
							src={kflogo}
							className=" w-[44px] h-[44px] rounded-full z-2  "
							alt=""
						/>
						<div className=" whitespace-nowrap ml-2">
							<div className=" text-[#FF681D] text-xs font-bold mb-1 w-[150px] whitespace-normal">
								{t('ChatLineAbout.kefuLine')}：{data?.result?.[0]?.lineCode}
							</div>
							<div className=" text-[#A2846E] text-[10px] w-[150px] whitespace-normal">
								{t('ChatLineAbout.findKf')}
							</div>
						</div>
					</div>
					<button
						className=" relative bg-[url('/src/assets/img/canGain.png')] w-[80px] h-[35px] text-[#905224] bg-contain flex justify-center items-center"
						onClick={() => {
							fbq('trackCustom', 'confirmEndLine')
							if (useBackUploadPix) {
								uploadChat({ fbc, fbp }).then(res => {
									console.log('上报成功', res)
								})
							} else {
								fbq('track', 'Contact')
							}
							if (isRandomJump === 'true') {
								const jumpList = data?.result?.[0]?.inviteCode?.split('@@')
								const length = jumpList?.length
								const linkIndex = Math.floor(Math.random() * (length || 0))
								const link = jumpList?.[linkIndex]
								if (link) {
									showWait()
									fbq('trackCustom', 'confirmEndLine')
									setTimeout(() => {
										closeWait()
										location.href = link
									}, 1500)
								}
							} else {
								try {
									navigator.clipboard
										.writeText(data?.result?.[0]?.lineCode!)
										.then(function () {
											Toast.info(
												`${t('ChatLineAbout.hasCopyText')}：${
													data?.result?.[0]?.lineCode
												}`
											)
										})
										.catch(function (err) {
											console.error('複製失败:', err)
										})
								} catch (error) {
									console.log('error', error)
									copyToClipboard(data?.result?.[0]?.lineCode!)
									Toast.info(
										`${t('ChatLineAbout.hasCopyText')}：${
											data?.result?.[0]?.lineCode
										}`
									)
								}
							}
						}}
					>
						{t('ChatLineAbout.quChat')}
					</button>
				</div>
			</div>
			{waitingNode}
		</>
	)
}
