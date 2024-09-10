const lang = import.meta.env.VITE_APP_LANGUAGE as 'zh' | 'en'

export const getBaseImg = lang !== 'zh' ? lang + 'Img' : 'img'
