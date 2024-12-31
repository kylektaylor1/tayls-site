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
</script>

<svelte:window on:scroll={handleScroll} />

<nav
    class={[
        'sticky top-10 z-40 flex items-center gap-4 self-center rounded-full border border-ctp-lavender/50 bg-ctp-mantle px-8 py-3 text-sm transition-all duration-300',
        visible ? 'translate-y-0' : '-translate-y-[calc(100%+2.5rem)]'
    ]}
>
    <a
        href="/projects"
        class={[
            page.url.pathname === '/projects'
                ? 'text-ctp-pink'
                : 'text-ctp-text'
        ]}>Projects</a
    >
    <a
        href="/about"
        class={[
            page.url.pathname === '/about' ? 'text-ctp-pink' : 'text-ctp-text'
        ]}>About</a
    >
    <a
        href="/contact"
        class={[
            page.url.pathname === '/contact' ? 'text-ctp-pink' : 'text-ctp-text'
        ]}>Contact</a
    >
</nav>
