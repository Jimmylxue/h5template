import {
	other1,
	other2_1,
	other2_2,
	other2_3,
	other3,
	other4,
	other5_1,
	other5_2,
	other6_1,
	other6_2,
	other6_3,
	other7_1,
} from '@/assets/luck2'
import Tag2 from '@/assets/img/common/Tag2.png'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Toast } from 'react-vant'

const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en' | 'xjp' | 'tai'

export function OtherProduct() {
	const { t } = useTranslation()

	const jumpApp = () => {
		Toast.info(t('luck2.jumpApp'))
	}

	return (
		<div>
			<div className="px-4">
				<div className=" bg-[url('/src/assets/img/common/smallBg.png')] h-[460px] w-full bg-cover pt-[80px] relative z-1">
					<img
						src={other1}
						className="w-[315px] h-[78px] bg-red-200 mx-auto mt-2"
						alt=""
						onClick={jumpApp}
					/>

					<div className=" flex justify-center pr-4 mt-6 ">
						<img
							src={other2_1}
							className="w-[109px]"
							alt=""
							onClick={jumpApp}
						/>
						<img
							src={other2_2}
							className="w-[109px]"
							alt=""
							onClick={jumpApp}
						/>
						<img
							src={other2_3}
							className="w-[109px]"
							alt=""
							onClick={jumpApp}
						/>
					</div>
					{/* <div className="w-[315px] h-[162px] bg-red-200 mx-auto mt-5"></div> */}

					<img src={other3} className=" w-[315px] mx-auto mt-4" alt="" />

					<img
						src={other4}
						className=" absolute left-1/2 -translate-x-1/2 bottom-2 w-[96px]"
						alt=""
						onClick={jumpApp}
					/>
				</div>
			</div>

			<div className=" px-4">
				<div className=" bg-[url('/src/assets/taiImg/luck2/other5_bg.png')] h-[139px] w-full bg-cover mt-4 flex justify-between px-1 pt-10">
					<img
						src={other5_1}
						className="w-[163px] h-[87px]"
						alt=""
						onClick={jumpApp}
					/>
					<img
						src={other5_2}
						className="w-[163px] h-[87px]"
						alt=""
						onClick={jumpApp}
					/>
				</div>
			</div>

			<div className=" flex justify-between px-4 mt-2">
				<img
					src={other6_1}
					onClick={jumpApp}
					className=" w-[168px] h-[234px]"
					alt=""
				/>
				<div className=" flex flex-col justify-between">
					<img
						src={other6_2}
						onClick={jumpApp}
						className=" w-[168px] h-[113px]"
						alt=""
					/>
					<img
						src={other6_3}
						onClick={jumpApp}
						className=" w-[168px] h-[113px]"
						alt=""
					/>
				</div>
			</div>

			<div className="px-4">
				<div
					className={classNames(
						'h-[380px] w-full bg-cover pt-[50px] relative z-1 mt-6',
						{
							" bg-[url('/src/assets/taiImg/luck2/other7_bg.png')] ": [
								'tai',
							].includes(lang),
						}
					)}
				>
					<img
						src={Tag2}
						className=" w-[88px] h-[95px] absolute right-1 -top-8"
						alt=""
					/>

					<div className=" w-[315px] h-[41px] flex justify-between mt-4 mx-auto">
						<div className=" w-1/2 h-full flex justify-center items-center bg-[#fffcfa] rounded-3xl">
							{t('luck2.inHome')}
						</div>
						<div className=" w-1/2 h-full flex justify-center items-center">
							{t('luck2.push')}
						</div>
					</div>

					<img
						src={other7_1}
						className=" w-[308px] h-[242px] mx-auto mt-4"
						alt=""
						onClick={jumpApp}
					/>
				</div>
			</div>
		</div>
	)
}
