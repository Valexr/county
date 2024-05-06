export function random(length: number) {
    return Math.floor(Math.random() * length)
}

export function t(en: string, ru: string) {
    return locale() === 'ru' ? ru : en
}

export function locale() {
    return navigator.language.includes('ru') ? 'ru' : 'en'
}

export function convert(en: keyof Translate, count = 0) {
    const RU = locale() === 'ru'
    const FIRSTABLE = count === 1 || count > 20 && String(count).endsWith('1')
    const SECONDABLE = [2, 3, 4].includes(count)

    const trans = {
        years: FIRSTABLE ? 'год' : SECONDABLE ? 'года' : 'лет',
        months: !count || count > 4 ? 'месяцев' : SECONDABLE ? 'месяца' : 'месяц',
        days: FIRSTABLE ? 'день' : SECONDABLE ? 'дня' : 'дней',
        weeks: FIRSTABLE ? 'неделя' : SECONDABLE ? 'недели' : 'недель',
        hours: FIRSTABLE ? 'час' : SECONDABLE ? 'часа' : 'часов'
    }

    return RU ? trans[en] : count === 1 ? en.substring(0, en.length - 1) : en
}

function openDatepicker(input: HTMLInputElement) {
    input.focus();
    input.showPicker();
}

function elapsed(start: number) {
    const diffDate = new Date(Date.now() - start);
    return (
        "Elapsed Time: Years: " +
        (diffDate.getFullYear() - 1970) +
        ", Months: " +
        diffDate.getMonth() +
        ", Days: " +
        (diffDate.getDate() - 1) +
        ", Hours: " +
        diffDate.getHours() +
        ", Minutes: " +
        diffDate.getMinutes() +
        ", Seconds: " +
        diffDate.getSeconds()
    );
};

