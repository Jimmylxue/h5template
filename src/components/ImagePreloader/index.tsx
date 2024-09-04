import { useEffect } from 'react'

type TProps = {
	src: string
	type?: 'image' | 'audio'
}

export function ImagePreloader({ src, type = 'image' }: TProps) {
	useEffect(() => {
		if (!src) {
			return
		}
		if (type === 'image') {
			const image = new Image()
			image.src = src
		} else {
			const audio = new Audio()
			audio.src = src
			audio.load()
		}
	}, [type, src])
	return null
}
