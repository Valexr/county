<script lang="ts" context="module">
    import { fade } from "svelte/transition";
</script>

<script lang="ts">
    export let quote: [text: string, author: string];
    export let href = "";
</script>

{#if quote}
    {@const [text, author] = quote}
    <blockquote in:fade>
        <p>{text}</p>
        <p>
            <a {href} target="_blank">~ {author}</a>
        </p>
    </blockquote>
{/if}

<style>
    blockquote {
        font-size: large;
        margin: 0;
    }
    blockquote p {
        font-style: italic;
        margin: 1em;
    }
    blockquote a {
        font-style: normal;
    }
</style>
