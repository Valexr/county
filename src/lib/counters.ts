import { Writable, derived } from 'svelte/store';
import { dates } from './dates';
import { quotes } from './quotes';

export const counters = derived<[Writable<StartDate[]>, Writable<Quote[]>], Counter[]>(([dates, quotes]),
    ([$dates, $quotes], set) => {

        set($dates.map(({ start, title, quote }, id) => count(id, start, title, quote)))

        function count(id: number, start: string, title: string, quote: Quote) {
            // const now = new Date();
            // const start = new Date(date);
            const elapsedMS = new Date().getTime() - new Date(start).getTime();
            // const elapsedMonth = now.getMonth() - start.getMonth();
            // const elapsedDays = now.getDate() - start.getDate();
            // const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0,).getDate();
            const years = new Date(elapsedMS).getFullYear() - 1970
            const months = new Date(elapsedMS).getMonth()
            const days = new Date(elapsedMS).getDate() - 1
            // const months = (years * 12 + elapsedMonth) % 12
            // const days = (months * daysInMonth + elapsedDays) % daysInMonth
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
                    weeks: Math.trunc(elapsedMS / (3600000 * 24 * 7)),
                    days: Math.trunc(elapsedMS / (3600000 * 24)),
                    hours: Math.trunc(elapsedMS / 3600000)
                }
            }
        }
    }, [])


Date.prototype.getElapsedTime = function () {
    const diffDate = new Date(Date.now() - Number(this));
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