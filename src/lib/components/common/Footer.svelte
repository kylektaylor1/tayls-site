<script>
    import TaylsDevLogo from '../brand/TaylsDevLogo.svelte';
    import GithubIcon from '../icons/GithubIcon.svelte';
    import XIcon from '../icons/XIcon.svelte';
</script>

<footer class="mt-auto bg-ctp-crust">
    <div
        class="container flex flex-col gap-6 py-12 md:flex-row md:justify-between md:gap-0"
    >
        <div class="order-2 flex flex-col gap-2 lg:order-1">
            <a
                href="/"
                target="_blank"
                class="text-xs text-ctp-text underline transition-all hover:cursor-pointer hover:text-ctp-pink"
                >Developed Openly</a
            >
            <p class="text-xs text-ctp-subtext0">
                © 2025 Kyle Taylor. All rights reserved.
            </p>
        </div>
        <div
            class="order-1 flex flex-col items-start gap-4 lg:order-2 lg:items-end"
        >
            <TaylsDevLogo dark={false} className={'h-5 w-auto'} />
            <div class="flex items-center gap-4">
                <a
                    href="https://x.com/taylsspin"
                    class="hover:cursor-pointer"
                    target="_blank"
                >
                    <XIcon className={`size-4`} />
                </a>
                <a
                    href="https://github.com/kylektaylor1"
                    class="hover:cursor-pointer"
                    target="_blank"
                >
                    <GithubIcon className={`size-4`} />
                </a>
            </div>
        </div>
    </div>
</footer>
