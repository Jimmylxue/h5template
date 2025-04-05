import comTitle from '@/assets/img/common/comTitle.png'
import otherTag from '@/assets/img/common/otherTag.png'
import avatar1 from '@/assets/img/common/avatar1.png'
import avatar2 from '@/assets/img/common/avatar2.png'
import { useTranslation } from 'react-i18next'

export function LuckAbout() {
	const { t } = useTranslation()
	return (
		<div className="px-4">
			<div className="  w-full bg-gradient-to-b from-[#f7ded3] to-[#eea6f7] pt-[80px] px-4 pb-6">
				<div className=" bg-[#faeaee] w-full py-4 rounded-xl bg-gradient-to-tr from-[#fbeaef] to-[#eee4fb]">
					<div className=" flex items-start">
						<div className=" size-[8px] bg-[#B69EFA] rounded-full flex-shrink-0 mt-2 mx-2"></div>
						<div className=" text-sm">{t('luck2.text1')}</div>
					</div>

					<div className=" flex items-start mt-4">
						<div className=" size-[8px] bg-[#B69EFA] rounded-full flex-shrink-0 mt-2 mx-2"></div>
						<div className=" text-sm">{t('luck2.text2')}</div>
					</div>
				</div>

				<div className=" w-full bg-white px-2 pt-10 pb-4 mt-8 relative">
					<div className=" w-[150px] h-[40px] absolute left-1/2 -translate-x-1/2 -top-[10px] flex justify-center items-center">
						<img src={comTitle} alt="" className=" absolute" />
						<div className=" absolute text-white text-base">
							{t('luck2.goodIntroTitle')}
						</div>
					</div>

					<div className=" size-[80px] absolute -top-6">
						<img src={otherTag} className=" w-full h-full" alt="" />
					</div>

					<div className="bg-[#fef7fe] py-3 flex justify-center items-center relative mt-8 text-sm">
						<div>{t('luck2.goodIntroSubDetail1')}</div>
						<div className=" absolute text-white px-4 py-1 rounded-2xl bg-[#ca8fe8] -top-6">
							{t('luck2.goodIntroSubTitle1')}
						</div>
					</div>

					<div className="bg-[#fef7fe] py-3 flex justify-center items-center relative px-2 mt-10 text-sm">
						<div>{t('luck2.goodIntroSubDetail2')}</div>
						<div className=" absolute text-white px-4 py-1 rounded-2xl bg-[#ca8fe8] -top-6">
							{t('luck2.goodIntroSubTitle2')}
						</div>
					</div>
				</div>

				<div className=" w-full bg-white px-2 text-sm pt-10 pb-2 relative mt-8">
					<div className=" w-[150px] h-[40px] absolute left-1/2 -translate-x-1/2 -top-[10px] flex justify-center items-center">
						<img src={comTitle} alt="" className=" absolute" />
						<div className=" absolute text-white text-base">
							{t('luck2.ruleTitle')}
						</div>
					</div>

					<div className=" bg-[#fef7fe] px-2 py-3">
						<span className=" text-[#825FD2]">{t('luck2.ruleColorText1')}</span>
						<span>{t('luck2.ruleText1')}</span>
					</div>

					<div className=" bg-[#fef7fe] px-2 py-3 mt-4">
						<span className=" text-[#825FD2]">{t('luck2.ruleColorText2')}</span>
						<span>{t('luck2.ruleText2')}</span>
					</div>

					<div className=" bg-[#fef7fe] px-2 py-3 mt-4">
						<span className=" text-[#825FD2]">{t('luck2.ruleColorText3')}</span>
						<span>{t('luck2.ruleText3')}</span>
					</div>

					<div className=" px-2 mt-4 mb-2">{t('luck2.ruleOther')}</div>
				</div>

				<div className=" w-full bg-gradient-to-br from-[#f7e1d5] to-[#fffefe] rounded-2xl pt-2 pb-4 mt-6">
					<div className=" flex justify-center relative">
						<div className=" relative z-10">{t('luck2.payTitle')}</div>
						<div className=" absolute bg-[#f09d4a] w-28 h-2 bottom-[1px] rounded-lg"></div>
					</div>

					<div className=" flex px-4 text-sm mt-2">
						<div className=" size-[8px] rounded-full bg-[#b29ff4] flex-shrink-0 mt-2 mr-2"></div>
						<div>
							<span className=" text-[#825FD2]">
								{t('luck2.payColorText1')}
							</span>
							<span>{t('luck2.payText1')}</span>
						</div>
					</div>

					<div className=" flex px-4 text-sm mt-4">
						<div className=" size-[8px] rounded-full bg-[#b29ff4] flex-shrink-0 mt-2 mr-2"></div>
						<div>
							<span className=" text-[#825FD2]">
								{t('luck2.payColorText2')}
							</span>
							<span>{t('luck2.payText2')}</span>
						</div>
					</div>
				</div>

				<div className=" w-full bg-white mt-8 px-2 text-sm pt-10 pb-4 relative">
					<div className=" w-[150px] h-[40px] absolute left-1/2 -translate-x-1/2 -top-[10px] flex justify-center items-center">
						<img src={comTitle} alt="" className=" absolute" />
						<div className=" absolute text-white text-base">
							{t('luck2.noticeTitle')}
						</div>
					</div>

					<div className=" bg-[#fef7fe] px-2 py-3">
						<span>{t('luck2.noticeText1')}</span>
					</div>

					<div className=" bg-[#fef7fe] px-2 py-3 mt-4">
						<span>{t('luck2.noticeText2')}</span>
					</div>

					<div className=" bg-[#fef7fe] px-2 py-3 mt-4">
						<span>{t('luck2.noticeText3')}</span>
					</div>
				</div>

				<div className=" w-full bg-white mt-4 text-sm px-2 pt-8 pb-4 relative">
					<div className=" size-[80px] absolute -top-6 right-2">
						<img src={otherTag} className=" w-full h-full" alt="" />
					</div>

					<div className=" flex justify-center relative">
						<div className=" relative z-10">{t('luck2.userTitle')}</div>
						<div className=" absolute bg-[#cfb9f7] w-28 h-2 bottom-[1px] rounded-xl"></div>
					</div>

					<div className=" bg-[#fef7fe] px-2 py-3 mt-2">
						<div className=" flex items-center">
							<img src={avatar1} className=" size-[40px] rounded-full" alt="" />
							<div className=" text-lg ml-2">{t('luck2.user1Name')}</div>
						</div>
						<div className=" mt-2">{t('luck2.userText1')}</div>
					</div>

					<div className=" bg-[#fef7fe] px-2 py-3 mt-2">
						<div className=" flex items-center">
							<img src={avatar2} className=" size-[40px] rounded-full" alt="" />
							<div className=" text-lg ml-2">{t('luck2.user2Name')}</div>
						</div>
						<div className=" mt-2">{t('luck2.userText2')}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
