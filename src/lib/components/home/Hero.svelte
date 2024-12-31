<script lang="ts">
    import kyleIbiza from '$lib/assets/kyle-ibiza.jpg';
    import XIcon from '../icons/XIcon.svelte';
    import GithubIcon from '../icons/GithubIcon.svelte';
</script>

<div class="container flex items-center gap-12">
    <div class="flex w-1/2 flex-col">
        <h1 class="text-6xl font-bold text-ctp-blue">
            {`Nerd, Traveler &`}
            <br />
            {`Software Developer`}
        </h1>
        <p class="mt-4 text-lg text-ctp-text">
            Graduate from the University of North Carolina at Chapel Hill, I
            incorporate talent and technology to create experiences that tap
            into the culture of the modern digital ecosystem.
        </p>
        <div class="mt-6 flex items-center gap-4">
            <a
                href="https://x.com/taylsspin"
                class="hover:cursor-pointer"
                target="_blank"
            >
                <XIcon className={`size-6`} />
            </a>
            <a
                href="https://github.com/kylektaylor1"
                class="hover:cursor-pointer"
                target="_blank"
            >
                <GithubIcon className={`size-6`} />
            </a>
        </div>
    </div>
    <div class="flex w-1/2 items-center justify-center">
        <img
            src={kyleIbiza}
            alt="Kyle in Ibiza"
            class="h-96 w-96 overflow-hidden rounded-full object-cover"
        />
    </div>
</div>
