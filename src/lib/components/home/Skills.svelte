<script lang="ts">
    const softDevSkills: string[] = [
        'Node',
        'Hono.js',
        'Nest.js',
        'Bun',
        'Rest API',
        'PostgreSQL',
        'MySQL',
        'SQLite',
        'Hasura',
        'AWS',
        'DigitalOcean',
        'Linux',
        'Ubuntu',
        'Arch'
    ];

    const frontDevSkills: string[] = [
        'React.js',
        'Next.js',
        'Svelte',
        'GraphQL',
        'TanStack Query',
        'Astro',
        'Tailwindcss',
        'SCSS'
    ];
</script>

<div class="container flex flex-col gap-6">
    <h2 class="mb-2 text-2xl font-semibold text-ctp-blue lg:text-3xl">
        My Skills
    </h2>
    <div
        class="grid grid-cols-1 divide-x divide-ctp-lavender border border-ctp-lavender lg:grid-cols-2"
    >
        <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-2">
                <h3 class="text-lg font-medium text-ctp-pink lg:text-xl">
                    {`Software Development`}
                </h3>
                <p class="text-sm text-ctp-text lg:text-base">
                    {`Passionate about solving user and business problems with scalable and robust programs. TypeScript, JavaScript, Python, SQL.`}
                </p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-xs text-ctp-subtext1 lg:text-sm">Technologies</p>
                <div class="flex flex-row flex-wrap gap-1">
                    {#each softDevSkills as s}
                        <div
                            class="rounded-2xl bg-ctp-rosewater px-2 py-1 text-xs lg:text-sm"
                        >
                            {s}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-2">
                <h3 class="text-lg font-medium text-ctp-pink lg:text-xl">
                    {`Frontend Dev`}
                </h3>
                <p class="text-sm text-ctp-text lg:text-base">
                    {`Experience in creating user interfaces, from marketing sites to dashboard applications. React, Next, HTML, CSS.`}
                </p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-xs text-ctp-subtext1 lg:text-sm">Technologies</p>

                <div class="flex flex-row flex-wrap gap-1">
                    {#each frontDevSkills as s}
                        <div
                            class="rounded-2xl bg-ctp-rosewater px-2 py-1 text-xs lg:text-sm"
                        >
                            {s}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
