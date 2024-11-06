<script lang="ts" module>
    import { fade } from 'svelte/transition';

    interface Props {
        quote: [text: string, author: string]
    }
</script>

<script lang="ts">
    let { quote }: Props = $props();
</script>

{#if quote}
    {@const [text, author] = quote}
    <blockquote in:fade>
        <p>{text}</p>
        <cite>~ {author}</cite>
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
</style>
