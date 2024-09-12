import { useSystemConfig } from '../../../api/address'
import { useWaitingNode } from './WaitingNode'
import { useEffect } from 'react'
import { addGlowEffect } from '../core'
import { Toast } from 'react-vant'
import { copyToClipboard } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { kflogo } from '@/assets/index'
import bindKfBg from '@/assets/img/bindKfBg.png'

export function ChatLineAbout() {
	const { data } = useSystemConfig({
		queryKey: ['systemConfig'],
		refetchOnWindowFocus: false,
	})
	const { t } = useTranslation()

	const { node: waitingNode } = useWaitingNode()

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
							<div className=" text-[#FF681D] text-xs font-bold mb-1">
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
							/**
							 * confirmEndLine 是跳转line 的埋点
							 */
							// showWait()
							// fbq('trackCustom', 'confirmEndLine')
							// setTimeout(() => {
							// 	closeWait()
							// 	if (data?.result?.[0]?.inviteCode) {
							// 		location.href = data?.result?.[0]?.inviteCode
							// 	}
							// }, 1500)
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
