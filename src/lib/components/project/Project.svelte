<script lang="ts">
    import type { Project } from '$lib/types/generic.types';
    import BriefcaseIcon from '$lib/components/icons/BriefcaseIcon.svelte';
    import BuildingOfficeIcon from '$lib/components/icons/BuildingOfficeIcon.svelte';
    import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
    import LinkIcon from '$lib/components/icons/LinkIcon.svelte';

    let {
        title,
        description,
        siteUrl,
        type,
        company,
        ghLink,
        callouts,
        tech
    }: Project = $props();
</script>

<div
    class="flex flex-col gap-6 rounded-lg border border-ctp-lavender bg-ctp-mantle p-8"
>
    <div class="flex flex-col gap-2">
        <p class="mb-1 text-2xl font-semibold uppercase text-ctp-pink">
            {title}
        </p>
        <p class="text-base text-ctp-text">{description}</p>
    </div>
    <div class="flex flex-col gap-2 whitespace-nowrap">
        <p class="text-sm text-ctp-subtext1">Details</p>

        <div class="flex flex-row flex-wrap gap-8 gap-y-3 text-base">
            {#if type === 'PROFESSIONAL'}
                <div class="flex items-center gap-3">
                    <BriefcaseIcon className={'size-5 text-ctp-text'} />
                    <p class="text-ctp-text">
                        {'Professional'}
                    </p>
                </div>
                <div class="flex items-center gap-3">
                    <BuildingOfficeIcon className={'size-5 text-ctp-text'} />
                    <p class="text-ctp-text">
                        {company}
                    </p>
                </div>
            {/if}
            {#if type === 'PERSONAL'}
                <div class="flex items-center gap-3">
                    <BriefcaseIcon className={'size-5 text-ctp-text'} />
                    <p class="text-ctp-text">
                        {'Personal'}
                    </p>
                </div>
            {/if}

            {#if ghLink}
                <a
                    href={ghLink}
                    class="flex items-center gap-3 hover:cursor-pointer hover:underline"
                >
                    <GithubIcon className={'size-5'} />
                    <p class="text-ctp-text">
                        {'View Repository'}
                    </p>
                </a>
            {/if}
            {#if siteUrl}
                <a
                    href={siteUrl}
                    class="flex items-center gap-3 hover:cursor-pointer hover:underline"
                >
                    <LinkIcon className={'size-5 text-ctp-text'} />
                    <p class="text-ctp-subtext1">
                        {'View Site'}
                    </p>
                </a>
            {/if}
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-sm text-ctp-subtext1">Impact & Callouts</p>
        <ul class="list-inside list-disc gap-1 text-base text-ctp-text">
            {#each callouts as c}
                <li>{c}</li>
            {/each}
        </ul>
    </div>
    <div class="flex flex-col gap-2">
        <p class="text-sm text-ctp-subtext1">Tech Stack</p>
        <div class="flex flex-row flex-wrap gap-2">
            {#each tech as t}
                <div
                    class="rounded-lg bg-ctp-green/50 px-2 py-1 text-sm text-ctp-base"
                >
                    {t}
                </div>
            {/each}
        </div>
    </div>
</div>
