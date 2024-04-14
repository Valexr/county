<script lang="ts">
    export let quote = {
        content: "",
        author: "",
    };
    export let href = "";
</script>

<blockquote>
    <p>{quote.content}</p>
    <a {href}>~ {quote.author}</a>
</blockquote>

<style>
    blockquote p {
        font-style: italic;
    }
    blockquote a {
        font-style: normal;
    }
</style>
