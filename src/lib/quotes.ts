import { getable } from "./getable";
import { locale, random } from "./utils";

export const quotes = createQuotes()
function createQuotes() {
    const { subscribe, set, get, update } = getable<Quote[]>([['', '']])
    return {
        subscribe, set, get, update,
        async load() {
            const url = `./assets/quotes_${locale()}.json`
            const res = await fetch(url);
            const json = await res.json()
            set(json)
        },
        random(id: number) {
            return get()[random(get().length - id)]
        }
    }
}

