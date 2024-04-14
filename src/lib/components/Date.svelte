<script lang="ts">
    export let date = "";
    export let value = "";
    export let input: HTMLInputElement;
</script>

<form method="post" on:submit|preventDefault>
    {#if !value}
        <h2>{date}</h2>
    {/if}
    <label>
        <input
            type="date"
            max={new Date().toLocaleString("ru")}
            class:hidden={!value}
            bind:this={input}
            bind:value
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
