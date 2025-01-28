<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        className?: string;
        children: Snippet;
    }

    let { className, children }: Props = $props();
</script>

<article class={['container flex max-w-[720px] flex-col', className]}>
    {@render children()}
</article>
