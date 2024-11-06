<script lang="ts" module>
    interface Props {
        id: string,
        name: string,
        size: string,
        color: string,
        rotate: number,
        spin: boolean,
        style: string,
        bordered: boolean
    }
</script>

<script lang="ts">
    let {
        id = "",
        name = "Close",
        size = "16px",
        color = "currentColor",
        rotate = 0,
        spin = false,
        style = "",
        bordered = false,
    }: Partial<Props> = $props()
</script>

<svg
    {id}
    width={size}
    height={size}
    fill={color}
    class:spin
    class:bordered
    style="transform: rotate({rotate}deg); --icon-size: {size}; {style}"
>
    <use href="./assets/sprite.svg#{name}" />
</svg>

<style>
    svg {
        flex: 0 0 var(--icon-size);
    }
    .spin {
        animation: spin 0.75s linear infinite;
    }
    .bordered {
        box-shadow: 0 0 0 1px var(--color-border);
        border-radius: 4px;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
