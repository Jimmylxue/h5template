import { com1, com2, com3, com4, com5, com6 } from '@/assets/luck2'

export function LuckAbout() {
	return (
		<div className="px-4">
			<div className=" bg-[url('/src/assets/img/common/bigBg.png')] h-[1750px] w-full bg-cover pt-[80px]">
				<img src={com1} className=" w-[317px] mx-auto" alt="" />
				<img src={com2} className=" w-[317px] mx-auto" alt="" />
				<img src={com3} className=" w-[317px] mx-auto mt-6" alt="" />
				<img src={com4} className=" w-[317px] mx-auto mt-6" alt="" />
				<img src={com5} className=" w-[317px] mx-auto mt-6" alt="" />
				<img src={com6} className=" w-[317px] mx-auto" alt="" />
			</div>
		</div>
	)
}
