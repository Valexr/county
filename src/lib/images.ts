import { cacheable } from "./cacheable";

type Size = {
    width: number;
    height: number;
}

type ImageSchema = {
    id: number;
    alt: string;
    src: string;
    width: number;
    height: number;
}

type Slide = {
    id?: string | number;
    src?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    [key: string]: unknown;
}

export const images = createImages()

function createImages() {
    type API = [string, number, string]
    const { subscribe, get, set, update } = cacheable<Array<API>>('imagesJSON', [], true)

    async function load() {
        if (!get().length) {
            const url = 'https://valexr.github.io/county/assets/photos.json';
            const res = await fetch(url);
            set(await res.json());
        }
    }

    function prepare(limit = 1, size = { width: window.innerWidth, height: window.innerHeight }) {
        const indexes = Array.from({ length: limit }, () => Math.floor(Math.random() * 24644));
        return get().reduce(
            (acc: ImageSchema[], [src, aspectRatio, author], id) => {
                if (indexes.includes(id)) {
                    const source = { width: size.height * (aspectRatio / 10), height: size.height };
                    const max = { width: size.width, height: size.height };
                    const query = `?w=${ratio(applyRatio(source, max).width)}`;

                    acc.push({
                        id,
                        src: `https://images.unsplash.com/photo-${src}${query}`,
                        alt: `Image by ${author} from Unsplash`,
                        ...applyRatio(source, max),
                    });
                }
                return acc;
            },
            []
        );

        function ratio(size: number) {
            return size * devicePixelRatio;
        }

        function applyRatio(src: Size, size: Size): Size {
            const ratio = Math.min(size.width / src.width, size.height, src.height);
            return {
                width: Math.round(src.width * ratio),
                height: Math.round(src.height * ratio),
            };
        };
    }

    return {
        subscribe, set, update, load, prepare,
        async back() {
            await load();
            const [{ src, alt }] = prepare();
            // await addImageProcess(src)
            // const img = new Image();
            // img.src = src
            // await img.decode();
            document.body.style.cssText = `
                background: url(${src}) center no-repeat;
                background-size: cover;
            `;
            document.body.title = alt
        }
    }
}

