<script lang="ts" context="module">
    import Button from "./Button.svelte";
    import { t } from "$lib/utils";
</script>

<script lang="ts">
    export let county: {
        years: number;
        months: number;
        days: number;
        full: Record<string, number>;
    };

    let type = "";
</script>

<ul>
    {#if type === "months"}
        <li id={t("months", "месяцы")}>
            <Button id="" bind:type>
                {county.full.months}
            </Button>
        </li>
    {:else if type === "days"}
        <li id={t("days", "дни")}>
            <Button id="" bind:type>
                {county.full.days}
            </Button>
        </li>
    {:else if type === "hours"}
        <li id={t("hours", "часы")}>
            <Button id="" bind:type>
                {county.full.hours}
            </Button>
        </li>
    {:else}
        <li id={t("years", "годы")}>
            <Button id="hours" bind:type>
                {county.years}
            </Button>
        </li>
        <li id={t("months", "месяцы")}>
            <Button id="months" bind:type>
                {county.months}
            </Button>
        </li>
        <li id={t("days", "дни")}>
            <Button id="days" bind:type>
                {county.days}
            </Button>
        </li>
    {/if}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: min(25vw, 25vh);
        font-weight: bold;
        display: flex;
        justify-content: center;
        gap: 0em;
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
</style>
