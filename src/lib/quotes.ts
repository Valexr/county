import { cacheable } from "./cacheable";
import { locale, random } from "./utils";

export const quotes = createQuotes()
function createQuotes() {
    const { subscribe, set, get, update } = cacheable<Quote[]>('County_Quotes', [['', '']], true)
    return {
        subscribe, set, get, update,
        async load() {
            if (!get().length) {
                const url = `./assets/quotes_${locale()}.json`
                const res = await fetch(url);
                set(await res.json())
            }
        },
        random(id: number) {
            return get()[random(get().length - id)]
        }
    }
}

