<script lang="ts" context="module">
    import Gh from "$lib/components/Gh.svelte";
    import { time } from "$lib/data";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    let start = "2013-04-09";

    function county(date: string) {
        const now = new Date();
        const start = new Date(date);

        return {
            years() {
                const elapsed = now.getTime() - start.getTime();
                return new Date(elapsed).getFullYear() - 1970;
            },
            months() {
                const elapsed = now.getMonth() - start.getMonth();
                return (this.years() * 12 + elapsed) % 12;
            },
            days() {
                const elapsed = now.getDate() - start.getDate();
                const count = new Date(
                    now.getFullYear(),
                    now.getMonth() + 1,
                    0,
                ).getDate();
                return (this.months() * count + elapsed) % count;
            },
        };
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
    <pre>
        {JSON.stringify(county(start), null, 2)}
    </pre>
    <h3>{new Date().toLocaleDateString("ru")}</h3>
    <h2>{county(start).years()} years</h2>
    <h2>{county(start).months()} months</h2>
    <h2>{county(start).days()} days</h2>
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
