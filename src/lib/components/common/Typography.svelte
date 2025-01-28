<script module lang="ts">
    export { PageH1, PageH2, PageH3, CardHeader };
</script>

{#snippet PageH1(content: string)}
    <h1 class="text-3xl font-semibold text-ctp-blue md:text-4xl xl:text-5xl">
        {content}
    </h1>
{/snippet}

{#snippet PageH2(content: string)}
    <h1 class="text-xl font-medium text-ctp-blue md:text-2xl xl:text-3xl">
        {content}
    </h1>
{/snippet}

{#snippet PageH3(content: string)}
    <h1 class="text-lg font-medium text-ctp-blue md:text-xl xl:text-2xl">
        {content}
    </h1>
{/snippet}

{#snippet CardHeader(content: string)}
    <h1 class="text-xl font-semibold uppercase text-ctp-pink lg:text-2xl">
        {content}
    </h1>
{/snippet}
