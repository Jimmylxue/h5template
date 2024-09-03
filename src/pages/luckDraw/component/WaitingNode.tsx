import { useState } from 'react'
import { Popup } from 'react-vant'
import wait from '../../../assets/img/wait.png'

export function useWaitingNode() {
	const [showWaiting, setShowWaiting] = useState<boolean>(false)

	const node = (
		<div>
			<Popup
				visible={showWaiting}
				onClose={() => {
					setShowWaiting(false)
				}}
				round
			>
				<div className=" w-[250px] rounded-md py-4">
					<div className=" text-center text-lg font-bold">請稍後</div>
					<>
						<div className=" flex flex-col items-center justify-center my-2">
							<img src={wait} className=" size-[100px]" alt="" />
						</div>
						<div className=" text-center mt-2 text-sm">正在跳轉line</div>
					</>
				</div>
			</Popup>
		</div>
	)

	const showWait = () => {
		setShowWaiting(true)
	}

	const closeWait = () => {
		setShowWaiting(false)
	}

	return { node, showWait, closeWait }
}
