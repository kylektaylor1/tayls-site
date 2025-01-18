<script lang="ts">
    import Footer from '$lib/components/common/Footer.svelte';
    import NavBar from '$lib/components/common/NavBar.svelte';
    import '../app.css';
    let { children } = $props();

    import { page } from '$app/state';
    const url = page.url.origin;
</script>

<svelte:head>
    <title>tayls.dev</title>
    <meta
        name="description"
        content="tayls.dev is the home of my personal website. Come check out some interesting content and get to know me better."
    />
    <meta
        name="og"
        content="tayls.dev is the home of my personal website. Come check out some interesting content and get to know me better."
    />
    <meta property="og:site_name" content="Svelte’s Homepage" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={'tayls.dev'} />
    <meta
        property="og:description"
        content={'tayls.dev is the home of my personal website. Come check out some interesting content and get to know me better.'}
    />
    <meta property="og:image" content={`/og-image.jpg`} />
</svelte:head>

<div class="flex h-full min-h-screen flex-col font-geist-mono">
    <NavBar />
    <div class="my-36">
        {@render children()}
    </div>
    <Footer />
</div>
