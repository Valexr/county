declare module '*.svg' {
    const content: any;
    export default content;
}

type Name = string
type Repository = string

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

type Counter = {
    [x: string]: any;
    id: number,
    title: string,
    quote: Quote,
    start: string,
    years: number,
    months: number,
    days: number,
    full: Record<string, number>
}

type StartDate = { start: string, title: string, quote: Quote }
type Quote = [text: string, author: string]

type ChangeEventHandler<T> = Event & { currentTarget: EventTarget & T; }