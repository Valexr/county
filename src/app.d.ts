declare module '*.svg' {
    const content: any;
    export default content;
}

type Name = string
type Repository = {
    type: string
    url: string
}

type Size = {
    width: number;
    height: number;
}

/**
 * `https://www.picsum.photos` API response schema
 */
type ImageSchema = {
    id: number;
    alt: string;
    src: string;
    width: number;
    height: number;
}

/**
 * Common Image interface.
 */
type Slide = {
    id?: string | number;
    src?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    [key: string]: unknown;
}