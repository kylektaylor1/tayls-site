<script>
    import TaylsDevLogo from '../brand/TaylsDevLogo.svelte';
    import GithubIcon from '../icons/GithubIcon.svelte';
    import XIcon from '../icons/XIcon.svelte';
</script>

<footer class="mt-auto bg-ctp-crust">
    <div
        class="container flex flex-col gap-6 py-12 md:flex-row md:justify-between md:gap-0"
    >
        <div
            class="order-2 flex w-full flex-col items-start lg:order-1 lg:w-3/4"
        >
            <TaylsDevLogo dark={false} className={'h-5 w-auto mb-4'} />
            <a
                href="/"
                target="_blank"
                class="mb-2 text-xs text-ctp-subtext0 underline transition-all hover:cursor-pointer hover:text-ctp-pink"
                >Developed Openly</a
            >
            <p class="text-xs text-ctp-subtext0">
                © 2025 Kyle Taylor. All rights reserved.
            </p>
        </div>

        <div
            class="order-2 flex w-full flex-col items-start gap-6 lg:w-1/4 lg:items-end"
        >
            <div class="flex w-full items-center">
                <div class="flex w-full flex-col">
                    <p
                        class="mb-2 text-lg font-medium uppercase text-ctp-pink lg:text-xl"
                    >
                        Get in touch
                    </p>
                    <a
                        href="mailto:kyle@tayls.dev"
                        class="text-sm text-ctp-text underline hover:cursor-pointer lg:text-base"
                        target="_blank"
                    >
                        kyle@tayls.dev
                    </a>

                    <div class="my-2 h-px w-full bg-ctp-lavender/50"></div>
                    <div class="flex flex-row items-center gap-4">
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
        </div>
    </div>
</footer>
