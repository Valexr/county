<script lang="ts" context="module">
    import { date, time, dates } from "$lib/dates";
    import { images } from "$lib/images";
    import { t } from "$lib/utils";

    import Start from "$lib/components/Start.svelte";
    import County from "$lib/components/County.svelte";
    import Quote from "$lib/components/Quote.svelte";
</script>

<script lang="ts">
    export let id: string;
    export let counter: Counter;

    let input: HTMLInputElement;

    function openDatepicker() {
        input.focus();
        input.showPicker();
    }

    function setDate(e: SubmitEvent) {
        const data = new FormData(e.target as HTMLFormElement);
        const date = Object.fromEntries(data) as Partial<StartDate>;
        dates.add(date as StartDate);
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

<section {id}>
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
                        value={counter.title}
                        placeholder={t("Counter name", "Имя счётчика")}
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
