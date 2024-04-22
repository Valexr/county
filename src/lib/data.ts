import { Readable, Writable, derived, readable, writable } from 'svelte/store';
import { cacheable } from './cacheable';
import { random, local } from './utils';


export const dates = createDates()
function createDates() {
    const { subscribe, get, set, update } = cacheable<Array<StartDate>>('CountyDates', [], true)
    return {
        subscribe, get, set, update,
        add(date: StartDate) {
            update((dates) => dates.concat(date));
        },
        change(id: number, value: Partial<StartDate>) {
            dates.update((dates) =>
                dates.map((d, i) => i === Number(id) ? Object.assign(d, value) : d,),
            );
        },
        del(id: number) {
            dates.update((dates) => dates.filter((d, i) => i !== id));
        },
    }
}
export const date = readable(new Date().toLocaleDateString('en-CA'))
export const time = readable(new Date().toLocaleTimeString('ru'), (set) => {
    const interval = setInterval(() => {
        const date = new Date().toLocaleTimeString('ru')
        set(date);
    }, 1000);

    return () => clearInterval(interval);
});

export const counters = derived<[Writable<StartDate[]>, Readable<string>], Counter[]>(([dates, time]),
    ([$dates, $time], set) => {

        set($dates.map(({ start, title }, id) => count(id, start, title)))

        function count(id: number, date: string, title: string) {
            const now = new Date();
            const start = new Date(date);
            const elapsedMS = now.getTime() - start.getTime();
            const elapsedMonth = now.getMonth() - start.getMonth();
            const elapsedDays = now.getDate() - start.getDate();
            const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0,).getDate();
            const years = new Date(elapsedMS).getFullYear() - 1970
            const months = (years * 12 + elapsedMonth) % 12
            const days = (months * daysInMonth + elapsedDays) % daysInMonth

            return {
                id,
                title,
                start: date,
                years: Math.abs(years),
                months: Math.abs(months),
                days: Math.abs(days),
                full: {
                    months: years * 12 + Math.abs(months),
                    days: Math.trunc(elapsedMS / (3600000 * 24)),
                    hours: Math.trunc(elapsedMS / 3600000)
                }
            }
        }
    }, [])

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

