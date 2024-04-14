<script lang="ts" context="module">
    import Gh from "$lib/components/Gh.svelte";
    import { date, time, start, county } from "$lib/data";
    import { getPhotos } from "$lib/images";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    $start = "2013-04-09";

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
        <!-- <button>Image</button>
        <h1>
            <Gh {repository} />
            {name}
        </h1>
        <button>Settings</button> -->
    </header>

    <main>
        <form action="POST" on:submit|preventDefault>
            <label>
                <input
                    type="date"
                    placeholder="Set start date"
                    bind:value={$start}
                />
            </label>
        </form>
        <h2>{$date}</h2>
        <ul>
            <li id="years">{$county.years}</li>
            <li id="months">{$county.months}</li>
            <li id="days">{$county.days}</li>
        </ul>
        <h2>{$time}</h2>
    </main>
    <!-- [{quote: string, author: string, category: string}] -->
    <footer>
        {#await getQuote() then { quote, author }}
            <blockquote>
                <p>{quote}</p>
                <footer>~ {author}</footer>
            </blockquote>
        {/await}
        <!-- <p>{new Date().getFullYear()} © County</p> -->
    </footer>
{/await}

<style>
    @import "app.css";

    main {
        padding: 1em;
    }
    form {
        /* display: flex; */
        align-items: center;
        justify-content: center;
    }
    input {
        font-size: 1.5em;
        font-weight: bold;
        font-family: inherit;
        background: transparent;
        border: 0;
        color: inherit;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 25vw;
        font-weight: bold;
        display: flex;
        justify-content: center;
        gap: 5vw;
        margin-bottom: 0.5em;
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
</style>
