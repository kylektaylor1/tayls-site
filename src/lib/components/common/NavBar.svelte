<script lang="ts">
    import { page } from '$app/state';

    let y = $state(0);
    let ly = $state(0);
    let visible = $state(true);

    function handleScroll() {
        y = window.scrollY;
        if (y > 100) {
            visible = y < ly;
        } else {
            visible = true;
        }
        ly = window.scrollY;
    }

    const items: { slug: string; label: string }[] = [
        {
            slug: '/',
            label: 'Home'
        },
        {
            slug: '/projects',
            label: 'Projects'
        },
        {
            slug: '/about',
            label: 'About'
        },
        {
            slug: '/contact',
            label: 'Contact Me'
        },
        {
            slug: '/blog',
            label: 'Blog'
        }
    ];
</script>

<svelte:window on:scroll={handleScroll} />

<nav
    class={[
        'sticky top-10 z-40 flex items-center gap-6 self-center rounded-2xl border border-ctp-lavender/50 bg-ctp-mantle px-8 py-3 text-xs transition-all duration-300 md:text-sm',
        visible ? 'translate-y-0' : '-translate-y-[calc(100%+2.5rem)]'
    ]}
>
    {#each items as item}
        <a
            href={item.slug}
            class={[
                page.url.pathname === item.slug
                    ? 'text-ctp-pink'
                    : 'text-ctp-text'
            ]}>{item.label}</a
        >
    {/each}
</nav>
