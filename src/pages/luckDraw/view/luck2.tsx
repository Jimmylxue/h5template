import classNames from 'classnames'
import { useState } from 'react'
import { LuckAbout } from './LuckAbout'
import { OtherProduct } from './OtherProduct'
import { useTranslation } from 'react-i18next'

export function Luck2() {
	const { t } = useTranslation()
	const [isProduct, setIsProduct] = useState<boolean>(true)

	return (
		<div className=" mt-4 relative">
			<div className="bg-[url('/src/assets/img/common/flower.png')] w-[136px] h-[99px] bg-contain absolute -left-[10px] -top-[20px] z-[1]"></div>
			<div className=" flex items-center absolute right-8 top-4 bg-[#f7d9e4] rounded-2xl overflow-hidden z-[1] text-xs">
				<div
					className={classNames('p-2 rounded-2xl ', {
						'text-white': isProduct,
						'bg-[#c375f7]': isProduct,
						'bg-[#f7d9e4]': !isProduct,
						'text-[#9a804f]': !isProduct,
					})}
					onClick={() => {
						setIsProduct(true)
					}}
				>
					{t('luck2.introduction')}
				</div>
				<div
					className={classNames('p-2 rounded-2xl', {
						'text-white': !isProduct,
						'bg-[#c375f7]': !isProduct,
						'bg-[#f7d9e4]': isProduct,
						'text-[#9a804f]': isProduct,
					})}
					onClick={() => {
						setIsProduct(false)
					}}
				>
					{t('luck2.goodRecommend')}
				</div>
			</div>
			{isProduct ? <OtherProduct /> : <LuckAbout />}
		</div>
	)
}
