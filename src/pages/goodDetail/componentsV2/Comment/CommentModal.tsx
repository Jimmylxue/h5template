import { Divider, Popup } from 'react-vant'
import safe2Icon from '@/assets/img/goodDetail/safe2Icon.png'
import userAvatar from '@/assets/img/header.png'
import saveIcon from '@/assets/img/goodDetail/saveIcon.png'
import imgIcon from '@/assets/img/goodDetail/imgIcon.png'
import { useTranslation } from 'react-i18next'
import { useCurrentGood } from '../../core/useCurrentGood'

type TProps = {
	visible: boolean
	onCLose: () => void
}

export function CommentModal({ visible, onCLose }: TProps) {
	const { t } = useTranslation()

	const { good } = useCurrentGood()

	return (
		<Popup
			visible={visible}
			closeable
			title="评价"
			description={
				<div className=" pb-4 h-[740px] overflow-y-auto no-scrollbar">
					<div className=" bg-[#F6F2FF] w-full flex items-center px-1 rounded">
						<div>
							<img className=" w-[11px] h-[13px]" src={safe2Icon} alt="" />
						</div>
						<div className=" ml-1">{t('goodDetail.realCommentText')}</div>
					</div>
					<div className=" flex items-center">
						<div className=" text-lg text-[#333]">5.0</div>
						<div className=" flex items-center font-bold">
							<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
							<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
							<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
							<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
							<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
						</div>
						<div className=" text-[13px] text-[#333] ml-1">(71)</div>
					</div>
					<div className=" bg-[#FFF3F1] text-[13px] flex items-center w-fit px-1 rounded mt-2">
						<img src={imgIcon} className=" w-[14px] h-[13px]" alt="" />
						<div className=" ml-1 text-[#333333]">
							{t('goodDetail.phoneTextDesc')}
						</div>
					</div>

					{good?.comments?.map((item, index) => (
						<div className=" mt-4" key={index}>
							<div className=" flex items-center my-2">
								<div>
									<img src={userAvatar} className=" size-[45px]" alt="" />
								</div>
								<div className=" ml-2">
									<div className=" text-[#333333] font-bold text-[13px]">
										{item.userName}
									</div>
									<div className=" text-[11px] text-[#999999]">
										{/* @ts-ignore */}
										{item.descText}
									</div>
								</div>
							</div>
							<div className="text-[#333333] text-[13px]">{item.text}</div>
							<div className=" flex items-center mt-1">
								<div className=" flex items-center">
									<img
										src={saveIcon}
										className=" w-[13px] h-[11px] ml-1"
										alt=""
									/>
									<img
										src={saveIcon}
										className=" w-[13px] h-[11px] ml-1"
										alt=""
									/>
									<img
										src={saveIcon}
										className=" w-[13px] h-[11px] ml-1"
										alt=""
									/>
									<img
										src={saveIcon}
										className=" w-[13px] h-[11px] ml-1"
										alt=""
									/>
									<img
										src={saveIcon}
										className=" w-[13px] h-[11px] ml-1"
										alt=""
									/>
								</div>
								<div className=" ml-2 text-[13px] text-[#999999] ">
									{item.userName}
								</div>
							</div>
							<div className=" flex justify-between items-center mt-2 flex-wrap">
								{item.imgs?.map?.((it, idx) => (
									<div key={idx} className=" size-[105px] rounded mb-2">
										<img src={it} className=" w-full h-full" alt="" />
									</div>
								))}
								<div className=" w-[105px] rounded "></div>
							</div>
						</div>
					))}
					<Divider>更多评论信息请到App中查看</Divider>
				</div>
			}
			position="bottom"
			round
			style={{
				height: '800px',
			}}
			onClose={onCLose}
		/>
	)
}
