import { cacheable } from './cacheable';

type Size = {
    width: number;
    height: number;
};

type ImageSchema = {
    id: number;
    alt: string;
    src: string;
    width: number;
    height: number;
};

type Slide = {
    id?: string | number;
    src?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    [key: string]: unknown;
};

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
            const url = './assets/photos.json';
            const res = await fetch(url);
            set(await res.json());
        }
        back();
    }

    function back() {
        const [{ src, alt }] = prepare();
        // await addImageProcess(src)
        // const img = new Image();
        // img.src = src
        // await img.decode();
        document.documentElement.style.cssText = `
            background: url(${src}) center no-repeat;
            background-size: cover;
        `;
        document.documentElement.title = alt;
    }

    function prepare(
        limit = 1,
        size = { width: window.innerWidth, height: window.innerHeight }
    ) {
        const indexes = Array.from({ length: limit }, () =>
            Math.floor(Math.random() * 24403)
        );
        return get().reduce((acc: ImageSchema[], name, id) => {
            console.log(name);
            if (indexes.includes(id)) {
                // const source = {
                //     width: size.height * (aspectRatio / 10),
                //     height: size.height,
                // };
                const max = { width: size.width, height: size.height };
                // const query = `?w=${ratio(applyRatio(source, max).width)}`;

                acc.push({
                    id,
                    // src: `https://images.unsplash.com/photo-${src}${query}`,
                    src: `https://burst.shopifycdn.com/photos/${name}.jpg?width=${max.width}`,
                    ...max,
                    alt: `Image from Burst Shopify`,
                    // ...applyRatio(source, max),
                });
            }
            return acc;
        }, []);

        function ratio(size: number) {
            return size * devicePixelRatio;
        }

        function applyRatio(src: Size, size: Size): Size {
            const ratio = Math.min(
                size.width / src.width,
                size.height,
                src.height
            );
            return {
                width: Math.round(src.width * ratio),
                height: Math.round(src.height * ratio),
            };
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

// fetch('https://api.pexels.com/v1/search?query=nature&per_page=1', {
//     headers: {
//         Authorization:
//             'KEoDTMKOp4RqsKUwVmHD546Tp0kJHbVjM3RADB2vyT7QScmoixrY3it3',
//     },
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// fetch('https://api.freepik.com/v1/ai/resources', {
//     headers: {
//         'x-freepik-api-key': 'FPSXde59496d3238f1c6ab2f913f0fa7b3f8',
//     },
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// fetch('https://www.shopify.com/stock-photos/photos', {
//     headers: {
//         // 'x-freepik-api-key': 'FPSXde59496d3238f1c6ab2f913f0fa7b3f8',
//         // mode: 'no-cors',
//         credentials: 'omit',
//         Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
//     },
// })
//     .then((response) => response.text())
//     .then((data) => console.log(data));

// fetch(
//     'https://cdn.shopify.com/shopifycloud/growth_tools/assets/stock_photos/photos-13e5031ef11335fbc8d9dad1c85018261c584584a46a8a19a6157d8a0c229201.xml',
//     {
//         headers: {
//             // 'x-freepik-api-key': 'FPSXde59496d3238f1c6ab2f913f0fa7b3f8',
//             // mode: 'no-cors',
//             // credentials: 'omit',
//             // Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
//         },
//     }
// )
//     .then((response) => response.text())
//     .then((data) => {
//         // const matched = data.match(/<image\:image>(.*)<\/image\:image>/);
//         console.log(data);
//         //  writeFile('burst.json', file, 'utf-8')
//     });

// <image:image>
//     <image:loc>https://burst.shopifycdn.com/photos/pouring-hot-coffee_1200x.jpg</image:loc>
//     <image:title>Picture of Pouring Hot Coffee - Free Stock Photo</image:title>
//     <image:caption>Image of Pouring Hot Coffee. This free stock photo is also about: Relax, Coffee, Kitchen, Morning, Caffeine, Lifestyle, Coffee Break, and Coffee Beans.</image:caption>
//     <image:license>https://burst.shopify.com/legal/terms</image:license>
// </image:image>
