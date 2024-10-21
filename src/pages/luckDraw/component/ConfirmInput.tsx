import { useRef, useState } from 'react'
import { Popup } from 'react-vant'

export function useConfirmInput() {
	const [visible, setVisible] = useState<boolean>(false)

	const currentMemberCode = useRef<string>('')

	const confirmFn = useRef<any>()

	const node = (
		<>
			<Popup visible={visible} round onClose={() => setVisible(false)}>
				<div className=" w-[280px] py-2">
					<div className=" text-center font-bold text-lg mt-2">
						請確認會員碼
					</div>
					<div className=" text-center mt-4">{currentMemberCode.current}</div>

					<div className=" flex justify-center items-center px-4 my-4">
						<button
							className=" bg-[url('/src/assets/img/canGain.png')] mx-2 w-[80px] h-[35px]  bg-contain text-[#905224]"
							onClick={() => {
								setVisible(false)
							}}
						>
							取消
						</button>
						<button
							className=" bg-[url('/src/assets/img/canGain.png')] mx-2 w-[80px] h-[35px]  bg-contain text-[#905224]"
							onClick={() => {
								fbq('track', 'ViewContent')
								confirmFn.current?.()
								setVisible(false)
							}}
						>
							確認
						</button>
					</div>

					<div className=" text-center text-xs text-[#ff590d] pb-1">
						關聯錯誤的會員碼有丟失獎品的可能
					</div>
				</div>
			</Popup>
		</>
	)

	const showConfirm = ({
		memberCode,
		onConfirm,
	}: {
		memberCode: string
		onConfirm: () => void
	}) => {
		currentMemberCode.current = memberCode
		confirmFn.current = onConfirm
		setVisible(true)
	}

	const closeConfirm = () => {}

	return { node, showConfirm, closeConfirm }
}
