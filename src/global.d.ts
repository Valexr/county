declare module '*.svg' {
    const content: any;
    export default content;
}

type Elapsed = {
    years: number,
    months: number,
    days: number,
    weeks: number,
    hours: number,
    minutes: number,
    seconds: number,
    ms: number
}
interface Date {
    elapsed(): Elapsed;
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
    id: number,
    title: string,
    quote: Quote,
    start: string,
    years: number,
    months: number,
    days: number,
    weeks: number,
    full: Record<string, number>
}

type Translate = {
    years: string;
    months: string;
    days: string;
    weeks: string;
    hours: string;
    ''
}

type StartDate = { start: string, title: string, quote: Quote }
type Quote = [text: string, author: string]

type ChangeEventHandler<T> = Event & { currentTarget: EventTarget & T; }