<script lang="ts" context="module">
    import County from "./County.svelte";
</script>

<script lang="ts">
    export let counter: Counter;

    let type: keyof Translate;

    function length(counter: Counter) {
        const { id, title, quote, start, full, ...rest } = counter;
        return Object.values(rest).filter((r) => r).length;
    }
</script>

<ul style="--county-length: {length(counter)}">
    {#if type === "months"}
        <County name="months" value={counter.full.months} bind:type />
    {:else if type === "weeks"}
        <County name="weeks" value={counter.full.weeks} bind:type />
    {:else if type === "days"}
        <County name="days" value={counter.full.days} bind:type />
    {:else if type === "hours"}
        <County name="hours" value={counter.full.hours} bind:type />
    {:else}
        {#if counter.years}
            <County name="years" id="hours" value={counter.years} bind:type />
        {/if}
        {#if counter.months}
            <County
                name="months"
                id="months"
                value={counter.months}
                bind:type
            />
        {/if}
        {#if counter.weeks}
            <County name="weeks" id="weeks" value={counter.weeks} bind:type />
        {/if}
        {#if counter.days}
            <County name="days" id="days" value={counter.days} bind:type />
        {/if}
    {/if}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: min(calc(100vw / var(--county-length)), 27vh);
        font-weight: bold;
        display: flex;
        justify-content: center;
        gap: 0.25em;
        margin-bottom: 0.5em;
    }
</style>
