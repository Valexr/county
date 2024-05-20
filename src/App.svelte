<script lang="ts" context="module">
    import { time } from '$lib/dates';
    import { images } from '$lib/images';

    import DateForm from '$lib/components/DateForm.svelte';
    import Control from '$lib/components/Control.svelte';
    import Counter from '$lib/components/Counter.svelte';
    import Quote from '$lib/components/Quote.svelte';

    import { quotes } from '$lib/quotes';
    import { counters } from '$lib/counters';
</script>

<script lang="ts">
    export let name: Name;

    let active: string | undefined;
    let WH = 0;

    function intersection(section: HTMLElement) {
        const observer = new IntersectionObserver(observe, { threshold: 1 });
        observer.observe(section);
        function observe(entries: IntersectionObserverEntry[]) {
            const intersecting = entries.find((e) => e.isIntersecting);
            active = intersecting?.target.id;
        }
    }

    function resize(window: Window) {
        setVH();
        window.onresize = setVH;
        function setVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    }
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

<svelte:window use:resize />

{#await Promise.all([images.load(), quotes.load()]) then}
    <main>
        {#each $counters as counter, id}
            <section use:intersection id={String(id)}>
                <header>
                    <DateForm {id} {counter} />
                </header>
                <Counter {counter} />
                {#key counter.quote}
                    <Quote quote={counter.quote} />
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

<style>
    @import 'app.css';

    header {
        justify-content: center;
        padding: 0;
    }
    main {
        display: flex;
        max-width: 100vw;
        overflow: scroll;
        scroll-snap-type: x mandatory;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    main::-webkit-scrollbar {
        display: none;
    }
    main > * {
        flex: 1 0 100%;
        scroll-snap-align: center;
        align-content: center;
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
