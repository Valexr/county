export async function getPhotos(limit = 5, {
    width = window.innerWidth,
    height = window.innerHeight,
}) {
    try {
        return await getImages(limit, { width, height });
    } catch (error) {
        console.error(`Could not fetch photos: ${error}`);
    }
};

async function getImages(
    limit: number = 9,
    size = { width: window.innerWidth, height: window.innerHeight }
): Promise<Slide[]> {
    const url = 'https://valexr.github.io/county/assets/photos.json';
    const indexes = Array.from({ length: limit }, () => Math.floor(Math.random() * 24644));
    const res = await fetch(url);
    const photos = await res.json();

    return photos.reduce(
        (acc: ImageSchema[], [src, aspectRatio, author]: [string, number, string], id: number) => {
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