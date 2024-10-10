export function copyToClipboard(text: string) {
	const textarea = document.createElement('textarea')
	textarea.value = text
	document.body.appendChild(textarea)
	textarea.select()
	document.execCommand('copy')
	document.body.removeChild(textarea)
}

export function getCookie(cookieName: string) {
	const value = `; ${document.cookie}`
	const parts = value.split(`; ${cookieName}=`)
	if (parts.length === 2) return parts?.pop()?.split(';').shift()
}
