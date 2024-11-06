<script lang="ts" module>
    import County from './County.svelte';

    interface Props {
        counter: Counter
    }
</script>

<script lang="ts">
    let { counter }: Props = $props();
    let type: keyof Translate = $state('');
</script>

<ul>
    {#if type === 'months'}
        <County name="months" value={counter.full.months} bind:type />
    {:else if type === 'weeks'}
        <County name="weeks" value={counter.full.weeks} bind:type />
    {:else if type === 'days'}
        <County name="days" value={counter.full.days} bind:type />
    {:else if type === 'hours'}
        <County name="hours" value={counter.full.hours} bind:type />
    {:else}
        {#if counter.years}
            <County name="years" id="hours" value={counter.years} bind:type />
        {/if}
        {#if counter.months}
            <County
                name="months"
                id="months"
                value={counter.months}
                bind:type
            />
        {/if}
        {#if counter.weeks}
            <County name="weeks" id="weeks" value={counter.weeks} bind:type />
        {/if}
        {#if counter.days}
            <County name="days" id="days" value={counter.days} bind:type />
        {/if}
    {/if}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: calc(100vw / var(--county-length, 5) + 1em);
        font-weight: bold;
        display: flex;
        justify-content: center;
        gap: 0.25em;
        margin-bottom: 0.5em;
    }
</style>
