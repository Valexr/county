<script lang="ts" context="module">
    import Icon from '$lib/components/Icon.svelte';

    import { images } from '$lib/images';
    import { dates } from '$lib/dates';
</script>

<script lang="ts">
    export let active: string | undefined;

    function randomQuote(e: MouseEvent) {
        const { id } = e.target as HTMLButtonElement;
        dates.quote(Number(id));
    }

    function deleteDate(e: MouseEvent) {
        const { id } = e.target as HTMLButtonElement;
        dates.del(Number(id));
    }
</script>

<button class="box" on:click={images.back}>
    <Icon name="Images" />
</button>
<button class="box" id={active} on:click={deleteDate}>
    <Icon name="Delete" />
</button>
<button class="box" id={active} on:click={randomQuote}>
    <Icon name="Quote" />
</button>

<style>
    button {
        background: transparent;
    }
    button:hover {
        background-color: #f2f2f250;
    }
    button:hover:active {
        background-color: #f2f2f200;
    }
</style>
