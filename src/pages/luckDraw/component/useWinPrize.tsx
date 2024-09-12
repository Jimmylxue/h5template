import classNames from 'classnames'
import { useRef, useState } from 'react'
import { Overlay } from 'react-vant'
import box from '@/assets/img/box.gif'
import flower from '@/assets/img/flower.gif'
import { useTranslation } from 'react-i18next'
import { iconMap } from '@/assets/index'

export function useWinPrize() {
	const [show, setShow] = useState<boolean>(false)
	const { t } = useTranslation()

	const [boxShow, setBoxShow] = useState<boolean>(false)
	const [modalShow, setModalShow] = useState<boolean>(false)
	const [flowerShow, setFlowerShow] = useState<boolean>(false)

	const canShowAddAddress = useRef<boolean>(false)

	const audioRef = useRef()

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

	/**
	 * 是否展示 ICON
	 */
	const showIcon = [2, 6].includes(prizeMsg.current?.id!)

	const node = (
		<>
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
				<div className=" relative flex justify-center items-center w-full ">
					{boxShow && (
						<img
							src={box}
							alt=""
							id="boxContainer"
							className=" size-[300px]"
							onLoad={() => {
								setTimeout(() => {
									setFlowerShow(true)
								}, 500)
								setTimeout(() => {
									setModalShow(true)
									document.getElementById('boxContainer')!.style.display =
										'none'
								}, 900)
								setTimeout(() => {
									// @ts-ignore
									document.getElementById('jinbi').play()
								}, 400)
								setTimeout(() => {
									setBoxShow(false)
								}, 1000)
							}}
						/>
					)}
					{flowerShow && (
						<img
							className=" absolute z-10"
							src={flower}
							alt=""
							onLoad={() => {
								// @ts-ignore
								// @ts-ignore
								// audioRef?.current?.play?.()
								setTimeout(() => {
									setFlowerShow(false)
								}, 2050)
							}}
						/>
					)}
					{modalShow && (
						<div className="bg-[url('/src/assets/img/dialogBg.png')] bg-[length:100%_100%] bg-no-repeat w-3/4 pb-5 rounded-lg relative">
							{showIcon && (
								<img
									// @ts-ignore
									src={iconMap[prizeMsg.current?.id]}
									alt=""
									className=" size-[70px] absolute right-[45px] top-[100px]"
								/>
							)}
							<div className=" text-[#d2555c] text-center text-[22px] font-semibold mt-8 mb-2">
								{isGoalPrize
									? t('winPrize.gongxiText')
									: t('winPrize.noGoalText')}
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
										? t('winPrize.toGain')
										: `${t('winPrize.onceAgain')} ${localStorage.getItem(
												'snow-draw-count'
										  )} ${t('winPrize.count')}`}
								</div>
								{canShowAddAddress.current && (
									<div className=" text-sm text-center mt-4 text-[#999999]">
										{t('winPrize.bindAppText')}
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</Overlay>
		</>
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
		// @ts-ignore
		document.getElementById('jinbi').muted = false
		if (isApplePrize) {
			setBoxShow(true)
			setModalShow(false)
			// setTimeout(() => {
			// 	setBoxShow(false)
			// 	setFlowerShow(true)
			// 	// @ts-ignore
			// 	audioRef?.current?.play?.()
			// 	setTimeout(() => {
			// 		setFlowerShow(false)
			// 	}, 4400)
			// }, 1000)
		} else {
			setModalShow(true)
		}
	}

	return { winNode: node, showWinNode }
}
