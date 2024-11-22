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
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { glowEffect } from '@/pages/common/glowEffect'

const isRandomJump = import.meta.env.VITE_APP_RANDOM_JUMP
/**
 * 是否是使用后端上传 pix 像素点
 */
const useBackUploadPix = import.meta.env.VITE_APP_USE_BACK_UPLOAD_PIX === 'true'

type TProps = {
	/**
	 * 是否解锁联系客服
	 */
	isUnLock: boolean
	hasRewardItem: any
}

export const ChatLineAbout = observer(({ isUnLock, hasRewardItem }: TProps) => {
	const { data } = useSystemConfig({
		queryKey: ['systemConfig'],
		refetchOnWindowFocus: false,
	})
	const { t } = useTranslation()

	const { node: waitingNode, showWait, closeWait } = useWaitingNode()

	const { fbc, fbp } = useFbData()

	const { mutateAsync: uploadChat } = useUploadChat()

	useEffect(() => {
		console.log('glowEffect.showGlow', glowEffect.showGlow)
		setTimeout(() => {
			if (glowEffect.showGlow === 'bindKf') {
				addGlowEffect('bindKf')
			} else if (glowEffect.showGlow === 'seeJiaoCheng') {
				addGlowEffect('seeJiaoCheng')
			} else if (glowEffect.showGlow === 'reward-1') {
				addGlowEffect('reward-1')
			}
		}, 800)
	}, [glowEffect.showGlow])

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
							className={classNames(' w-[44px] h-[44px] z-2', {})}
							alt=""
						/>
						<div className=" whitespace-nowrap ml-2">
							<div className=" text-[#FF681D] text-xs font-bold mb-1 w-[150px] whitespace-normal flex items-center">
								{t('ChatLineAbout.kefuLine')}：
								<div
									className={classNames('', {
										mosaic: !isUnLock,
									})}
								>
									{data?.result?.[0]?.lineCode}
								</div>
							</div>
							<div className=" text-[#A2846E] text-[10px] w-[150px] whitespace-normal">
								{t(
									!isUnLock
										? 'ChatLineAbout.UnLockFindKf'
										: 'ChatLineAbout.findKf'
								)}
							</div>
						</div>
					</div>
					<button
						className=" relative bg-[url('/src/assets/img/canGain.png')] w-[80px] h-[35px] text-[#905224] bg-contain flex justify-center items-center"
						onClick={() => {
							if (!isUnLock) {
								console.log('hasRewardItem', hasRewardItem)
								Toast.info(t('ChatLineAbout.UnLockFindKf'))
								if (!hasRewardItem['2']) {
									addGlowEffect('reward-0')
								} else {
									addGlowEffect('reward-1')
								}
								return
							}
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
})
