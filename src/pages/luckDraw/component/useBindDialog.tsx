import { useState } from 'react'
import { Overlay } from 'react-vant'
import star from '../../../assets/img/star.png'
import codeImage from '../../../assets/img/codeImage.png'
import { addGlowEffect } from '../core'
import { useTranslation } from 'react-i18next'
import { xiajiText, bindLogo, smallText } from '@/assets/index'

export function useBindDialog() {
	const { t } = useTranslation()
	const [show, setShow] = useState<boolean>(false)

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
			<div className="bg-[url('/src/assets/img/dialogBg.png')] bg-[length:100%_100%] bg-no-repeat w-4/5 pt-10 rounded-lg">
				<div className=" flex justify-center relative">
					<img src={xiajiText} width={180} height={65} alt="" />
					<img
						src={star}
						width={47}
						height={44}
						className=" absolute left-[20px] top-2"
						alt=""
					/>
				</div>
				<div className=" flex mt-6 justify-center">
					<img src={smallText} width={250} height={15} alt="" />
				</div>

				<div className=" relative z-[1] mt-6 flex flex-col justify-center items-center">
					<img width={124} height={143} src={codeImage} />
				</div>
				<div className="z-[2] relative bg-[url('/src/assets/img/mengban.png')] bg-[length:100%_100%] h-[162px] bg-no-repeat flex flex-col justify-center items-center -mt-12">
					<div
						className="bg-[url('/src/assets/img/bigBtnBg.png')] w-[254px] h-[54px] bg-cover flex justify-center items-center text-white text-xl mt-10"
						onClick={() => {
							setShow(false)
							setTimeout(() => {
								addGlowEffect('memberCodeInput')
								addGlowEffect('seeJiaoCheng')
							}, 200)
						}}
					>
						{t('bindDialog.toBind')}
					</div>
					<img
						className=" mt-4"
						src={bindLogo}
						width={136}
						height={22}
						alt=""
					/>
				</div>
			</div>
		</Overlay>
	)

	const showBindDialog = () => {
		setShow(true)
	}

	return { bindDialogNode: node, showBindDialog }
}
