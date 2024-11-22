import { makeAutoObservable } from 'mobx'

export class LineModalBox {
	powerBankModalShow: boolean = false
	iphoneModalShow: boolean = false

	// /**
	//  * 是否是领取的iphone
	//  */
	// canNavigate: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	showPowerBankModal() {
		this.powerBankModalShow = true
	}

	showIphoneModal() {
		this.iphoneModalShow = true
	}

	closeModal() {
		this.powerBankModalShow = false
		this.iphoneModalShow = false
	}
}

export const lineBox = new LineModalBox()
