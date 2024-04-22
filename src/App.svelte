<script lang="ts" context="module">
    import { date, time, counters, quote, dates } from "$lib/data";
    import { images } from "$lib/images";
    import { t } from "$lib/utils";

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

    $: console.log($date);
</script>

<svelte:head>
    <title>{name}</title>
</svelte:head>

{#await images.back() then}
    <main>
        {#each $counters as counter, id}
            <section>
                <header>
                    <form action="post" on:submit|preventDefault>
                        <fieldset>
                            <label>
                                <input
                                    id={String(id)}
                                    type="date"
                                    class="clear"
                                    name="start"
                                    value={counter.start}
                                    required
                                    on:change={changeDate}
                                />
                            </label>
                            <label>
                                <input
                                    id={String(id)}
                                    class="clear"
                                    type="text"
                                    name="title"
                                    maxlength="15"
                                    value={counter.title}
                                    placeholder={t(
                                        "Counter name",
                                        "Имя счётчика",
                                    )}
                                    required
                                    on:change={changeDate}
                                />
                            </label>
                        </fieldset>
                    </form>
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
            <form method="post" on:submit|preventDefault={setDate}>
                <fieldset>
                    <label>
                        <input
                            type="date"
                            name="start"
                            value={$date}
                            required
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            name="title"
                            placeholder={t("Counter name", "Имя счётчика")}
                            required
                        />
                    </label>
                </fieldset>
                <h2>
                    <button>
                        {t("Add counter", "Добавить счётчик")}
                    </button>
                </h2>
            </form>
        </section>
    </main>
    {#await quote.load() then}
        <Quote quote={$quote} href={repository} />
    {/await}

    <footer>
        <button on:click={images.back}>{t("Image", "Картинка")}</button>
        <!-- <h2>{$time}</h2> -->
        <button on:click={quote.load}>{t("Quote", "Цитата")}</button>
    </footer>
{/await}

<style>
    @import "app.css";

    header {
        justify-content: center;
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
    }

    form {
        max-width: 15em;
        margin: auto;
    }
    fieldset {
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column nowrap;
        gap: 1em;
        border: 0;
    }
    input {
        font-family: inherit;
        font-size: 1.5em;
        font-weight: bold;
        font-family: inherit;
        line-height: 2em;
        text-align: center;
        margin: 0;
        outline: 0;
        width: 100%;
        background: transparent;
        border: 2px solid currentColor;
        border-radius: 0.25rem;
        color: inherit;
        /* max-width: 20em; */
        margin: auto;
    }
    input[type="date"]::-webkit-datetime-edit {
        flex: 1;
    }
    input.clear {
        border-color: transparent;
    }
    form button {
        min-width: 100%;
    }
</style>
