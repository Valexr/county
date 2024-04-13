import { readable, writable } from 'svelte/store';

export const timer = createTimer()

function createTimer() {
    const { subscribe, set, update } = writable(new Date())
    set(new Date());

    const interval = setInterval(() => {
        const now = new Date();
        // const elapsed = Number(now) - Number(start);
        set(new Date());
    }, 1000);

    return { subscribe, set, update }

    function convertMS(ms: number) {
        let y, mt, w, d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        w = Math.floor(d / 7);
        d = d % 7;
        mt = Math.floor(w / 4);
        w = w % 4;
        y = Math.floor(mt / 12);
        y = y % 12;
        return { y, mt, w, d, h, m, s };
    }
}

export const time = readable(new Date().toLocaleTimeString('ru'), (set) => {
    const interval = setInterval(() => {
        const date = new Date().toLocaleTimeString('ru')
        set(date);
    }, 1000);

    return () => clearInterval(interval);
});

export const ticktock = readable('tick', (set, update) => {
    const interval = setInterval(() => {
        update((sound) => (sound === 'tick' ? 'tock' : 'tick'));
    }, 1000);

    return () => clearInterval(interval);
});