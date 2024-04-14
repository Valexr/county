<script lang="ts" context="module">
    import { date, time, start, quote } from "$lib/data";
    import { getPhotos } from "$lib/images";

    import DateInput from "$lib/components/DateInput.svelte";
    import County from "$lib/components/County.svelte";
    import Quote from "$lib/components/Quote.svelte";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    async function setBack() {
        const images = await getPhotos(1, {});
        document.body.style.cssText = `
            background: url(${images?.[0].src}) center no-repeat;
            background-size: cover;
        `;
    }
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

{#await setBack() then}
    <header>
        {#if $start}
            <DateInput bind:value={$start} />
        {:else}
            <h2>{$date}</h2>
        {/if}
    </header>

    <main>
        {#if $start}
            <County />
        {:else}
            <h2>Set start date</h2>
            <DateInput bind:value={$start} />
        {/if}
        {#await quote.load() then}
            {#if $quote}
                <Quote quote={$quote} />
            {/if}
        {/await}
    </main>

    <footer>
        <button on:click={setBack}>Image</button>
        <h2>{$time}</h2>
        <button on:click={quote.load}>Quote</button>
    </footer>
{/await}

<style>
    @import "app.css";

    header {
        justify-content: center;
    }
    footer h2 {
        margin: 0;
    }
    main {
        padding: 1em;
        display: grid;
        place-content: center;
    }
</style>
