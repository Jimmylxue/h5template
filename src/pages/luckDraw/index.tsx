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
import jiaocheng from '../../assets/img/jiaocheng.png'
import { useBindDialog } from './component/useBindDialog'
import music from '../../assets/video/music.mp3'
import jinbi from '@/assets/video/jinbi.mp3'
import { useTranslation } from 'react-i18next'
import { LuckDrawBlocks } from '../../lang/langOtherConfig'
import inputBg from '@/assets/img/inputBg.png'
import { RewardList } from './component/RewardList'
import { useCheckLink, useUpdateLink, useUploadAddToCart } from '@/api/address'
import { useFbData } from '@/hooks/useFb'
import { useConfirmInput } from './component/ConfirmInput'

const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en' | 'xjp' | 'tai'
const memberCodeLength = Number(import.meta.env.VITE_APP_MEMBER_CODE_LENGTH)

const bindMemberFirst = import.meta.env.VITE_APP_FIRST_BIND === 'true'

/**
 * 是否采用后端的临时链接模式
 */
const useTempLink = import.meta.env.VITE_APP_USE_TEMP_Link === 'true'

/**
 * 是否是使用后端上传 pix 像素点
 */
const useBackUploadPix = import.meta.env.VITE_APP_USE_BACK_UPLOAD_PIX === 'true'

/**
 * 绑定会员码是否需要确认弹窗
 */
const useBindMemberConfirm =
	import.meta.env.VITE_APP_USE_BIND_MEMBER_CONFIRM === 'true'

const isNotZh = lang !== 'zh'

export function LuckDraw() {
	const myLucky = useRef<any>()
	const navigate = useNavigate()
	const location = useLocation()

	const { t } = useTranslation()

	const { fbc, fbp } = useFbData()

	const { node: confirmInput, showConfirm } = useConfirmInput()

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
	 * 是否是未被消费过的链接
	 */
	const { data: isAvailableTempLink } = useCheckLink({
		queryKey: ['checkLink'],
		params: {
			linkCode: shareMemberCode!,
		},
		enabled: !!shareMemberCode && useTempLink,
	})

	const { mutateAsync: updateTempLink } = useUpdateLink({
		onSuccess: () => {},
	})

	/**
	 * 是否是 抽不中中手机的链接
	 *
	 * - 如果是采用 临时链接 的模式，则只有未消费过的临时链接才可抽中手机
	 *
	 * - 如果采用 非临时链接 的模式，则只有判断链接上是否有被会员码来进行判断（链接上的会员码与本身的会员码是否相同）
	 *
	 */
	const isNotAvailableLink = useMemo(() => {
		if (useTempLink) {
			return !!(shareMemberCode && !isAvailableTempLink)
		}
		if (!shareMemberCode) {
			return false
		}
		return shareMemberCode !== (inviteCode || '')
	}, [shareMemberCode, inviteCode, useTempLink, isAvailableTempLink])

	console.log(
		'shareMemberCode',
		shareMemberCode,
		inviteCode,
		'isNotAvailableLink',
		isNotAvailableLink
	)

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

	const [hasRewardItem, setHasRewardItem] = useState<any>([])

	const { mutateAsync: uploadAddToCart } = useUploadAddToCart()

	const drawPrizeIndex = () => {
		const _hasDrawCount =
			Number(localStorage.getItem('snow-has-draw-count')) || 0
		if (isNotAvailableLink) {
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

	useEffect(() => {
		const couponHasReward = !!localStorage.getItem(`snow-has-prize-${1}`)
		const powerBankHasReward = !!localStorage.getItem(`snow-has-prize-${2}`)
		const iphoneHasReward = !!localStorage.getItem(`snow-has-prize-${6}`)
		setHasRewardItem({
			1: couponHasReward,
			2: powerBankHasReward,
			6: iphoneHasReward,
		})
	}, [isNotAvailableLink])

	console.log('snowHas', hasRewardItem)

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
		audioRef.current.volume = 0.3
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
		<div
			className={classNames(' w-screen ', {
				'bg-[#efe3ce]': ['en'].includes(lang),
				'bg-[#DFCBFD]': ['xjp', 'zh', 'tai'].includes(lang),
			})}
		>
			{/* <img src={bgTop} className=" h-[250px] w-full" alt="" /> */}
			<div className=" relative">
				<img src={bgTop} className=" h-[338px] w-full" alt="" />
				<div
					className={classNames(
						' text-center  text-md font-semibold mb-3 absolute bottom-3 w-full left-0',
						{
							'text-[#cb4664]': ['en', 'xjp'].includes(lang),
							'text-white': ['xjp', 'zh', 'tai'].includes(lang),
						}
					)}
				>
					{t('luckDraw.drawCount_before')}（{drawCount}）
					{t('luckDraw.drawCount_after')}
				</div>
			</div>

			<div className=" py-6 -mt-6 ">
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
								background: '#9982E3',
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
						onEnd={async (prize: any) => {
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
								const isLastGift = isNotAvailableLink
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
													setTimeout(async () => {
														showBindDialog()
														if (useTempLink) {
															if (!!shareMemberCode) {
																await updateTempLink({
																	linkCode: shareMemberCode!,
																})
															}
														} else {
															if (!bindMemberFirst) {
																navigate(
																	`/luck?shareMemberCode=15120dz&subSite=${
																		subSite || 0
																	}`,
																	{
																		replace: true,
																	}
																)
															}
														}
													}, 800)
												}, 300)
											} else {
												startDraw()
											}
										},
									},
									isNotAvailableLink
										? isGoalPrize
										: newRewards?.length === 1
										? true
										: false
								)
							}, 800)

							/**
							 * fb事件绑定
							 */
							if (id === 6) {
								if (useBackUploadPix) {
									await uploadAddToCart({ fbc, fbp })
								} else {
									fbq('track', 'AddToCart')
								}
							}
						}}
					></LuckyGrid>
				</div>

				<RewardList
					hasDrawPrizeIds={hasDrawPrizeIds}
					hasRewardItem={hasRewardItem}
					hasUploadDownloadImage={hasUploadDownloadImage}
					isNotAvailableLink={isNotAvailableLink}
					updateRewardItems={params => {
						setHasRewardItem(params)
					}}
				/>

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
											if (useBindMemberConfirm) {
												showConfirm({
													memberCode: inputValue,
													onConfirm: () => {
														Toast.info(t('luckDraw.bindMemberCodeSuccess'))

														if (!isNotAvailableLink && bindMemberFirst) {
															if (useTempLink) {
																navigate(`/luck?subSite=${subSite || 0}`, {
																	replace: true,
																})
															} else {
																navigate(
																	`/luck?shareMemberCode=${inputValue}&subSite=${
																		subSite || 0
																	}`,
																	{
																		replace: true,
																	}
																)
															}
														}

														setInviteCode(inputValue)
														setHasUploadDownloadImage(true)
													},
												})
											} else {
												Toast.info(t('luckDraw.bindMemberCodeSuccess'))
												if (!isNotAvailableLink && bindMemberFirst) {
													if (useTempLink) {
														navigate(`/luck?subSite=${subSite || 0}`, {
															replace: true,
														})
													} else {
														navigate(
															`/luck?shareMemberCode=${inputValue}&subSite=${
																subSite || 0
															}`,
															{
																replace: true,
															}
														)
													}
												}
												setInviteCode(inputValue)
												setHasUploadDownloadImage(true)
											}
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
			{useBindMemberConfirm && confirmInput}
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
