<script lang="ts" context="module">
    import { date, time, start, quote, county } from "$lib/data";
    import { images } from "$lib/images";
    import { t } from "$lib/utils";

    import Date from "$lib/components/Date.svelte";
    import County from "$lib/components/County.svelte";
    import Quote from "$lib/components/Quote.svelte";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    let input: HTMLInputElement;

    function openDatepicker() {
        input.focus();
        input.showPicker();
    }
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

{#await images.back() then}
    <header>
        <Date date={$date} bind:input bind:value={$start} />
    </header>

    <main>
        {#if $start}
            <County county={$county} />
        {:else}
            <h2>
                <button on:click={openDatepicker}>
                    {t("Set start date", "Начальная дата")}
                </button>
            </h2>
        {/if}
        {#await quote.load() then}
            <Quote quote={$quote} href={repository} />
        {/await}
    </main>

    <footer>
        <button on:click={images.back}>{t("Image", "Картинка")}</button>
        <h2>{$time}</h2>
        <button on:click={quote.load}>{t("Quote", "Цитата")}</button>
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
    footer h2 {
        margin: 0;
    }
</style>
