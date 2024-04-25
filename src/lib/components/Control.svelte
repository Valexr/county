<script lang="ts" context="module">
    import Icon from "$lib/components/Icon.svelte";

    import { images } from "$lib/images";
    import { dates } from "$lib/dates";
    // import { t } from "$lib/utils";
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
    <!-- {t("Image", "Картинка")} -->
    <Icon name="Images" />
</button>
<!-- <h2>{$time}</h2> -->
<button class="box" id={active} on:click={deleteDate}>
    <!-- {t("Delete", "Удалить")} -->
    <Icon name="Delete" />
</button>
<button class="box" id={active} on:click={randomQuote}>
    <!-- {t("Quote", "Цитата")} -->
    <Icon name="Quote" />
</button>
