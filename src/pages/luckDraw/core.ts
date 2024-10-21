export function addGlowEffect(inputId: string) {
	const inputField = document.getElementById(inputId)
	inputField?.classList?.add('glow')

	setTimeout(() => {
		inputField?.classList.remove('glow')
	}, 4000)
}
