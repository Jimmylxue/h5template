import { makeAutoObservable } from 'mobx'

export class LineModalBox {
	show: boolean = false

	/**
	 * 是否是领取的iphone
	 */
	canNavigate: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

	showModal(status: boolean) {
		this.show = true
		this.canNavigate = status
	}

	closeModal() {
		this.show = false
	}
}

export const lineBox = new LineModalBox()
