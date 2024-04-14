<script lang="ts" context="module">
    import Gh from "$lib/components/Gh.svelte";
    import DateInput from "$lib/components/DateInput.svelte";
    import { date, time, start, county } from "$lib/data";
    import { getPhotos } from "$lib/images";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    async function setBack() {
        const image = await getPhotos(1, {});
        if (image) {
            document.body.style.cssText = `
                background: url(${image[0].src}) center no-repeat;
                background-size: cover;
            `;
        }
    }

    async function getQuote() {
        const res = await fetch("https://dummyjson.com/quotes/random");
        return res.json();
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
            <ul>
                <li id="years">{$county.years}</li>
                <li id="months">{$county.months}</li>
                <li id="days">{$county.days}</li>
            </ul>
        {:else}
            <h2>Set start date</h2>
            <DateInput bind:value={$start} />
        {/if}
        {#await getQuote() then { quote, author }}
            <blockquote>
                <p>{quote}</p>
                <cite>~ {author}</cite>
            </blockquote>
        {/await}
    </main>

    <footer>
        <button on:click={setBack}>Image</button>
        <h2>{$time}</h2>
        <button>Settings</button>
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
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: min(27.5vw, 25vh);
        font-weight: bold;
        display: flex;
        justify-content: center;
        gap: 0.25em;
        margin-bottom: 0.25em;
    }
    ul li {
        position: relative;
    }
    ul li::after {
        content: attr(id);
        font-size: 15%;
        font-weight: normal;
        position: absolute;
        inset: 0;
        top: 90%;
    }

    blockquote p {
        font-style: italic;
    }
    blockquote cite {
        font-style: normal;
    }
</style>
