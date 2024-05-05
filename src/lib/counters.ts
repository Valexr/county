import { Writable, derived } from 'svelte/store';
import { dates } from './dates';
import { quotes } from './quotes';
import { DateTime, Interval, Duration } from "luxon";

export const counters = derived<[Writable<StartDate[]>, Writable<Quote[]>], Counter[]>(([dates, quotes]),
    ([$dates, $quotes], set) => {

        set($dates.map(({ start, title, quote }, id) => count(id, start, title, quote)))

        function count(id: number, start: string, title: string, quote: Quote) {
            const elapsed = elapse(start)

            // console.log(title, convert(elapsed.ms))
            return {
                id, title, quote: quote || quotes.random(id), start: start,
                years: elapsed.years,
                months: elapsed.months,
                days: elapsed.days,
                weeks: elapsed.weeks,
                full: {
                    months: Math.trunc(elapsed.interval.length('months')),
                    weeks: Math.trunc(elapsed.interval.length('weeks')),
                    days: Math.trunc(elapsed.interval.length('days')),
                    hours: Math.trunc(elapsed.interval.length('hours')),
                    // months: Math.trunc(elapsed.duration.as('months')),
                    // weeks: Math.trunc(elapsed.duration.as('weeks')),
                    // days: Math.trunc(elapsed.duration.as('days')),
                    // hours: Math.trunc(elapsed.duration.as('hours')),
                    // months: elapsed.years * 12 + elapsed.months,
                    // weeks: Math.trunc(elapsed.ms / (3600000 * 24 * 7)),
                    // days: Math.trunc(elapsed.ms / (3600000 * 24)),
                    // hours: Math.trunc(elapsed.ms / 3600000)
                }
            }
        }
    }, [])

function elapse(start: string) {
    // const FROM = new Date(start)
    // const TO = new Date()

    // const DATE = new Date(TO.getTime() - FROM.getTime());

    // DATE.setDate(FROM.getUTCDate())
    // console.log(FROM, TO, DATE)

    // const leap = new Date(year, 1, 29).getDate() === 29;

    // const years = DATE.getUTCFullYear() - 1970
    // const months = DATE.getUTCMonth()
    // const days = DATE.getUTCDate() - 1

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
        // ms: DIFF.milliseconds || 0,
        duration: Duration.fromObject(DIFF),
        interval: Interval.fromDateTimes(FROM, TO)
        // days: days % 7,
        // weeks: Math.floor(days / 7),
        // hours: DATE.getUTCHours(),
        // minutes: DATE.getUTCMinutes(),
        // seconds: DATE.getUTCSeconds(),
        // ms: DATE.getTime()
    }
};


function convert(ms: number) {
    let Y, M, W, D, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;

    D = Math.floor(h / 24);
    h = h % 24;

    W = Math.floor(D / 7);
    D = W % 7;

    M = Math.floor(W / 4);
    W = M % 4;

    Y = Math.floor(M / 12);
    M = M % 12

    // Y = Y;
    return { Y, M, W, D };
}

