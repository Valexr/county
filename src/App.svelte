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
        <form action="POST" on:submit|preventDefault>
            <label>
                <input
                    type="date"
                    placeholder="Set start date"
                    bind:value={$start}
                />
            </label>
        </form>
    </header>

    <main>
        <!-- <h2>{$date}</h2> -->
        <ul>
            <li id="years">{$county.years}</li>
            <li id="months">{$county.months}</li>
            <li id="days">{$county.days}</li>
        </ul>
        {#await getQuote() then { quote, author }}
            <blockquote>
                <p>{quote}</p>
                <footer>~ {author}</footer>
            </blockquote>
        {/await}
    </main>

    <footer>
        <h2>{$time}</h2>
    </footer>
{/await}

<style>
    @import "app.css";

    header {
        justify-content: center;
    }
    main {
        padding: 1em;
        display: grid;
        place-content: center;
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
</style>
