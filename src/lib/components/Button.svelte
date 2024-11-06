<script lang="ts" module>
    import type { Snippet } from "svelte";
    
    interface Props {
        id: string, 
        type: string, 
        children: Snippet
    }
</script>

<script lang="ts">
    let { id = '', type = $bindable<string>(), children }: Props = $props();

    function set(e: MouseEvent) {
        const { id } = e.currentTarget as HTMLButtonElement;
        type = id;
    }
</script>

<button {id} class="clear outline" onclick={set}>
    {@render children?.()}
</button>

<style>
    button {
        padding: 0;
    }
    button.clear {
        background: transparent;
        font-family: inherit;
        font-weight: inherit;
    }
</style>
