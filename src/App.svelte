<script lang="ts" context="module">
    import Gh from "$lib/components/Gh.svelte";
    import { date, time, start, county } from "$lib/data";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    $start = "2013-04-09";
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<header>
    <button>Some</button>
    <h1>
        <Gh {repository} />
        {name}
    </h1>
    <button>Else</button>
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

<footer>
    <p>{new Date().getFullYear()} © County</p>
</footer>

<style>
    @import "app.css";
    main {
        padding: 1em;
    }
    input {
        font-size: 1.5em;
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
</style>
