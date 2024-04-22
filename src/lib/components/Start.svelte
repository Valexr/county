<script lang="ts">
    export let date = "";
    export let start = new Date().toLocaleString("ru");
    export let input: HTMLInputElement;

    $: console.log("start", start);
</script>

<form method="post" on:submit|preventDefault>
    {#if !start}
        <h2>{date}</h2>
    {/if}
    <label>
        <input
            type="date"
            max={new Date().toLocaleString("ru")}
            class:hidden={!start}
            bind:this={input}
            bind:value={start}
        />
    </label>
</form>

<style>
    input {
        font-size: 1.5em;
        font-weight: bold;
        font-family: inherit;
        background: transparent;
        border: 0;
        color: inherit;
        outline: 0;
    }
    input.hidden {
        opacity: 0;
    }
</style>
