<script lang="ts" context="module">
    import Gh from "$lib/components/Gh.svelte";
    import { time } from "$lib/data";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;
    const timeZone = "UTC";
    // Intl.DateTimeFormat().resolvedOptions().timeZone;
    let start = new Date("2013-04-09");

    function county(start: Date) {
        const now = new Date();
        const elapsed = Number(now) - Number(start);
        // const offset =
        //     (start.getTimezoneOffset() - now.getTimezoneOffset()) / 60;
        console.log(timeZone, now, start, elapsed);
        return convertMS(elapsed);

        function convertMS(ms: number) {
            let y, mt, w, d, h, m, s;
            s = Math.floor(ms / 1000);
            m = Math.floor(s / 60);
            s = s % 60;
            h = Math.floor(m / 60);
            m = m % 60;
            d = Math.floor(h / 24);
            h = h % 24;
            w = Math.floor(d / 7);
            d = d % 7;
            mt = Math.floor(w / 4);
            w = w % 4;
            y = Math.floor(mt / 12);
            mt = 12 - (mt % 12);
            return { y, mt, w, d, h, m, s };
        }
    }

    function years(start: Date) {
        console.log(start);
        const now = new Date();
        const elapsed = Number(now) - Number(start);
        const year = 1000 * 3600 * 24 * 7 * 4 * 12;
        console.log(elapsed / year);
        return now.getFullYear() - start.getFullYear();
    }
    function months(start: Date) {
        const now = new Date();
        const elapsed = Number(now) - Number(start);
        const month = 1000 * 3600 * 24 * 7 * 4;
        console.log("month", 12 - ((elapsed / month) % 12));
        return Math.trunc(12 - ((elapsed / month) % 12));
        return years(start) * 12 + now.getMonth() - start.getMonth();
    }
    function weeks(start: Date) {
        const now = new Date();
        const elapsed = Number(now) - Number(start);
        const week = 1000 * 3600 * 24 * 7;
        console.log("week", 4 - ((elapsed / week) % 4));
        return months(start) * 4;
        // + now.getMonth() - start.getMonth();
    }
    function days(start: Date) {
        const now = new Date();
        const elapsed = Number(now) - Number(start);
        const hour = 1000 * 3600;
        const day = hour * 24;
        console.log("day", (elapsed / day) % 7, (elapsed / hour) % 24);
        return Math.trunc(elapsed / day) % 7;
        return months(start) * 4 * 7;
        // + now.getMonth() - start.getMonth();
    }
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
                bind:value={start}
            />
        </label>
    </form>
    <!-- <pre>
        {JSON.stringify(county(start), null, 2)}
    </pre> -->
    <h3>{new Date().toLocaleDateString("ru")}</h3>
    <h2>{years(new Date(start))} years</h2>
    <h2>{months(new Date(start))} months</h2>
    <h2>{weeks(new Date(start))} weeks</h2>
    <h2>{days(new Date(start))} days</h2>
    <h3>{$time}</h3>
</main>

<footer>
    <p>Footer</p>
</footer>

<style>
    @import "app.css";
    main {
        padding: 1em;
    }
</style>
