import classNames from 'classnames'
import { useState } from 'react'
import { LuckAbout } from './LuckAbout'
import { OtherProduct } from './OtherProduct'
import { useTranslation } from 'react-i18next'

let str = `cursor-pointer transition-all bg-[#725ef0] text-white  rounded-lg
border-[#725ef0]
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]`

export function Luck2() {
	const { t } = useTranslation()
	const [isProduct, setIsProduct] = useState<boolean>(true)

	return (
		<div className=" mt-4 relative">
			<div className="bg-[url('/src/assets/img/common/flower.png')] w-[136px] h-[99px] bg-contain absolute -left-[10px] -top-[20px] z-[1]"></div>
			<div className=" flex items-center absolute right-8 top-4 bg-[#f7d9e4] rounded-2xl z-[1] text-xs">
				<div
					className={classNames('px-6 py-2 rounded-2xl ', {
						// 'text-white': isProduct,
						// 'bg-[#c375f7]': isProduct,
						[str]: isProduct,
						'bg-[#f7d9e4]': !isProduct,
						'text-[#9a804f]': !isProduct,
					})}
					onClick={() => {
						setIsProduct(true)
					}}
				>
					{t('luck2.goodRecommend')}
				</div>
				<div
					className={classNames('px-6 py-2 rounded-2xl', {
						// 'text-white': !isProduct,
						// 'bg-[#c375f7]': !isProduct,
						[str]: !isProduct,
						'bg-[#f7d9e4]': isProduct,
						'text-[#9a804f]': isProduct,
					})}
					onClick={() => {
						setIsProduct(false)
					}}
				>
					{t('luck2.introduction')}
				</div>
			</div>
			{isProduct ? <OtherProduct /> : <LuckAbout />}
		</div>
	)
}
