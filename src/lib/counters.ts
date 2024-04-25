import { Writable, derived } from 'svelte/store';
import { dates } from './dates';
import { quotes } from './quotes';

export const counters = derived<[Writable<StartDate[]>, Writable<Quote[]>], Counter[]>(([dates, quotes]),
    ([$dates, $quotes], set) => {

        set($dates.map(({ start, title, quote }, id) => count(id, start, title, quote)))

        function count(id: number, date: string, title: string, quote: Quote) {
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
                quote: quote || quotes.random(id),
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