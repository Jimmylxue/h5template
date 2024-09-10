const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'

const langImgBasePath = {
	zh: 'img',
	en: 'enImg',
}

const basePath = langImgBasePath[lang]

const __bgTop = await import(`../assets/${basePath}/bg-top.png`)
export const bgTop = __bgTop.default

const __drawBtn = await import(`../assets/${basePath}/drawBtn.png`)
export const drawBtn = __drawBtn.default

const __xsmr = await import(`../assets/${basePath}/xsmr.png`)
export const xsmr = __xsmr.default

const __powerBank = await import(`../assets/${basePath}/powerBank.png`)
export const powerBank = __powerBank.default

const __fiveZhe = await import(`../assets/${basePath}/5zhe.png`)
export const fiveZhe = __fiveZhe.default

const __threeZhe = await import(`../assets/${basePath}/3zhe.png`)
export const threeZhe = __threeZhe.default

const __sorry = await import(`../assets/${basePath}/sorry.png`)
export const sorry = __sorry.default

const __oneZhe = await import(`../assets/${basePath}/1zhe.png`)
export const oneZhe = __oneZhe.default

const __jiujiu = await import(`../assets/${basePath}/jiujiu.png`)
export const jiujiu = __jiujiu.default

const __kflogo = await import(`../assets/${basePath}/kflogo.png`)
export const kflogo = __kflogo.default

const __modalTitle = await import(`../assets/${basePath}/modalTitle.png`)
export const modalTitle = __modalTitle.default

const __xiajiText = await import(`../assets/${basePath}/xiajiText.png`)
export const xiajiText = __xiajiText.default

const __bindLogo = await import(`../assets/${basePath}/bindLogo.png`)
export const bindLogo = __bindLogo.default

const __smallText = await import(`../assets/${basePath}/smallText.png`)
export const smallText = __smallText.default
// bg - [url('assets/img/modalTitle.png')]
// bg - [url('assets/enImg/modalTitle.png')]
