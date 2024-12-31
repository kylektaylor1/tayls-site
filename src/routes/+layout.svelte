<script lang="ts">
    import Footer from '$lib/components/common/Footer.svelte';
    import NavBar from '$lib/components/common/NavBar.svelte';
    import '../app.css';
    let { children } = $props();
</script>

<div class="flex h-full min-h-screen flex-col font-geist-mono">
    <NavBar />
    <div class="my-36">
        {@render children()}
    </div>
    <Footer />
</div>
