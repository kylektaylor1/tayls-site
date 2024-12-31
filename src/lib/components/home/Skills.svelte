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
    <h2 class="text-3xl font-bold text-ctp-blue">My Skills</h2>
    <div
        class="grid grid-cols-1 divide-x divide-ctp-lavender border border-ctp-lavender lg:grid-cols-2"
    >
        <div class="flex flex-col gap-4 p-6">
            <h3 class="text-xl font-medium text-ctp-pink">
                {`Software Development`}
            </h3>
            <p class="text-base text-ctp-text">
                {`Passionate about solving user and business problems with scalable and robust programs. TypeScript, JavaScript, Python, SQL.`}
            </p>
            <div class="flex flex-col gap-2">
                <p class="text-sm text-ctp-subtext1">Technologies</p>
                <div class="flex flex-row flex-wrap gap-1">
                    {#each softDevSkills as s}
                        <div
                            class="rounded-full bg-ctp-rosewater px-2 py-1 text-sm"
                        >
                            {s}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-4 p-6">
            <h3 class="text-xl font-medium text-ctp-pink">{`Frontend Dev`}</h3>
            <p class="text-base text-ctp-text">
                {`Experience in creating user interfaces, from marketing sites to dashboard applications. React, Next, HTML, CSS.`}
            </p>
            <div class="flex flex-col gap-2">
                <p class="text-sm text-ctp-subtext1">Technologies</p>

                <div class="flex flex-row flex-wrap gap-1">
                    {#each frontDevSkills as s}
                        <div
                            class="rounded-full bg-ctp-rosewater px-2 py-1 text-sm"
                        >
                            {s}
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
