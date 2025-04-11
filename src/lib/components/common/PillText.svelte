<script lang="ts">
    type Props = {
        label: string;
    };
    let { label }: Props = $props();
</script>

<div class="rounded-2xl bg-ctp-rosewater px-4 py-1 text-xs text-ctp-surface0">
    {label}
</div>
