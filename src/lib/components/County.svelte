<script lang="ts" context="module">
    import { county } from "$lib/data";
</script>

<ul>
    <li id="years">{$county.years}</li>
    <li id="months">{$county.months}</li>
    <li id="days">{$county.days}</li>
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: min(27.5vw, 25vh);
        font-weight: bold;
        display: flex;
        justify-content: center;
        gap: 0.25em;
        margin-bottom: 0.25em;
    }
    ul li {
        position: relative;
    }
    ul li::after {
        content: attr(id);
        font-size: 15%;
        font-weight: normal;
        position: absolute;
        inset: 0;
        top: 90%;
    }
</style>
