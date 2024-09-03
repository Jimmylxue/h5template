import classNames from 'classnames'
import { useRef, useState } from 'react'
import { Overlay } from 'react-vant'
import box from '@/assets/img/box.gif'
import flower from '@/assets/img/flower.gif'
import jinbi from '@/assets/video/jinbi.mp3'

export function useWinPrize() {
	const [show, setShow] = useState<boolean>(false)

	const [boxShow, setBoxShow] = useState<boolean>(false)
	const [flowerShow, setFlowerShow] = useState<boolean>(false)

	const canShowAddAddress = useRef<boolean>(false)

	const audioRef = useRef(null)

	const prizeMsg = useRef<{
		img: string
		name: string
		id: number
		onConfirm?: () => void
	}>()

	const hasClick = useRef<boolean>(false)

	/**
	 * 是否是中奖
	 */
	const isGoalPrize = prizeMsg.current?.id !== 5

	const node = (
		<Overlay
			visible={show}
			onClick={() => {
				setShow(false)
			}}
			style={{
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{boxShow ? (
				<img src={box} alt="" className=" size-[300px]" />
			) : (
				<div className="bg-[url('/src/assets/img/dialogBg.png')] bg-[length:100%_100%] bg-no-repeat w-3/4 pb-5 rounded-lg relative">
					{flowerShow && <img className=" absolute" src={flower} alt="" />}
					<div className=" text-[#d2555c] text-center text-[22px] font-semibold mt-8 mb-2">
						{isGoalPrize ? '恭喜您中獎啦' : '很遺憾未中獎'}
					</div>
					<div className=" flex flex-col justify-center items-center">
						<div
							className={classNames('', {
								'w-[200px]': isGoalPrize,
								'h-[200px]': isGoalPrize,
								'h-[93px]': !isGoalPrize,
								'w-[100px]': !isGoalPrize,
							})}
						>
							<img
								src={prizeMsg.current?.img}
								alt=""
								className={classNames('', {
									'w-[200px]': isGoalPrize,
									'w-[100px]': !isGoalPrize,
								})}
							/>
						</div>

						<div className=" text-[#333333] text-lg font-bold mb-2 mt-4 text-center">
							{prizeMsg.current?.name}
						</div>
					</div>
					<div
						className=" mt-2"
						onClick={() => {
							if (hasClick.current) {
								return
							}
							setShow(false)
							prizeMsg.current?.onConfirm?.()
							hasClick.current = true
						}}
					>
						<div className="bg-[url('/src/assets/img/bigButtonBg.png')] text-sm flex justify-center items-center px-3 py-1 text-[#905224] text-[19px] mx-auto rounded-2xl mt-2 w-[254px] h-[54px] bg-contain">
							{canShowAddAddress.current
								? '去领取'
								: `再抽一次 - 剩餘(${localStorage.getItem(
										'snow-draw-count'
								  )})次`}
						</div>
						{canShowAddAddress.current && (
							<div className=" text-sm text-center mt-4 text-[#999999]">
								绑定NU NU app會員碼領取
							</div>
						)}
					</div>
				</div>
			)}
			<audio
				className=" absolute -left-[300px] -top-[1000px]"
				src={jinbi}
				ref={audioRef}
			/>
		</Overlay>
	)

	const showWinNode = (
		msg: { img: string; name: string; id: number; onConfirm: () => void },
		showAddAddress: boolean
	) => {
		prizeMsg.current = msg
		canShowAddAddress.current = showAddAddress
		hasClick.current = false
		const isApplePrize = prizeMsg.current?.id === 6
		setShow(true)
		console.log('audioRef?.current?.play?.()', audioRef.current)
		if (isApplePrize) {
			setBoxShow(true)
			setTimeout(() => {
				setBoxShow(false)
				setFlowerShow(true)
				// @ts-ignore
				audioRef?.current?.play?.()
				setTimeout(() => {
					setFlowerShow(false)
				}, 4400)
			}, 1000)
		}
	}

	return { winNode: node, showWinNode }
}
