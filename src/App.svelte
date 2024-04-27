<script lang="ts" context="module">
    import { time } from "$lib/dates";
    import { images } from "$lib/images";

    import DateForm from "$lib/components/DateForm.svelte";
    import Control from "$lib/components/Control.svelte";
    import Counter from "$lib/components/Counter.svelte";
    import Quote from "$lib/components/Quote.svelte";

    import { quotes } from "$lib/quotes";
    import { counters } from "$lib/counters";
</script>

<script lang="ts">
    export let name: Name;
    export let repository: Repository;

    let active: string | undefined;

    function intersection(section: HTMLElement) {
        const observer = new IntersectionObserver(observe, { threshold: 0.5 });
        observer.observe(section);
        function observe(entries: IntersectionObserverEntry[]) {
            const intersecting = entries.find((e) => e.isIntersecting);
            active = intersecting?.target.id;
        }
    }
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
                    <Counter {counter} />
                    {#key counter.quote}
                        <Quote quote={counter.quote} href={repository} />
                    {/key}
                </section>
            {/each}
            <section id="add">
                <DateForm />
            </section>
        </main>
        <footer class:active>
            {#if active}
                <Control {active} />
            {:else}
                <h2>{$time}</h2>
            {/if}
        </footer>
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
        /* padding: 0 1em; */
        flex: 1 0 100%;
        scroll-snap-align: center;
        align-content: center;
    }
    main {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }
    main::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    section#add {
        align-content: center;
    }
    footer {
        justify-content: center;
    }
    footer.active {
        justify-content: space-between;
    }
</style>
