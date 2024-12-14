import { useTranslation } from 'react-i18next'
import { Toast } from 'react-vant'
import pod1 from '@/assets/img/common/pod1.png'
import pod2 from '@/assets/img/common/pod2.png'
import pod3 from '@/assets/img/common/pod3.png'
import pod4 from '@/assets/img/common/pod4.png'
import pod5 from '@/assets/img/common/pod5.png'
import pod6 from '@/assets/img/common/pod6.png'
import pod7 from '@/assets/img/common/pod7.png'
import pod8 from '@/assets/img/common/pod8.png'
import pod9 from '@/assets/img/common/pod9.png'
import pod10 from '@/assets/img/common/pod10.png'
import otherTag from '@/assets/img/common/otherTag.png'
import { disPrice1, disPrice2, disPrice3 } from '@/assets/luck2'

export function OtherProduct() {
	const { t } = useTranslation()

	const jumpApp = () => {
		Toast.info(t('luck2.jumpApp'))
	}

	return (
		<div>
			<div className="px-4">
				<div className="px-4 w-full pt-[80px] relative z-1 bg-gradient-to-br from-[#f7ded4] to-[#eea6f7] rounded-2xl pb-4">
					<div className=" w-full bg-[#fae4c2] rounded-2xl h-[80px] overflow-hidden flex ">
						<div className=" w-3/4 bg-[#fef9f9] h-full rounded-tr-[45px] flex justify-between items-center px-2">
							<div className=" relative flex flex-col justify-center items-center ">
								<div className="text-xs absolute -top-2 left-1">
									{t('luck2.priceUnit')}
								</div>
								<div className=" text-3xl font-semibold">
									{t('luck2.coupon1Price')}
								</div>
								<div className=" text-xs text-center leading-3">
									{t('luck2.coupon1Desc')}
								</div>
							</div>
							<div className=" w-[2px] h-8 bg-[#fae4c2]"></div>
							<div className=" relative flex flex-col justify-center items-center ">
								<div className="text-xs absolute -top-2 left-1">
									{t('luck2.priceUnit')}
								</div>
								<div className=" text-3xl font-semibold">
									{t('luck2.coupon2Price')}
								</div>
								<div className=" text-xs text-center leading-3">
									{t('luck2.coupon2Desc')}
								</div>
							</div>
							<div className=" w-[2px] h-8 bg-[#fae4c2]"></div>
							<div className=" relative flex flex-col justify-center items-center ">
								<div className="text-xs absolute -top-2 left-1">
									{t('luck2.priceUnit')}
								</div>
								<div className=" text-3xl font-semibold">
									{t('luck2.coupon3Price')}
								</div>
								<div className=" text-xs text-center leading-3">
									{t('luck2.coupon3Desc')}
								</div>
							</div>
						</div>
						<div
							className=" w-1/4 text-[#947947] pl-4 pr-4 flex justify-center items-center"
							onClick={jumpApp}
						>
							{t('luck2.addVip')}
						</div>
					</div>

					<div className=" flex justify-between mt-4">
						<div
							className=" w-[95px] h-[160px] bg-[#fef9f9] rounded-lg text-xs flex flex-col justify-center items-center pt-2 relative"
							onClick={jumpApp}
						>
							<div className=" text-center font-semibold">
								{t('luck2.prod1Name')}
							</div>
							<div className=" flex justify-center mt-2">
								<img className=" w-[70%]" src={pod1} alt="" />
							</div>
							<div className=" text-center text-[10px] text-[#9a8051] line-through">
								{t('luck2.prod1Origin')}
							</div>
							<div className=" flex justify-center items-center">
								<div className=" mt-2 text-[10px]">
									{t('luck2.nowPriceText')}
								</div>
								<div className=" text-2xl font-light">
									{t('luck2.prod1Now')}
								</div>
							</div>
							<img
								src={disPrice1}
								className=" absolute size-[38px] -left-4 top-4"
								alt=""
							/>
						</div>

						<div
							className=" w-[95px] h-[160px] bg-[#fef9f9] rounded-lg text-xs flex flex-col justify-center items-center pt-2 relative"
							onClick={jumpApp}
						>
							<div className=" text-center font-semibold">
								{t('luck2.prod2Name')}
							</div>
							<div className=" flex justify-center mt-2">
								<img className=" w-[55%]" src={pod2} alt="" />
							</div>
							<div className=" text-center text-[10px] text-[#9a8051] line-through">
								{t('luck2.prod2Origin')}
							</div>
							<div className=" flex justify-center items-center">
								<div className=" mt-2 text-[10px]">
									{t('luck2.nowPriceText')}
								</div>
								<div className=" text-2xl font-light">
									{t('luck2.prod2Now')}
								</div>
							</div>
							<img
								src={disPrice2}
								className=" absolute size-[38px] -left-4 top-4"
								alt=""
							/>
						</div>

						<div
							className=" w-[95px] h-[160px] bg-[#fef9f9] rounded-lg text-xs flex flex-col justify-center items-center pt-2 relative"
							onClick={jumpApp}
						>
							<div className=" text-center font-semibold">
								{t('luck2.prod3Name')}
							</div>
							<div className=" flex justify-center mt-2">
								<img className=" w-[70%]" src={pod3} alt="" />
							</div>
							<div className=" text-center text-[10px] text-[#9a8051] line-through">
								{t('luck2.prod3Origin')}
							</div>
							<div className=" flex justify-center items-center">
								<div className=" mt-2 text-[10px]">
									{t('luck2.nowPriceText')}
								</div>
								<div className=" text-2xl font-light">
									{t('luck2.prod3Now')}
								</div>
							</div>
							<img
								src={disPrice3}
								className=" absolute size-[38px] -left-4 top-4"
								alt=""
							/>
						</div>
					</div>

					<div className=" w-full h-[80px] bg-gradient-to-br from-[#fae9ee] to-[#ede3fb] rounded-xl flex items-center justify-between px-2 mt-4 relative">
						<img src={pod4} className=" w-[45%] flex-shrink-0" alt="" />
						<div className=" text-center px-2 font-semibold flex flex-col items-center">
							{t('luck2.gainProductText')}
							<div
								className=" text-[10px] bg-[#f9d9b6] text-[#88552e] flex w-fit px-4 py-1 rounded-2xl"
								onClick={jumpApp}
							>
								{t('luck2.gainBtnText')}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" px-4">
				<div className=" w-full bg-gradient-to-b from-[#f7e0d5] to-[#ddcdf9] rounded-2xl mt-4 px-2 pt-2">
					<div>{t('luck2.smartUse')}</div>

					<div className=" text-sm flex justify-between">
						<div
							className=" flex bg-white rounded-2xl justify-between px-2 w-[49%] py-4"
							onClick={jumpApp}
						>
							<img src={pod5} className="  w-[45%] flex flex-shrink-0" alt="" />
							<div className=" flex flex-col justify-center items-center">
								<div className=" text-2xl text-[#9f3cbb]">
									{t('luck2.smartUse1Price')}
								</div>
								<div className=" text-xs">{t('luck2.smartUse1Text')}</div>
							</div>
						</div>
						<div
							className=" flex bg-white rounded-2xl justify-between px-2 w-[49%] py-4 "
							onClick={jumpApp}
						>
							<img src={pod6} className="  w-[45%] flex flex-shrink-0" alt="" />
							<div className=" flex flex-col justify-center items-center">
								<div className=" text-2xl text-[#9f3cbb]">
									{t('luck2.smartUse2Price')}
								</div>
								<div className=" text-xs">{t('luck2.smartUse2Text')}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" px-4 text-sm flex justify-between mt-4">
				<div
					className=" bg-gradient-to-br from-[#d5d5f9] to-[#fefeff] w-[48%] p-3 rounded-2xl"
					onClick={jumpApp}
				>
					<div>
						<div className=" font-semibold">{t('luck2.miaosha1Text')}</div>
						<div>{t('luck2.miaosha1Time')}</div>
					</div>
					<img src={pod7} className=" w-full mt-2" alt="" />
				</div>
				<div className="w-[48%] flex flex-col justify-between">
					<div
						className=" relative bg-gradient-to-br from-[#d5d5f9] to-[#fefeff] py-3 rounded-2xl px-2"
						onClick={jumpApp}
					>
						<div className=" font-semibold">{t('luck2.miaosha2Text')}</div>
						<div>{t('luck2.miaosha2Time')}</div>
						<div className=" mt-4 leading-3">{t('luck2.miaosha2Desc')}</div>
						<img
							src={pod8}
							className=" absolute w-[42%] right-2 bottom-2"
							alt=""
						/>
					</div>
					<div
						className=" relative bg-gradient-to-br from-[#d5d5f9] to-[#fefeff] py-3 rounded-2xl px-2"
						onClick={jumpApp}
					>
						<div className=" font-semibold">{t('luck2.miaosha3Text')}</div>
						<div>{t('luck2.miaosha3Time')}</div>
						<div className=" mt-4 leading-3">{t('luck2.miaosha3Desc')}</div>
						<img
							src={pod9}
							className=" absolute w-[42%] right-2 bottom-2"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="px-4">
				<div className=" w-full bg-gradient-to-br from-[#f7e1d5] to-[#ffffff] py-1 pb-4 rounded-2xl mt-4 relative">
					<img
						src={otherTag}
						className=" w-[88px] h-[95px] absolute right-1 -top-8"
						alt=""
					/>

					<div className=" relative w-fit ml-4 mt-2 ">
						<div className=" relative z-10">{t('luck2.renqiTitle')}</div>
						<div className=" absolute w-full h-[4px] bg-[#cfb9f7] bottom-1"></div>
					</div>

					<div className=" w-[315px] h-[41px] flex justify-between mt-4 mx-auto">
						<div className=" w-1/2 h-full flex justify-center items-center bg-[#fffcfa] rounded-3xl">
							{t('luck2.inHome')}
						</div>
						<div className=" w-1/2 h-full flex justify-center items-center">
							{t('luck2.push')}
						</div>
					</div>

					<div className=" px-4 mt-4">
						<div className=" w-full text-sm flex flex-col justify-center items-center bg-gradient-to-r from-[#f1e7f9] to-[#f8e3e7] py-4">
							<div>{t('luck2.renqiComputer')}</div>
							<img src={pod10} className=" w-[50%] mt-4" alt="" />
						</div>
						<div className=" w-full h-[55px] bg-[#e173a3] flex">
							<div className=" w-1/2 rounded-br-3xl bg-[#fbedda] h-full flex items-center justify-center">
								<div className=" text-xs mt-2">
									{t('luck2.renqiNormalText')}{' '}
								</div>
								<div className=" text-2xl font-semibold">
									{t('luck2.renqiNormalPrice')}
								</div>
							</div>
							<div className=" w-1/2 flex items-center justify-center text-white">
								<div className=" text-xs mt-2">{t('luck2.renqiNowText')}</div>
								<div className=" text-2xl font-semibold">
									{t('luck2.renqiNowPrice')}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
