import { modalTitle } from '@/assets/index'
import classNames from 'classnames'
import { useMemo } from 'react'
import { PrizeList } from '../const'
import { useTranslation } from 'react-i18next'
import { addGlowEffect } from '../core'
import { Toast } from 'react-vant'
import { useLocation, useNavigate } from 'react-router-dom'
import { ChatLineAbout } from './ChatLineAbout'
import { useGainCouponNode } from './useGainCoupon'

const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'
const isNotZh = lang !== 'zh'

/**
 * 是否需要优先绑定会员码
 *  true:
 * 		- 绑定会员码后才可领取奖品
 * 		- 绑定后 分享链接特殊处理 -> 分享的只能抽中券
 * 	false:
 * 		- 抽中iphone后 才领取奖品
 * 		- 抽中iphone后 分享链接特殊处理，只能抽中优惠券
 */
const bindMemberFirst = import.meta.env.VITE_APP_FIRST_BIND === 'true'

type TProps = {
	hasDrawPrizeIds?: number[]
	hasRewardItem: any
	hasUploadDownloadImage?: boolean
	isComingByShare: boolean
	updateRewardItems: (params: any) => void
}

export function RewardList({
	hasDrawPrizeIds,
	hasRewardItem,
	hasUploadDownloadImage,
	isComingByShare,
	updateRewardItems,
}: TProps) {
	const { t } = useTranslation()

	const navigate = useNavigate()
	const location = useLocation()

	const { node: gainCouponNode, showGain, closeGain } = useGainCouponNode()

	const rewardList = useMemo(() => {
		return PrizeList.filter(item => hasDrawPrizeIds?.includes(item.id)) || []
	}, [hasDrawPrizeIds])

	const showLineAbout = useMemo(() => {
		/**
		 * id 为1 的券  说明是使用分享链接中的奖
		 */
		const isCouponShare = rewardList.find(reward => reward.id === 1)
		if (isCouponShare) {
			return hasRewardItem['1'] === true
		}
		return hasRewardItem['2'] === true && hasRewardItem['6'] === true
	}, [hasRewardItem, rewardList])

	const query = new URLSearchParams(location.search)
	const subSite = query.get('subSite')

	return (
		<>
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
						// if (index === 1) {
						// 	noGain = !(hasRewardItem[1] && !hasRewardItem[2])
						// } else {
						// 	noGain = isComingByShare !!hasRewardItem[0]
						// }
						if (index === 0) {
							noGain = !!hasRewardItem[reward.id]
						} else {
							noGain =
								!hasRewardItem['2'] ||
								(!!hasRewardItem['2'] && hasRewardItem[reward.id])
						}

						return (
							<div
								key={index}
								id={`reward-${index}`}
								className=" flex justify-between items-center text-[#333] py-2 text-sm"
							>
								<div className=" w-3/4 text-xs flex justify-start items-center pl-2">
									<img src={reward.giftLogo} className=" size-[50px]" alt="" />
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
										console.log('isComingByShare', isComingByShare, reward)
										if (bindMemberFirst && !hasUploadDownloadImage) {
											addGlowEffect('memberCodeInput')
											Toast.info(t('luckDraw.pleaseInputTreeMemberCode'))
											return
										}
										if (reward.id === 1) {
											// 1 是优惠券 说明就是来自 分享链接
											localStorage.setItem(
												`snow-has-prize-${reward.id}`,
												'share_link_get_coupon'
											)
											showGain()
											setTimeout(() => {
												closeGain()
												addGlowEffect('bindKf')
												updateRewardItems({ 1: true })
												// setHasRewardItem([])
											}, 2000)
										} else {
											if (!hasRewardItem[reward.id]) {
												fbq(
													'trackCustom',
													index === 0 ? 'gainPowerBank' : 'gainIphone'
												)

												if (index === 1 && !hasRewardItem['2']) {
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
			{gainCouponNode}
		</>
	)
}
