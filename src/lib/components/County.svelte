<script lang="ts" context="module">
    import Button from "./Button.svelte";
    import { convert, t } from "$lib/utils";
</script>

<script lang="ts">
    export let counter: {
        years: number;
        months: number;
        days: number;
        full: Record<string, number>;
    };

    let type = "";
</script>

<ul>
    {#if type === "months"}
        <li id={convert("months", counter.full.months)}>
            <Button id="" bind:type>
                {counter.full.months}
            </Button>
        </li>
    {:else if type === "days"}
        <li id={convert("days", counter.full.days)}>
            <Button id="" bind:type>
                {counter.full.days}
            </Button>
        </li>
    {:else if type === "hours"}
        <li id={convert("hours", counter.full.hours)}>
            <Button id="" bind:type>
                {counter.full.hours}
            </Button>
        </li>
    {:else}
        <li id={convert("years", counter.years)}>
            <Button id="hours" bind:type>
                {counter.years}
            </Button>
        </li>
        <li id={convert("months", counter.months)}>
            <Button id="months" bind:type>
                {counter.months}
            </Button>
        </li>
        <li id={convert("days", counter.days)}>
            <Button id="days" bind:type>
                {counter.days}
            </Button>
        </li>
    {/if}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: min(25vw, 27vh);
        font-weight: bold;
        display: flex;
        justify-content: center;
        gap: 0.25em;
        margin-bottom: 0.5em;
    }
    ul li {
        position: relative;
    }
    ul li::after {
        content: attr(id);
        font-size: 20%;
        font-weight: normal;
        position: absolute;
        inset: 0;
        top: 90%;
    }
</style>
