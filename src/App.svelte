<script lang="ts" context="module">
    import { date, time, dates } from "$lib/dates";
    import { images } from "$lib/images";
    // import { t } from "$lib/utils";

    import DateForm from "$lib/components/DateForm.svelte";
    import County from "$lib/components/County.svelte";
    import Quote from "$lib/components/Quote.svelte";
    import Icon from "$lib/components/Icon.svelte";
    import { quotes } from "$lib/quotes";
    import { counters } from "$lib/counters";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    // let input: HTMLInputElement;
    let active: string | undefined = "0";

    // function openDatepicker() {
    //     input.focus();
    //     input.showPicker();
    // }

    function randomQuote(e: MouseEvent) {
        const { id } = e.target as HTMLButtonElement;
        dates.quote(Number(id));
    }

    function deleteDate(e: MouseEvent) {
        const { id } = e.target as HTMLButtonElement;
        dates.del(Number(id));
    }

    function intersection(section: HTMLElement) {
        const observer = new IntersectionObserver(observe, { threshold: 1.0 });
        observer.observe(section);
        function observe(entries: IntersectionObserverEntry[]) {
            const intersecting = entries.find((e) => e.isIntersecting);
            active = intersecting?.target.id;
        }
    }

    $: console.log($date);
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

{#await images.load() then}
    {#await quotes.load() then}
        <main>
            {#each $counters as counter, id}
                <section use:intersection id={String(id)}>
                    <header>
                        <DateForm {id} {counter} />
                    </header>
                    <County {counter} />
                    {#key counter.quote}
                        <Quote quote={counter.quote} href={repository} />
                    {/key}
                </section>
            {/each}
            <section id="add">
                <DateForm />
            </section>
        </main>
        {#if active}
            <footer>
                <button class="box" on:click={images.back}>
                    <!-- {t("Image", "Картинка")} -->
                    <Icon name="Images" />
                </button>
                <!-- <h2>{$time}</h2> -->
                <button class="box" id={active} on:click={deleteDate}>
                    <!-- {t("Delete", "Удалить")} -->
                    <Icon name="Delete" />
                </button>
                <button class="box" id={active} on:click={randomQuote}>
                    <!-- {t("Quote", "Цитата")} -->
                    <Icon name="Quote" />
                </button>
            </footer>
        {/if}
    {/await}
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
        align-content: center;
    }
    section#add {
        align-content: center;
    }
    section footer {
        /* justify-content: center; */
        /* padding: 0; */
    }
</style>
