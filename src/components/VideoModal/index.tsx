import { useState } from 'react'
import { Overlay } from 'react-vant'
import { Cross } from '@react-vant/icons'
import { video3 } from '@/assets/index'

export function useVideoModal() {
	const [show, setShow] = useState<boolean>(false)

	const node = (
		<Overlay
			visible={show}
			onClick={() => setShow(false)}
			className=" flex justify-center items-center"
		>
			<div className=" relative w-full h-full">
				<Cross
					className=" absolute right-4 top-5 z-20 text-white"
					fontSize="40"
					onClick={() => {
						console.log('ssda')
						setShow(false)
					}}
				/>
				<div className=" absolute w-full z-10 flex justify-center items-center h-full">
					<video src={video3} className=" size-[80%]" controls autoPlay></video>
				</div>
			</div>
		</Overlay>
	)

	const showVideo = () => {
		setShow(true)
	}

	return {
		videoNode: node,
		showVideo,
	}
}
