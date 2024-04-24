<script lang="ts" context="module">
    import { date, time, counters, quote, dates, quotes } from "$lib/data";
    import { images } from "$lib/images";
    import { t } from "$lib/utils";

    import DateForm from "$lib/components/Date.svelte";
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

    function setDate(e: SubmitEvent) {
        const data = new FormData(e.target as HTMLFormElement);
        const date = Object.fromEntries(data) as StartDate;
        dates.add(date);
    }

    function changeDate(e: ChangeEventHandler<HTMLInputElement>) {
        const { id, type, value } = e.currentTarget;
        const changed = type === "text" ? { title: value } : { start: value };
        dates.change(Number(id), changed);
    }

    function deleteDate(e: MouseEvent) {
        const { id } = e.target as HTMLButtonElement;
        dates.del(Number(id));
    }

    function intersection(section: HTMLElement) {
        const observer = new IntersectionObserver(observe, {
            root: document.body,
            rootMargin: "0px",
            threshold: 0,
        });
        observer.observe(section);
        function observe(entries: IntersectionObserverEntry[]) {
            const active = entries.find((e) => e.isIntersecting);
            console.log(entries, active);
        }
    }

    $: console.log($date);
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

{#await images.load() then}
    <main>
        {#each $counters as counter, id}
            <section use:intersection id={String(id)}>
                <header>
                    <DateForm {id} {counter} />
                </header>
                <County {counter} />
                <footer>
                    <button id={String(id)} on:click={deleteDate}>
                        {t("Delete", "Удалить")}
                    </button>
                </footer>
            </section>
        {/each}
        <section id="add">
            <DateForm />
        </section>
    </main>
    {#await quotes.load() then}
        {#key $quote}
            <Quote quote={$quote} href={repository} />
        {/key}
    {/await}

    <footer>
        <button on:click={images.back}>{t("Image", "Картинка")}</button>
        <h2>{$time}</h2>
        <button on:click={quote.random}>{t("Quote", "Цитата")}</button>
    </footer>
{/await}

<style>
    @import "app.css";

    header {
        justify-content: center;
        padding: 0;
    }
    main {
        display: flex;
        max-width: 100vw;
        overflow: scroll;
        scroll-snap-type: x mandatory;
    }
    main > * {
        padding: 0 1em;
        flex: 1 0 100%;
        scroll-snap-align: center;
        align-content: start;
    }
    section#add {
        align-content: center;
    }
    section footer {
        justify-content: center;
        /* padding: 0; */
    }
</style>
