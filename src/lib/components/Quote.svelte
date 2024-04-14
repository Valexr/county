<script lang="ts">
    export let quote = "";
    export let author = "";
</script>

<blockquote>
    <p>{quote}</p>
    <cite>~ {author}</cite>
</blockquote>

<style>
    blockquote p {
        font-style: italic;
    }
    blockquote cite {
        font-style: normal;
    }
</style>
