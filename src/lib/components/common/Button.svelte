<script lang="ts">
    type Props = {
        label: string;
    };
    let { label }: Props = $props();
</script>

<button>{label}</button>
