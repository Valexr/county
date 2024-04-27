import { Writable, derived } from 'svelte/store';
import { dates } from './dates';
import { quotes } from './quotes';

export const counters = derived<[Writable<StartDate[]>, Writable<Quote[]>], Counter[]>(([dates, quotes]),
    ([$dates, $quotes], set) => {

        set($dates.map(({ start, title, quote }, id) => count(id, start, title, quote)))

        function count(id: number, start: string, title: string, quote: Quote) {
            const mss = new Date().getTime() - new Date(start).getTime();
            const years = new Date(mss).getFullYear() - 1970
            const months = new Date(mss).getMonth()
            const days = new Date(mss).getDate() - 1
            const weeks = Math.floor(days / 7)

            return {
                id,
                title,
                quote: quote || quotes.random(id),
                start: start,
                years: years,
                months: months,
                days: days % 7,
                weeks: weeks,
                full: {
                    months: years * 12 + months,
                    weeks: Math.trunc(mss / (3600000 * 24 * 7)),
                    days: Math.trunc(mss / (3600000 * 24)),
                    hours: Math.trunc(mss / 3600000)
                }
            }
        }
    }, [])

