<script lang="ts">
    export let value = "";
</script>

<form on:submit|preventDefault>
    <label>
        <input type="date" max={new Date().toLocaleString("ru")} bind:value />
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
</style>
