import { observer } from 'mobx-react-lite'
import { Button, Popup } from 'react-vant'
import kuaidi from '../../../assets/img/kuaidi.png'
import wait from '../../../assets/img/wait.png'
import { lineBox } from './lineModalShow'
import { useSystemConfig } from '../../../api/address'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const LineModal = observer(() => {
	const [showWait, setShowWait] = useState<boolean>(false)
	const navigate = useNavigate()

	const { data } = useSystemConfig({
		queryKey: ['systemConfig'],
	})

	const LineCode = data?.result?.[0]?.lineCode

	return (
		<div>
			<Popup
				visible={lineBox.show}
				onClose={() => {
					setShowWait(false)
					lineBox.closeModal()
				}}
				round
			>
				<div className=" w-[250px] rounded-md py-4">
					<div className=" text-center text-lg font-bold">
						{showWait ? '請稍後' : '提交成功'}
					</div>
					{showWait ? (
						<>
							<div className=" flex flex-col items-center justify-center my-2">
								<img src={wait} className=" size-[100px]" alt="" />
							</div>
							<div className=" text-center mt-2 text-sm">正在跳轉line</div>
						</>
					) : (
						<>
							<div className=" flex flex-col items-center justify-center">
								<img src={kuaidi} className=" size-[100px]" alt="" />
								<div className=" text-xs text-gray-600">7個工作天內到達</div>
							</div>
							{lineBox.canNavigate && (
								<div className=" text-center mt-2 text-sm">
									追蹤包裹LINE:{LineCode}
								</div>
							)}
						</>
					)}

					{!showWait && (
						<div className=" flex justify-center">
							<Button
								type="danger"
								round
								className=" px-8 mt-2"
								onClick={() => {
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
								確認
							</Button>
						</div>
					)}
				</div>
			</Popup>
		</div>
	)
})
