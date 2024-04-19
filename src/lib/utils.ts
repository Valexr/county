export function random(length: number) {
    return Math.floor(Math.random() * length)
}

export function t(en: string, ru: string) {
    return navigator.languages[1] === 'ru' ? ru : en
}