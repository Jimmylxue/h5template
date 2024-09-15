// @ts-ignore
import { LuckyGrid } from '@lucky-canvas/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Dialog, Input, Toast } from 'react-vant'
import { useWinPrize } from './component/useWinPrize'
import { PrizeList } from './const'
import { useLocalStorageState } from 'ahooks'
import { cloneDeep } from 'lodash-es'
import { useLocation, useNavigate } from 'react-router-dom'
import { useVideoModal } from '../../components/VideoModal'
import { bgTop, drawBtn, modalTitle } from '@/assets/index'
import classNames from 'classnames'
import { ChatLineAbout } from './component/ChatLineAbout'
import jiaocheng from '../../assets/img/jiaocheng.png'
import { useBindDialog } from './component/useBindDialog'
import music from '../../assets/video/music.mp3'
import { addGlowEffect } from './core'
import { useGainCouponNode } from './component/useGainCoupon'
import jinbi from '@/assets/video/jinbi.mp3'
import { useTranslation } from 'react-i18next'
import { LuckDrawBlocks } from '../../lang/langOtherConfig'
import inputBg from '@/assets/img/inputBg.png'

const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'
const memberCodeLength = Number(import.meta.env.VITE_APP_MEMBER_CODE_LENGTH)

const isNotZh = lang !== 'zh'

