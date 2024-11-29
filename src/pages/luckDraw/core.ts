import { useLocation } from 'react-router-dom'
import { glowEffect } from '../common/glowEffect'

const isUseNewInviteLink =
	import.meta.env.VITE_APP_USE_NEW_INVITE_LINK === 'true'

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

/**
 * 是否是邀请链接
 */
export function useInviteLink() {
	const location = useLocation()
	const query = new URLSearchParams(location.search)
	const shareMemberCode = query.get('shareMemberCode')
	/**
	 * 没有携带 utm_id 当做是邀请链接
	 */
	const utm_id = query.get('utm_id')

	const isInviteLink = isUseNewInviteLink ? !utm_id : !!shareMemberCode

	return {
		isInviteLink,
		shareMemberCode,
		utm_id,
	}
}
