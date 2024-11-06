<script lang="ts" module>
    import Button from './Button.svelte';
    import { convert } from '$lib/utils';

    interface Props {
        id?: string;
        value: number;
        type: keyof Translate;
        name: keyof Translate;
    }
</script>

<script lang="ts">
    let { id = '', value, type = $bindable(), name }: Props = $props();
</script>

<li id={convert(name, value)}>
    <Button {id} bind:type>{value}</Button>
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
