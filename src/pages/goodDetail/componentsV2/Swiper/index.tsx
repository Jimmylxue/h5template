import { Swiper, SwiperInstance } from 'react-vant'
import left2Icon from '@/assets/img/goodDetail/left2Icon.png'
import right2Icon from '@/assets/img/goodDetail/right2Icon.png'
import baozha from '@/assets/img/goodDetail/baozha.png'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import { useCurrentGood } from '../../core/useCurrentGood'

export function Swipers() {
	const { good } = useCurrentGood()

	const swipperRef = useRef<SwiperInstance>(null)
	const [currentIndex, setCurrentIndex] = useState<number>(0)

	return (
		<div className=" w-full h-[380px] relative">
			<Swiper
				ref={swipperRef}
				enabled={false}
				indicator={(_, current) => {
					setCurrentIndex(current)
					document
						.getElementById(`swiper-dz-${current}`)
						?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
					return (
						<div className=" bg-white h-[90px] w-full dziii absolute bottom-0 flex  items-center">
							<div
								className=" flex-shrink-0 w-[30px] flex justify-center"
								onClick={() => {
									swipperRef.current?.swipePrev()
								}}
							>
								<img className=" w-[12px] h-[22px]" src={left2Icon} alt="" />
							</div>
							<div className=" flex overflow-auto no-scrollbar">
								{good?.swiperImages?.map((item, index) => (
									<div
										id={`swiper-dz-${index}`}
										className={classNames(
											' size-[72px] flex-shrink-0 mr-3 border border-[#E7E7E7]',
											{
												'border-[#FF6751]': currentIndex === index,
											}
										)}
										key={index}
										onClick={() => {
											swipperRef.current?.swipeTo(index)
										}}
									>
										<img src={item} alt="" />
									</div>
								))}
							</div>
							<div
								className=" flex-shrink-0 w-[30px] flex justify-center"
								onClick={() => {
									swipperRef.current?.swipeNext()
								}}
							>
								<img className=" w-[12px] h-[22px]" src={right2Icon} alt="" />
							</div>
						</div>
					)
				}}
			>
				{good?.swiperImages?.map((item, index) => (
					<Swiper.Item key={index}>
						<div>
							<img className=" w-full h-[380px]" src={item} alt="" />
						</div>
					</Swiper.Item>
				))}
			</Swiper>
			<div className=" absolute right-3 top-3 size-[60px] flex justify-center items-center">
				<img src={baozha} className="  absolute w-full " alt="" />
				<div className=" text-white relative text-[13px]">-90%</div>
			</div>
		</div>
	)
}
