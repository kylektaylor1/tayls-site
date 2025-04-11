<script lang="ts">
    import PillText from '../common/PillText.svelte';

    const languages: string[] = [
        'TypeScript | Proficient',
        'JavaScript | Proficient',
        'Go | Emerging',
        'SQL | Proficient',
        'CSS | Proficient',
        'HTML | Proficient',
        'Python | Emerging',
        'Bash | Emerging'
    ];

    const technologies: string[] = [
        'React.js',
        'Next.js',
        'Astro',
        'Vite',
        'Tailwindcss',
        'Svelte',
        'Node.js',
        'Bun',
        'Express',
        'Hono',
        'GraphQL',
        'Postgres',
        'MySQL',
        'SQLite',
        'Docker',
        'GitHub Actions',
        'Jest',
        'Playwright',
        'Vitest'
    ];

    const concepts: string[] = [
        'REST API',
        'GraphQL API',
        'Severless',
        'OOP',
        'CI/CD',
        'Authentication & Authorization'
    ];
</script>

<div class="container flex flex-col gap-6">
    <h2 class="mb-2 text-2xl font-semibold text-ctp-blue lg:text-3xl">
        My Skills
    </h2>
    <div
        class="grid grid-cols-1 divide-y divide-ctp-lavender rounded-2xl border border-ctp-lavender md:grid-cols-3 md:divide-x"
    >
        <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-2">
                <h3 class="text-lg font-medium text-ctp-pink lg:text-xl">
                    {`Languages`}
                </h3>
            </div>
            <div class="flex flex-row flex-wrap gap-2">
                {#each languages as l}
                    <PillText label={l} />
                {/each}
            </div>
        </div>
        <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-2">
                <h3 class="text-lg font-medium text-ctp-pink lg:text-xl">
                    {`Techologies`}
                </h3>
            </div>
            <div class="flex flex-row flex-wrap gap-1">
                {#each technologies as t}
                    <PillText label={t} />
                {/each}
            </div>
        </div>
        <div class="flex flex-col gap-4 p-6">
            <div class="flex flex-col gap-2">
                <h3 class="text-lg font-medium text-ctp-pink lg:text-xl">
                    {`Concepts`}
                </h3>
            </div>
            <div class="flex flex-row flex-wrap gap-1">
                {#each concepts as c}
                    <PillText label={c} />
                {/each}
            </div>
        </div>
    </div>
</div>
