export function random(length: number) {
    return Math.floor(Math.random() * length)
}

export function t(en: string, ru: string, count?: number) {
    console.log(navigator.language)
    return navigator.language.includes('ru') ? ru : en
}

const trans = {
    years: 'лет',
    months: 'месяцев',
    days: 'дней',
    hours: 'часов'
}

export function convert(en: keyof typeof trans, count = 0) {
    const RU = navigator.language.includes('ru')
    if (!count || count % 5) {
        return RU ? trans[en] : en
    }
    return RU ? trans[en] : en
    // 1 - year/год | month/месяц | day/день | hour/час
    // 2-4 - years/года | months/месяца | days/дня | hours/часа
    // 0, 5-20 - years/лет | months/месяцев | days/дней | hours/часов
}

