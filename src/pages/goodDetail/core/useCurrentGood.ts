import { PrizeList } from '@/pages/luckDraw/const'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export function useCurrentGood() {
	const location = useLocation()
	const query = new URLSearchParams(location.search)
	const goodId = query.get('goodId')

	const good = useMemo(() => {
		return PrizeList.find(prize => prize.id === Number(goodId))
	}, [goodId])

	return {
		good,
		goodId,
	}
}