export function LuckDraw() {
	const myLucky = useRef<any>()
	const navigate = useNavigate()
	const location = useLocation()

	const { t } = useTranslation()

	const query = new URLSearchParams(location.search)
	/**
	 * 链接上的分享用户的memberCode
	 */
	const shareMemberCode = query.get('shareMemberCode')

	const subSite = query.get('subSite')

	// console.log('isShareLink', isShareLink)

	const audioRef = useRef(null)

	const drawingRef = useRef<boolean>(false)

	/**
	 * 剩余抽奖次数
	 */
	const [drawCount, setDrawCount] = useLocalStorageState<number | undefined>(
		'snow-draw-count',
		{
			defaultValue: 3,
		}
	)

	/**
	 * 已经抽奖的次数
	 */
	const [_, setHasDrawCount] = useLocalStorageState<number | undefined>(
		'snow-has-draw-count',
		{
			defaultValue: 0,
		}
	)

	const [hasDrawPrizeIds, setHasDrawPrizeIds] = useLocalStorageState<number[]>(
		'snow-has-draw-prize-ids',
		{
			defaultValue: [],
		}
	)

	const [inviteCode, setInviteCode] = useLocalStorageState<string>(
		'snow-invite-code',
		{
			defaultValue: '',
		}
	)

	/**
	 * 是否是 分享 进入的页面
	 */
	// const isComingByShare = shareMemberCode !== inviteCode

	const isComingByShare = useMemo(() => {
		if (!shareMemberCode) {
			return false
		}
		return shareMemberCode !== (inviteCode || '')
	}, [shareMemberCode, inviteCode])

	console.log('shareMemberCode', shareMemberCode, inviteCode, isComingByShare)

	const inputRef = useRef<any>()

	/**
	 * 0未上传 1已上传
	 */
	const [hasUploadDownloadImage, setHasUploadDownloadImage] =
		useLocalStorageState<boolean | undefined>('snow-upload-download-image', {
			defaultValue: false,
		})

	const { winNode, showWinNode } = useWinPrize()

	const { videoNode, showVideo } = useVideoModal()

	const { bindDialogNode, showBindDialog } = useBindDialog()

	const { node: gainCouponNode, showGain, closeGain } = useGainCouponNode()

	const [hasRewardItem, setHasRewardItem] = useState([false, false])

	const rewardList = useMemo(() => {
		return PrizeList.filter(item => hasDrawPrizeIds?.includes(item.id)) || []
	}, [hasDrawPrizeIds])

	const drawPrizeIndex = () => {
		const _hasDrawCount =
			Number(localStorage.getItem('snow-has-draw-count')) || 0
		if (isComingByShare) {
			if (_hasDrawCount === 0) {
				return 4
			} else if (_hasDrawCount === 1) {
				return 4
			} else {
				// Nu Nu 优惠券
				return 0
			}
		} else {
			if (_hasDrawCount === 0) {
				// 谢谢惠顾
				return 4
			} else if (_hasDrawCount === 1) {
				// 充电宝
				return 1
			} else {
				// 一折iphone
				return 5
			}
		}
	}

	const showLineAbout = useMemo(() => {
		if (isComingByShare) {
			return hasRewardItem[0] === true
		}
		return hasRewardItem[0] === true && hasRewardItem[1] === true
	}, [hasRewardItem, isComingByShare])

	useEffect(() => {
		if (isComingByShare) {
			const powerBankHasReward = !!localStorage.getItem(`snow-has-prize-${1}`)
			setHasRewardItem([powerBankHasReward, false])
		} else {
			const powerBankHasReward = !!localStorage.getItem(`snow-has-prize-${2}`)
			const iphoneHasReward = !!localStorage.getItem(`snow-has-prize-${6}`)
			setHasRewardItem([powerBankHasReward, iphoneHasReward])
		}
	}, [isComingByShare])

	const startDraw = () => {
		if (drawingRef.current) {
			return
		}
		if (drawCount === 0) {
			return
		}
		// @ts-ignore
		console.log('click draw')
		fbq('trackCustom', 'luckDraw')
		/**
		 * 中奖的奖品
		 * 第一次 感谢惠顾  第二次 充电宝 第三次必中 一折苹果手机
		 */

		setDrawCount(pre => Number(pre) - 1)
		// 点击抽奖按钮会触发star回调
		// @ts-ignore
		audioRef?.current?.play?.()
		myLucky.current.play()
		const index = drawPrizeIndex()
		if (index === 5) {
			// @ts-ignore
			document.getElementById('jinbi').muted = true
			// @ts-ignore
			document.getElementById('jinbi').play()
		}
		setTimeout(() => {
			myLucky.current.stop(index)
		}, 1500)
		drawingRef.current = true
	}

	const scrollToTask = () => {
		document
			.getElementById('taskContainer')
			?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className=" w-screen bg-[#efe3ce]">
			<img src={bgTop} className=" h-[250px] w-full" alt="" />
			<div className=" py-6 -mt-6 ">
				<div className=" text-center text-[#cb4664] text-md font-semibold mb-3">
					{t('luckDraw.drawCount_before')}（{drawCount}）
					{t('luckDraw.drawCount_after')}
				</div>
				{/* <div
					className=" text-center text-sm mb-2 text-blue-400 underline"
					onClick={() => {
						document
							.getElementById('taskContainer')
							?.scrollIntoView({ behavior: 'smooth' })
					}}
				>
					下載NU NUapp並綁定會員碼領取
				</div> */}

				<div className=" flex justify-center items-center">
					<LuckyGrid
						ref={myLucky}
						width="92vw"
						height="92vw"
						blocks={LuckDrawBlocks}
						prizes={PrizeList}
						buttons={[
							{
								x: 1,
								y: 1,
								background: '#eedb91',
								imgs: [
									{
										src: drawBtn,
										width: '102px',
										height: '102px',
										top: 1,
									},
								],
								borderRadius: 10,
							},
						]}
						defaultStyle={{
							background: '#b8c5f2',
						}}
						activeStyle={{
							background: '#ffefb3',
						}}
						onStart={startDraw}
						onEnd={(prize: any) => {
							const id = prize.id
							setHasDrawCount(pre => (pre || 0) + 1)
							/** id为5 是谢谢惠顾 */
							const isGoalPrize = prize.id !== 5
							setTimeout(() => {
								const newRewards = cloneDeep(hasDrawPrizeIds)
								if (isGoalPrize) {
									setHasDrawPrizeIds([...(newRewards || []), id])
								}
								/**
								 * 是否是最后一个礼品
								 */
								const isLastGift = isComingByShare
									? isGoalPrize
									: newRewards?.length === 1
								showWinNode(
									{
										img: prize.giftLogo,
										name: prize.name,
										id,
										onConfirm: () => {
											drawingRef.current = false
											if (isLastGift) {
												setTimeout(() => {
													scrollToTask()
													setTimeout(() => {
														showBindDialog()
													}, 800)
												}, 300)
											} else {
												startDraw()
											}
										},
									},
									isComingByShare
										? isGoalPrize
										: newRewards?.length === 1
										? true
										: false
								)
							}, 800)
						}}
					></LuckyGrid>
				</div>
				<div className=" px-4 relative mt-6">
					<div
						className={`absolute px-3 rounded -top-2  z-[1] bg-contain bg-no-repeat text-white flex justify-center items-center text-xl left-1/2 -translate-x-1/2`}
					>
						<img src={modalTitle} className="w-[164px] h-[43px] " alt="" />
						<div
							className={classNames('absolute', {
								'text-base': isNotZh,
							})}
						>
							{t('luckDraw.prizeRecord')}
						</div>
					</div>
					<div className=" bg-[#fff] mx-auto mt-4 relative pt-10 pb-4 border px-4 text-[#333] rounded-2xl">
						<div className=" flex justify-between items-center py-2 mt-4 bg-[#F3F3F3] rounded-lg">
							<div className=" w-2/5 text-center">{t('luckDraw.prize')}</div>
							<div className=" w-[80px] text-center">
								{t('luckDraw.operator')}
							</div>
						</div>
						{rewardList.map((reward, index) => {
							// 上传了会员码 && 苹果的去领取 && 充电宝未领取
							/** noGain 表示不可领取 按钮置灰 */
							let noGain = false
							if (index === 1) {
								noGain = !(hasRewardItem[0] && !hasRewardItem[1])
							} else {
								noGain = !!hasRewardItem[0]
							}

							return (
								<div
									key={index}
									id={`reward-${index}`}
									className=" flex justify-between items-center text-[#333] py-2 text-sm"
								>
									<div className=" w-3/4 text-xs flex justify-start items-center pl-2">
										<img
											src={reward.giftLogo}
											className=" size-[50px]"
											alt=""
										/>
										{reward.giftName}
									</div>
									<div
										className={classNames(
											'w-[80px] h-[35px] bg-contain flex justify-center items-center',
											{
												"bg-[url('assets/img/canGain.png')]": !noGain,
												"bg-[url('assets/img/noGain.png')]": noGain,
												'text-[#905224]': !noGain,
												'text-[#B1B1B1]': noGain,
											}
										)}
										onClick={() => {
											if (!hasUploadDownloadImage) {
												addGlowEffect('memberCodeInput')
												Toast.info(t('luckDraw.pleaseInputTreeMemberCode'))
												return
											}
											if (isComingByShare) {
												localStorage.setItem(
													`snow-has-prize-${reward.id}`,
													'share_link_get_coupon'
												)
												showGain()
												setTimeout(() => {
													closeGain()
													addGlowEffect('bindKf')
													setHasRewardItem([true, false])
												}, 2000)
											} else {
												if (!hasRewardItem[index]) {
													fbq(
														'trackCustom',
														index === 0 ? 'gainPowerBank' : 'gainIphone'
													)

													if (index === 1 && !hasRewardItem[0]) {
														addGlowEffect('reward-0')
														// 领取苹果 但是充电宝还未领取
														Toast.info(t('luckDraw.gainFirst'))
														return
													}
													document.querySelector('html')!.scrollTop = 0 // document.getElementById('root')!.scrollTop = 0

													navigate(
														`/good?goodId=${reward.id}&subSite=${subSite || 0}`
													)
												}
											}
										}}
									>
										{!!hasRewardItem[index]
											? t('luckDraw.hasGain')
											: t('luckDraw.toGain')}
									</div>
								</div>
							)
						})}

						{showLineAbout && <ChatLineAbout />}
					</div>
				</div>

				<div className=" px-4 relative">
					<div
						id="taskContainer"
						className="bg-[#fff] mx-auto mt-4 relative pt-10 pb-2 border px-4 text-[#333] rounded-2xl"
					>
						<div
							className={`absolute px-3 rounded -top-2  z-[1] bg-contain bg-no-repeat text-white flex justify-center items-center text-xl left-1/2 -translate-x-1/2`}
						>
							<img src={modalTitle} className="w-[164px] h-[43px] " alt="" />
							<div
								className={classNames('absolute', {
									'text-base': isNotZh,
								})}
							>
								{t('luckDraw.bindMember')}
							</div>
						</div>
						<div className=" flex justify-between items-center text-white py-2 text-sm relative my-6">
							<img src={inputBg} alt="" className=" absolute" />
							<div className=" absolute w-full h-[55px] text-center flex justify-end items-center px-4">
								<input
									type="text"
									id="memberCodeInput"
									ref={inputRef}
									defaultValue={inviteCode}
									disabled={hasUploadDownloadImage}
									className=" w-full flex-shrink text-black bg-transparent "
									style={{
										padding: '5px 10px',
									}}
									placeholder={t('luckDraw.inputMemberPlaceholder')}
								/>
								<div
									className="flex-shrink-0 w-[80px] h-[35px] bg-contain flex justify-center items-center bg-[url('assets/img/canGain.png')] text-[#905224]"
									onClick={() => {
										fbq('trackCustom', 'bindMemberCode')
										if (!inviteCode) {
											// 绑定逻辑
											const inputValue = inputRef.current.value
											console.log('inputValue', inputValue)
											if (!inputValue) {
												Toast.info(t('luckDraw.pleaseInputText'))
												return
											}
											if (String(inputValue).length < memberCodeLength) {
												Toast.info(t('luckDraw.pleaseInputTreeMemberCode'))
												return
											}
											Toast.info(t('luckDraw.bindMemberCodeSuccess'))
											if (!isComingByShare) {
												navigate(`/luck?shareMemberCode=${inputValue}`, {
													replace: true,
												})
											}
											setInviteCode(inputValue)
											setHasUploadDownloadImage(true)
										} else {
											// 修改逻辑
											let temp = inviteCode || ''
											Dialog.alert({
												title: t('luckDraw.inputMemberCodeText'),
												closeOnClickOverlay: true,
												message: (
													<div>
														<p className=" mb-2">
															{t('luckDraw.bindModalTitle')}
														</p>
														<div className=" mt-4">
															<Input
																onChange={text => {
																	temp = text
																}}
																defaultValue={inviteCode}
																placeholder={t(
																	'luckDraw.inputMemberPlaceholder'
																)}
																clearable
															/>
														</div>
													</div>
												),
												onClosed: () => console.log('onClosed'),
												onConfirm: () => {
													if (!temp) {
														Toast.info(t('luckDraw.pleaseInputText'))
														return
													}
													if (temp.length < memberCodeLength) {
														Toast.info(t('luckDraw.pleaseInputTreeMemberCode'))
														return
													}
													setInviteCode(temp)
													inputRef.current.value = temp
													Toast.info(t('luckDraw.changeSuccessText'))
												},
												theme: 'round-button',
												confirmButtonText: t('luckDraw.confirmText'),
											})
										}
									}}
								>
									{inviteCode ? t('luckDraw.editText') : t('luckDraw.bindText')}
								</div>
							</div>
						</div>
						<div
							className="text-sm mb-2 text-[#E94A73] underline flex justify-center items-center mt-2"
							onClick={() => {
								fbq('trackCustom', 'seeVideo')
								showVideo()
							}}
						>
							<div
								id="seeJiaoCheng"
								className=" flex justify-center items-center px-2 py-1"
							>
								<img src={jiaocheng} className=" size-[21px] mr-2" alt="" />
								{t('luckDraw.seeVideo')}
							</div>
						</div>
					</div>
				</div>
			</div>
			{videoNode}
			{winNode}
			{bindDialogNode}
			{gainCouponNode}
			<audio
				className=" absolute -left-[300px] -top-[1000px]"
				src={music}
				ref={audioRef}
			/>
			<audio
				id="jinbi"
				className=" absolute -left-[400px] -top-[1000px]"
				src={jinbi}
				autoPlay={false}
			/>
		</div>
	)
}
