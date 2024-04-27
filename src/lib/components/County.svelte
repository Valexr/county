<script lang="ts" context="module">
    import Button from "./Button.svelte";
    import { convert } from "$lib/utils";
</script>

<script lang="ts">
    export let name: keyof Translate;
    export let value: number;
    export let type: keyof Translate;
    export let id = "";
</script>

<li id={convert(name, value)}>
    <Button {id} bind:type>
        {value}
    </Button>
</li>

<style>
    li {
        position: relative;
    }
    li::after {
        content: attr(id);
        font-size: 20%;
        font-weight: normal;
        position: absolute;
        inset: 0;
        top: 90%;
    }
</style>
