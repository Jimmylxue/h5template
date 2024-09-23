import { useState } from 'react'
import saveIcon from '@/assets/img/goodDetail/saveIcon.png'
import imgIcon from '@/assets/img/goodDetail/imgIcon.png'
import right from '@/assets/img/goodDetail/right.png'
import { useTranslation } from 'react-i18next'
import { useCurrentGood } from '../../core/useCurrentGood'
import { CommentModal } from './CommentModal'

export function Comment() {
	const { t } = useTranslation()
	const [visible, setVisible] = useState<boolean>(false)

	const { good } = useCurrentGood()

	return (
		<>
			<div className=" mt-2 bg-white py-3 px-2">
				<div className=" flex w-full justify-between items-center ">
					<div className=" flex items-center">
						<div className=" w-[4px] h-[14px] bg-[#FE4025] rounded"></div>
						<div className=" text-sm font-bold ml-2">
							{t('goodDetail.commentText')}
						</div>
					</div>
					<div
						className=" flex items-center"
						onClick={() => {
							setVisible(true)
						}}
					>
						<div className=" text-sm text-[#333333]">5</div>
						<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
						<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
						<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
						<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
						<img src={saveIcon} className=" w-[13px] h-[11px] ml-1" alt="" />
						<img className=" w-[6px] h-[10px] ml-1" src={right} alt="" />
					</div>
				</div>
				<div className=" bg-[#FFF3F1] text-[13px] flex items-center w-fit px-1 rounded mt-2">
					<img src={imgIcon} className=" w-[14px] h-[13px]" alt="" />
					<div className=" ml-1 text-[#333333]">
						{t('goodDetail.phoneTextDesc')}
					</div>
				</div>
				{good?.comments?.slice(0, 2)?.map((item, index) => (
					<div className=" flex justify-between items-center mt-4" key={index}>
						<div className=" pr-2">
							<div className=" text-[13px] text-[#333] leading-4 font-light">
								{item.text}
							</div>
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
						</div>
						<div className=" flex flex-shrink-0 items-center">
							{item.imgs?.slice(0, 2)?.map((it, idx) => (
								<div
									key={idx}
									className=" size-[63px] bg-sky-300 rounded overflow-hidden ml-2"
								>
									<img src={it} alt="" className=" w-full h-full" />
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			<CommentModal
				visible={visible}
				onCLose={() => {
					setVisible(false)
				}}
			/>
		</>
	)
}
