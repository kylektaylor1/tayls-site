<script lang="ts">
    import BlogContainer from '$lib/components/common/BlogContainer.svelte';
    import { PageH1 } from '$lib/components/common/Typography.svelte';
    const { data } = $props();

    const content = data.content;
</script>

<svelte:head>
    <title>{data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<BlogContainer>
    <div class="flex flex-col gap-1">
        {@render PageH1(data.meta.title)}
        <p class="italic text-ctp-subtext0">Published at {data.meta.date}</p>
    </div>

    <div class="mb-16 mt-2">
        {#each data.meta.categories as c}
            <div
                class="w-min whitespace-nowrap rounded-2xl bg-ctp-green px-4 py-1 text-sm font-bold text-ctp-base lg:text-base"
            >
                {c}
            </div>
        {/each}
    </div>

    <div class="prose">
        {@render content()}
    </div>
</BlogContainer>
