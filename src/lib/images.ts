import { cacheable } from './cacheable';

export const images = createImages();

function createImages() {
    type API = [string, number, string];
    const { subscribe, set, get, update } = cacheable<Array<API>>(
        'County_Images',
        [],
        true
    );

    async function load() {
        if (!get().length) {
            const url = './assets/data/photos.json';
            const res = await fetch(url);
            set(await res.json());
        }
        back();
    }

    async function back() {
        const { src, alt } = await prepare();
        document.documentElement.style.cssText = `
            background: url(${src}) center no-repeat;
            background-size: cover;
        `;
        document.documentElement.title = alt;
    }

    async function prepare() {
        const name = get()[Math.floor(Math.random() * 24403)];
        const width = ratio(window.innerWidth);

        return {
            src: `https://burst.shopifycdn.com/photos/${name}.jpg?width=${width}`,
            alt: `Image from Burst Shopify`,
        };

        function ratio(size: number) {
            return size * devicePixelRatio;
        }
    }

    return {
        subscribe,
        set,
        update,
        load,
        prepare,
        back,
    };
}

function imageInfo(src: string): Promise<{
    width: number;
    height: number;
    aspect: number;
}> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const aspect = img.width / img.height;
            resolve({
                width: img.width,
                height: img.height,
                aspect: Number(aspect.toFixed(2)),
            });
        };
        img.onerror = reject;
        img.src = src;
    });
}
