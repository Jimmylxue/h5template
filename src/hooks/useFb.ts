import { getCookie } from '../utils'

export function useFbData() {
	const fbp = getCookie('_fbp')!
	const fbc = getCookie('_fbc')!

	return { fbc, fbp }
}
