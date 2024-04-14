<script lang="ts">
    export let id = "";
    export let type: string;

    function set(e: MouseEvent) {
        const { id } = e.currentTarget as HTMLButtonElement;
        type = id;
    }
</script>

<button {id} class="clear outline" on:click={set}>
    <slot />
</button>

<style>
    button.clear {
        background: transparent;
        font-family: inherit;
        font-weight: inherit;
    }
</style>
