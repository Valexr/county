export function random(length: number) {
    return Math.floor(Math.random() * length)
}

export function t(en: string, ru: string) {
    return local() === 'ru' ? ru : en
}

export function local() {
    return navigator.language.includes('ru') ? 'ru' : 'en'
}

type Trans = {
    years: string;
    months: string;
    days: string;
    hours: string;
}

export function convert(en: keyof Trans, count = 0) {
    const RU = local() === 'ru'
    const FIRSTABLE = count === 1 || count > 20 && String(count).endsWith('1')
    const SECONDABLE = [2, 3, 4].includes(count)

    const trans = {
        years: FIRSTABLE ? 'год' : SECONDABLE ? 'года' : 'лет',
        months: !count || count > 4 ? 'месяцев' : SECONDABLE ? 'месяца' : 'месяц',
        days: FIRSTABLE ? 'день' : SECONDABLE ? 'дня' : 'дней',
        hours: FIRSTABLE ? 'час' : SECONDABLE ? 'часа' : 'часов'
    }

    return RU ? trans[en] : count ? en.substring(0, en.length - 1) : en
    // 1 - year/год | month/месяц | day/день | hour/час
    // 2-4 - years/года | months/месяца | days/дня | hours/часа
    // 0, 5-20 - years/лет | months/месяцев | days/дней | hours/часов
}

