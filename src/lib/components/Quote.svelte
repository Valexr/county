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
        <a {href} target="_blank">~ {author}</a>
    </blockquote>
{/if}

<style>
    blockquote {
        font-size: larger;
    }
    blockquote p {
        font-style: italic;
    }
    blockquote a {
        font-style: normal;
    }
</style>
