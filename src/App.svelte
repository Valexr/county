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
        <button class="box" on:click={images.back}>
            <!-- {t("Image", "Картинка")} -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="18"
                fill="currentColor"
            >
                <path
                    class="fill"
                    d="M16 2.5a.534.534 0 0 0-.563-.5H.563A.534.534 0 0 0 0 2.5v11a.534.534 0 0 0 .563.5H1V3h15Z"
                />
                <path
                    class="fill"
                    d="M17.5 4h-15a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5Zm-.5 9.687-2.636-2.637a1 1 0 0 0-1.414 0l-1.536 1.536-3.778-3.779a1 1 0 0 0-1.414 0L3 12.03V5h14Z"
                />
                <circle class="fill" cx="14.5" cy="7.5" r="1.25" />
            </svg>
        </button>
        <h2>{$time}</h2>
        <button class="box" on:click={quote.random}>
            <!-- {t("Quote", "Цитата")} -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="18"
                fill="currentColor"
            >
                <path
                    class="fill"
                    d="M17.5 9h-9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0
                .5.5h1a.5.5 0 0 0 .5-.5V11h2v5h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0
                .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H14v-5h2v.5a.5.5 0 0
                0 .5.5h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Z"
                />
                <path
                    class="fill"
                    d="M15.5 1h-14a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5H7V9a1 1 0 0 1 1-1h1.344L6.636 5.293a1 1 0 0 0-1.414 0L2 8.514V2h13v6h1V1.5a.5.5 0 0 0-.5-.5Z"
                />
                <circle class="fill" cx="12.35" cy="4.65" r="1.35" />
            </svg>
        </button>
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
        align-content: center;
    }
    section#add {
        align-content: center;
    }
    section footer {
        justify-content: center;
        /* padding: 0; */
    }
</style>
