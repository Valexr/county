import { readable } from 'svelte/store';
import { cacheable } from './cacheable';
import { quotes } from './quotes';

export const dates = createDates()
function createDates() {
    const { subscribe, get, set, update } = cacheable<Array<StartDate>>('County_Dates', [], true)
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
        quote(id: number) {
            this.change(id, { quote: quotes.random(id) })
        }
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



