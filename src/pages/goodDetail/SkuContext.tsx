import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { useCurrentGood } from './core/useCurrentGood'

type TSKUContext = {
	imgIndex: number
	updateImgIndex?: (index: number) => void
	textIndex: number
	updateTextIndex?: (index: number) => void
	selectText: string
	selectImage: string
}

const SKUContext = createContext<TSKUContext>({
	imgIndex: 0,
	textIndex: 0,
	selectText: '',
	selectImage: '',
})

export const SKUContextProvider = function ({
	children,
}: {
	children: ReactNode
}) {
	const { good } = useCurrentGood()

	const [imgIndex, setImgIndex] = useState<number>(0)
	const [textIndex, setTextIndex] = useState<number>(0)

	const selectText = useMemo(() => {
		const textAttrs = good?.attrs?.find(item => item.type === 'text')?.values
		// @ts-ignore
		return textAttrs?.[textIndex]?.name
	}, [textIndex, good])

	const selectImage = useMemo(() => {
		const textAttrs = good?.attrs?.find(item => item.type === 'img')?.values
		// @ts-ignore
		return textAttrs?.[imgIndex]?.name
	}, [imgIndex, good])

	const updateImgIndex = (index: number) => {
		setImgIndex(index)
	}

	const updateTextIndex = (index: number) => {
		setTextIndex(index)
	}

	useEffect(() => {
		good?.attrs?.forEach(item => {
			if (item.type === 'img') {
				// @ts-ignore
				const _index = item.values.findIndex(it => it.chooseAble)
				setImgIndex(_index)
			} else if (item.type === 'text') {
				// @ts-ignore
				const _index = item.values.findIndex(it => it.chooseAble)
				console.log('___index', _index)
				setTextIndex(_index)
			}
		})
	}, [good])

	return (
		<SKUContext.Provider
			value={{
				imgIndex,
				updateImgIndex,
				textIndex,
				updateTextIndex,
				selectText,
				selectImage,
			}}
		>
			{children}
		</SKUContext.Provider>
	)
}

export function useSku() {
	return useContext(SKUContext)
}
