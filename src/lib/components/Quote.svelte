<script lang="ts">
    export let quote = {
        content: "",
        author: "",
    };
</script>

<blockquote>
    <p>{quote.content}</p>
    <cite>~ {quote.author}</cite>
</blockquote>

<style>
    blockquote p {
        font-style: italic;
    }
    blockquote cite {
        font-style: normal;
    }
</style>
