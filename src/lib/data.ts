import { derived, readable } from 'svelte/store';
import { cacheable } from './cacheable';

export const start = cacheable('startDate', '', true)

export const county = derived(start, ($start, set) => {
    if (start) {
        const now = new Date();
        const start = new Date($start);
        const elapsedYears = now.getTime() - start.getTime();
        const elapsedMonth = now.getMonth() - start.getMonth();
        const elapsedDays = now.getDate() - start.getDate();
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0,).getDate();
        const years = new Date(elapsedYears).getFullYear() - 1970
        const months = (years * 12 + elapsedMonth) % 12
        const days = (months * daysInMonth + elapsedDays) % daysInMonth

        set({ years, months, days })
    }

}, { years: 0, months: 0, days: 0 })

export const time = readable(new Date().toLocaleTimeString('ru'), (set) => {
    const interval = setInterval(() => {
        const date = new Date().toLocaleTimeString('ru')
        set(date);
    }, 1000);

    return () => clearInterval(interval);
});

export const date = readable(new Date().toLocaleDateString("ru"))

