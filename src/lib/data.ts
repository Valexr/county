import { derived, readable, writable } from 'svelte/store';
import { cacheable } from './cacheable';
import { random, local } from './utils';

export const start = cacheable('startDate', '', true)
export const date = readable(new Date().toLocaleDateString("ru"))
export const time = readable(new Date().toLocaleTimeString('ru'), (set) => {
    const interval = setInterval(() => {
        const date = new Date().toLocaleTimeString('ru')
        set(date);
    }, 1000);

    return () => clearInterval(interval);
});

export const county = derived(([start, time]), ([$start, $time], set) => {
    if (start) {
        const now = new Date();
        const start = new Date($start);
        const elapsedMS = now.getTime() - start.getTime();
        const elapsedMonth = now.getMonth() - start.getMonth();
        const elapsedDays = now.getDate() - start.getDate();
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0,).getDate();
        const years = new Date(elapsedMS).getFullYear() - 1970
        const months = (years * 12 + elapsedMonth) % 12
        const days = (months * daysInMonth + elapsedDays) % daysInMonth

        set({
            years, months, days,
            full: {
                months: years * 12 + months,
                days: Math.trunc(elapsedMS / (3600000 * 24)),
                hours: Math.trunc(elapsedMS / 3600000)
            }
        })
    }

}, { years: 0, months: 0, days: 0, full: {} })

export const quote = createQuote()
function createQuote() {
    const { subscribe, set, update } = writable<[text: string, author: string]>()
    return {
        subscribe, set, update,
        async load() {
            const url = `./assets/quotes_${local()}.json`
            const res = await fetch(url);
            const json = await res.json()
            const quote = json[random(json.length)];
            set(quote)
        }
    }
}

