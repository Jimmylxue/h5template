import { ActionBar, Swiper, Tag } from 'react-vant'
import { WapHomeO } from '@react-vant/icons'
import classNames from 'classnames'
import { useAddressSelect } from '../../components/Address/useAddressSelect'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { PrizeList } from '../luckDraw/const'
import { cloneDeep } from 'lodash-es'
import { LineModal } from './components/lineModal'

export function GoodDetail() {
	const { addressNode, showAddressNode } = useAddressSelect()
	const location = useLocation()
	const navigate = useNavigate()
	const query = new URLSearchParams(location.search)
	const goodId = query.get('goodId')

	const [selectAttrs, setSelectAttrs] = useState([])

	const good = useMemo(() => {
		return PrizeList.find(prize => prize.id === Number(goodId))
	}, [goodId])

	useEffect(() => {
		const length = good?.attrs?.length || 0
		setSelectAttrs(new Array(length).fill(0) as any)
	}, [good])

	const nowSalePrice = useMemo(() => {
		const priceIndex = good?.attrs?.findIndex(item => item?.type === 'price')

		const priceAttrValue = (
			priceIndex ? good?.attrs?.[priceIndex]?.values : []
		)?.map(item => item.split('-')?.[1])

		const selectPriceAttr = selectAttrs?.[priceIndex || 0]

		const selectValue = Number(priceAttrValue?.[selectPriceAttr]) || 0

		const nowSale = selectValue * ((good?.discount || 10) / 10)
		return nowSale || good?.price
	}, [selectAttrs])

	return (
		good && (
			<div className=" pb-14">
				<div>
					<Swiper>
						{good?.swiperImages?.map((item, index) => (
							<Swiper.Item key={index}>
								<div>
									<img className=" w-full h-[400px]" src={item} alt="" />
								</div>
							</Swiper.Item>
						))}
					</Swiper>
				</div>
				<div className=" flex justify-between text-[#fcf7f9] text-xs">
					<div className=" flex flex-col flex-grow justify-center pl-4 font-light bg-[#e94b57] pb-2">
						<div className=" flex items-center">
							<div>
								秒殺價 NT$
								<span className=" text-2xl">{nowSalePrice}</span>
								<span className=" ml-1">原價 NT${good.originPrice}</span>
							</div>
						</div>
						<div className=" text-[#fae2e4] font-extralight">
							活動已搶 | 已售240件
						</div>
					</div>
					<div className=" flex flex-col justify-center px-4 bg-[#f5d661]">
						<div className=" text-[#7b382d] font-bold text-sm">恭喜中獎</div>
						<div className=" text-[#84531f] font-extralight">
							距離結束僅30分鐘
						</div>
					</div>
				</div>
				<div className="px-4 text-black mt-5">
					{good.name}
					<span>
						<Tag className=" px-2 py-1 ml-2" type="success">
							貨到付款
						</Tag>
					</span>
				</div>
				{good.attrs?.map((attr, index) => (
					<div key={index} className=" mt-2 px-4">
						<div>{attr.attr}</div>
						<div className=" flex mt-2">
							{attr.values.map((item, _idx) => {
								const hasSelect = _idx === selectAttrs[index]
								const isDisabled = item.split('^^')?.[1] === 'disabled'
								return (
									<div
										className={classNames(
											'mr-2 px-2 py-3 text-[#2d2d2d] bg-[#f6f6f6] rounded',
											{
												'text-[#e94a54]': hasSelect,
												'bg-[#fbf0f1]': hasSelect,
												'border border-[#e94a54]': hasSelect,
												'bg-gray-400': isDisabled,
											}
										)}
										key={_idx}
										onClick={() => {
											fbq('trackCustom', 'changeGoodAttr')
											if (isDisabled) {
												return
											}
											const newArr: any[] = cloneDeep(selectAttrs)
											newArr[index] = _idx
											setSelectAttrs(newArr as any)
										}}
									>
										{item.split('-')?.[0]}
									</div>
								)
							})}
						</div>
					</div>
				))}
				<div className=" px-4 mt-2">
					{good.desc?.map((item, index) => (
						<div className=" text-sm mb-1 text-justify" key={index}>
							· {item}
						</div>
					))}
				</div>
				<ActionBar>
					<ActionBar.Icon
						icon={<WapHomeO />}
						text="首頁"
						onClick={() => {
							navigate(-1)
						}}
					/>
					<ActionBar.Button
						type="danger"
						text="輸入地址領取"
						onClick={() => {
							fbq('trackCustom', 'showAddress')
							showAddressNode()
						}}
					/>
				</ActionBar>
				{addressNode}
				<LineModal />
			</div>
		)
	)
}
