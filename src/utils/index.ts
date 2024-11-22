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

/**
 * 随机跳转地址
 */
export function randomJumpPage(jumpList: string[]) {
	const length = jumpList?.length
	const linkIndex = Math.floor(Math.random() * (length || 0))
	const link = jumpList?.[linkIndex]
	if (link) {
		setTimeout(() => {
			location.href = link
		}, 1500)
	}
}
