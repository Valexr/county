export function random(length: number) {
    return Math.floor(Math.random() * length)
}

export function t(en: string, ru: string) {
    console.log(navigator.languages[1])
    return navigator.languages[1] === 'ru' ? ru : en
}