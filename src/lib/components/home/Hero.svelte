<script lang="ts">
    import kyleIbiza from '$lib/assets/kyle-ibiza.jpg';
    import XIcon from '../icons/XIcon.svelte';
    import GithubIcon from '../icons/GithubIcon.svelte';
    import LinkedinIcon from '../icons/LinkedinIcon.svelte';
</script>

<div class="container flex items-center gap-12">
    <div class="flex w-full flex-col lg:w-1/2">
        <h1 class="text-3xl font-bold text-ctp-blue lg:text-6xl">
            {`Nerd, Traveler &`}
            <br />
            {`Software Developer`}
        </h1>
        <p class="mt-4 text-base text-ctp-text lg:text-lg">
            Graduate from the University of North Carolina at Chapel Hill, I
            incorporate talent and technology to create experiences that tap
            into the culture of the modern digital ecosystem.
        </p>
        <div class="mt-6 flex items-center gap-4">
            <a
                href="https://x.com/taylsdotdev"
                class="hover:cursor-pointer"
                target="_blank"
            >
                <XIcon className={`size-4 lg:size-6`} />
            </a>
            <a
                href="https://github.com/kylektaylor1"
                class="hover:cursor-pointer"
                target="_blank"
            >
                <GithubIcon className={`size-4 lg:size-6`} />
            </a>
            <a
                href="https://www.linkedin.com/in/kyle-taylor-4588ab1b3/"
                class="hover:cursor-pointer"
                target="_blank"
            >
                <LinkedinIcon className={`size-4 lg:size-6`} />
            </a>
        </div>
    </div>
    <div class="hidden w-1/2 items-center justify-center lg:flex">
        <img
            src={kyleIbiza}
            alt="Kyle in Ibiza"
            class="h-96 w-96 overflow-hidden rounded-full object-cover"
        />
    </div>
</div>
