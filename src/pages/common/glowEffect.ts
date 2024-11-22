import { makeAutoObservable } from 'mobx'

type TGlow = 'bindKf' | 'seeJiaoCheng' | 'reward-0' | 'reward-1'

class GlowEffect {
	showGlow?: TGlow

	constructor() {
		makeAutoObservable(this)
	}

	addGlowEffect(glow: TGlow) {
		this.showGlow = glow
	}

	removeGlowEffect() {
		this.showGlow = undefined
	}
}

export const glowEffect = new GlowEffect()
