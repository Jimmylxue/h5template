import { useLocation } from 'react-router-dom'
import { glowEffect } from '../common/glowEffect'

export function addGlowEffect(inputId: string) {
	const inputField = document.getElementById(inputId)
	inputField?.classList?.add('glow')

	setTimeout(() => {
		inputField?.classList.remove('glow')
		glowEffect.removeGlowEffect()
	}, 4000)
}

export function useTempCode() {
	const location = useLocation()
	const query = new URLSearchParams(location.search)
	const shareMemberCode = query.get('shareMemberCode')

	const isTempLink = !!shareMemberCode

	return { shareMemberCode, isTempLink }
}
