declare module '*.svg' {
    const content: any;
    export default content;
}

type Name = string
type Repository = {
    type: string
    url: string
}