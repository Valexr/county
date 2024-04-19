import { writable } from 'svelte/store'
import { readFileSync, writeFileSync } from 'fs';

export function jsonable<T>(path: string, initial: T) {
    const { subscribe, set } = writable<T>(initial)

    get()

    function get() {
        try {
            initial = JSON.parse(readFileSync(path, { encoding: 'utf-8' }))
        } catch {
            initial = initial
        }
        return initial
    }

    sync(initial)

    function sync(value: T) {
        writeFileSync(path, JSON.stringify(value))
        initial = value
        set(initial)
    }

    return {
        subscribe, get,
        set: (value: T) => sync(value),
        update: (fn: (value: T) => any) => {
            get()
            sync(fn(initial))
        },
    }
}