import { Writable, derived } from 'svelte/store';
import { dates } from './dates';
import { quotes } from './quotes';
import { DateTime, Interval } from "luxon";

export const counters = derived<Writable<StartDate[]>, Counter[]>(dates, ($dates, set) => {

    set($dates.map(({ start, title }, id) => count(id, start, title)))

    function count(id: number, start: string, title: string) {
        const { years, months, weeks, days, interval } = elapse(start)
        return {
            id, title, start,
            quote: quotes.random(id),
            years, months, days, weeks,
            full: {
                months: Math.trunc(interval.length('months')),
                weeks: Math.trunc(interval.length('weeks')),
                days: Math.trunc(interval.length('days')),
                hours: Math.trunc(interval.length('hours')),
            }
        }
    }
}, [])

function elapse(start: string) {
    const TO = DateTime.now();
    const FROM = DateTime.fromISO(start);

    const DIFF = TO.diff(FROM,
        ['years', 'months', 'weeks', 'days', 'milliseconds'],
        { conversionAccuracy: 'longterm' }
    ).toObject()

    return {
        years: DIFF.years || 0,
        months: DIFF.months || 0,
        days: DIFF.days || 0,
        weeks: DIFF.weeks || 0,
        interval: Interval.fromDateTimes(FROM, TO)
    }
};

