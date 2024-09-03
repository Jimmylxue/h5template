import { useSystemConfig } from '../../../api/address'
import { useWaitingNode } from './WaitingNode'
import kflogo from '../../../assets/img/kflogo.png'
import { useEffect } from 'react'
import { addGlowEffect } from '../core'
import { Toast } from 'react-vant'
import { copyToClipboard } from '../../../utils'

export function ChatLineAbout() {
	const { data } = useSystemConfig({
		queryKey: ['systemConfig'],
		refetchOnWindowFocus: false,
	})

	const { node: waitingNode } = useWaitingNode()

	useEffect(() => {
		setTimeout(() => {
			addGlowEffect('bindKf')
		}, 800)
	}, [])

	return (
		<>
			<div
				id="bindKf"
				className="ml-2 bg-[url('/src/assets/img/bindKfBg.png')] w-[320px] h-[78px] bg-contain flex justify-between"
			>
				<div className=" w-full flex justify-between items-center text-white py-2 text-sm pr-2">
					<div className=" w-3/4 text-xs flex justify-start items-center pl-2 relative">
						<img
							src={kflogo}
							className=" w-[44px] h-[38px] rounded-full z-2  "
							alt=""
						/>
						<div className=" whitespace-nowrap ml-2">
							<div className=" text-[#FF681D] text-xs font-bold mb-1">
								客服LINE：{data?.result?.[0]?.lineCode}
							</div>
							<div className=" text-[#A2846E] text-xs">
								請截圖此頁面去找客服核對
							</div>
						</div>
					</div>
					<button
						className="bg-[url('/src/assets/img/canGain.png')] w-[80px] h-[35px] text-[#905224] bg-contain flex justify-center items-center"
						onClick={() => {
							fbq('trackCustom', 'confirmEndLine')
							try {
								navigator.clipboard
									.writeText(data?.result?.[0]?.lineCode!)
									.then(function () {
										Toast.info(`已複製id：${data?.result?.[0]?.lineCode}`)
									})
									.catch(function (err) {
										console.error('複製失败:', err)
									})
							} catch (error) {
								console.log('error', error)
								copyToClipboard(data?.result?.[0]?.lineCode!)
								Toast.info(`已複製id：${data?.result?.[0]?.lineCode}`)
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
						去聯絡
					</button>
				</div>
			</div>
			{waitingNode}
		</>
	)
}
