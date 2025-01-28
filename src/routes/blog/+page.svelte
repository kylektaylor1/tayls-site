<script lang="ts">
    import {
        CardHeader,
        PageH1
    } from '$lib/components/common/Typography.svelte';

    let { data } = $props();
    const blogs = data.blogs;
</script>

<div class="container flex flex-col gap-8">
    <div class="flex flex-col gap-4">
        {@render PageH1('My Blog')}
        <p class="text-sm text-ctp-text lg:text-base">
            {`I blog about things I find interesting or exciting, both in my professional and my peronsal life.`}
        </p>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {#each blogs as blog}
            <a
                class="flex flex-col rounded-2xl border border-ctp-lavender bg-ctp-mantle p-6 transition-all hover:cursor-pointer hover:bg-ctp-crust"
                href={`/blog/${blog.slug}`}
            >
                {@render CardHeader(blog.title)}
                <p
                    class="mb-4 mt-1 text-xs italic text-ctp-subtext0 lg:text-sm"
                >
                    {blog.author}
                </p>
                <p class="mb-4 text-sm text-ctp-text lg:text-base">
                    {blog.description}
                </p>
                {#each blog.categories as c}
                    <div
                        class="w-min whitespace-nowrap rounded-2xl bg-ctp-green px-4 py-1 text-sm font-bold text-ctp-base lg:text-base"
                    >
                        {c}
                    </div>
                {/each}
            </a>
        {/each}
    </div>
    {#if blogs.length === 0}
        <p class="text-lg text-ctp-pink lg:text-xl">
            No blog posts at this time! Come back later
        </p>
    {/if}
</div>
