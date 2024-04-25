<script lang="ts" context="module">
    import { dates, date } from "$lib/dates";
    import { t } from "$lib/utils";
</script>

<script lang="ts">
    export let id = 0;
    export let counter: Counter | undefined = undefined;

    function setDate(e: SubmitEvent) {
        if (counter) return;
        const data = new FormData(e.target as HTMLFormElement);
        const date = Object.fromEntries(data) as Partial<StartDate>;
        dates.add(date as StartDate);
    }

    function changeDate(e: ChangeEventHandler<HTMLInputElement>) {
        if (!counter) return;
        const { id, name, value } = e.currentTarget;
        const changed = { [name]: value };
        dates.change(Number(id), changed);
    }
</script>

<form action="post" on:submit|preventDefault={setDate}>
    <fieldset>
        <label>
            <input
                id={String(id)}
                type="date"
                name="start"
                class:clear={counter}
                value={counter?.start || $date}
                required
                on:change={changeDate}
            />
        </label>
        <label>
            <input
                id={String(id)}
                type="text"
                name="title"
                maxlength="15"
                class:clear={counter}
                value={counter?.title || ""}
                placeholder={t("Counter name", "Имя счётчика")}
                autocomplete="off"
                required
                on:change={changeDate}
            />
        </label>
        {#if !counter}
            <fieldset>
                <h2>
                    <button>
                        {t("Add counter", "Добавить счётчик")}
                    </button>
                </h2>
            </fieldset>
        {/if}
    </fieldset>
</form>

<style>
    form {
        max-width: 15em;
        margin: auto;
    }
    fieldset {
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column nowrap;
        border: 0;
    }
    :global(#add) fieldset {
        gap: 1em;
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
