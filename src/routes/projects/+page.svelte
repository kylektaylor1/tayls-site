<script lang="ts">
    import type { Project as ProjectT } from '$lib/types/generic.types';
    import Project from '$lib/components/project/Project.svelte';
    import { PageH1 } from '$lib/components/common/Typography.svelte';

    const projects: ProjectT[] = [
        {
            title: 'Stay Plus+',
            description: `A monolith of one server with four websites, powering the new expansion of Stay Plugged In. The REST API server supports the needs of four websites, three of which are public facing websites with one administrative dashboard. The REST API server manages secure access via API keys and JWT tokens for user authentication and authorization to application data resources.`,
            company: 'Stay Plugged In',
            siteUrl: 'https://plus.staypluggedin.com',
            callouts: [
                'Created to serve multiple "client islands" to meet quick-paced business demands for iteration and sub-brand product launches quickly and adeptly.',
                'Concepts: Monorepo CI/CD, REST API, Multi-Role User Access, S3 Object Storage'
            ],
            type: 'PROFESSIONAL',
            tech: [
                'Astro',
                'React.js',
                'Severless',
                'Node.js',
                'Hono',
                'SQLite',
                'Turborepo',
                'DigitalOcean'
            ]
        },
        {
            title: 'Stay Plugged In',
            description: `As the product manager and one of the contributing developers, this full stack web application serves thousands of users to find or recruit for scholarship opportunities. Within my role, I ideate and communicate with several company department leaders to translate business needs for customers into deployed features.`,
            company: 'Stay Plugged In',
            siteUrl: 'https://staypluggedin.com',
            callouts: [
                'Platform has facilitated over $40 million in scholarships between institution and student.',
                'Platform supports over 100k social interactions, consiting of messaging, follows and profile views, per month.'
            ],
            type: 'PROFESSIONAL',
            tech: [
                'Next.js',
                'React.js',
                'SCSS',
                'SSR + SSG',
                'Severless',
                'Node.js',
                'Contentful',
                'Hasura',
                'Stripe',
                'DigitalOcean'
            ]
        },
        {
            title: 'Emerge OMS',
            description:
                'An order management system, where webhooks are consumed from Shopify to sync order data to allow administrative control over orders, products and profit sharing. The system allows for vendors and administrators to interact with orders at various stages of production and generate revenue and cost reports.',
            company: 'Emerge Apparel',
            callouts: [
                'This OMS has saved affected employees 15+ labor hours a week.',
                'The application allowed for up to date revenue share amounts and order processing to be viewed by company clients.'
            ],
            type: 'PROFESSIONAL',
            tech: [
                'Next.js',
                'React.js',
                'Severless',
                'Node.js',
                'Shopify GraphQL API',
                'Webhooks',
                'Upstash - QStash'
            ]
        },
        {
            title: 'SPIN Coca-Cola All-Stars',
            description: `As the sole contributor, this web app collects nominations for the marquee sponsored event. The system is designed to support multiple roles, allowing for nominees, nominators, judges and internal admins to access and mutate the appropriate data.`,
            company: 'Stay Plugged In',
            siteUrl: 'https://allstars.staypluggedin.com',
            callouts: [
                'Application ran without downtime for the two nomination periods over two years.',
                'Application allowed for seamless nomination collection, along with data collection and manipulation to present a seamless view to judges.'
            ],
            type: 'PROFESSIONAL',
            tech: [
                'Next.js',
                'React.js',
                'ShadcnUI',
                'Tailwindcss',
                'Turbo',
                'Severless',
                'Node.js'
            ]
        },
        {
            title: 'Custom RTMP / SRT Relay Broadcast Server',
            description: `A set of containerized services that (1) ingest RTMP feeds from a broadcast client, then (2) relay the A/V feed via the SRT relay protocol to an end consumer client. This allows the broadcaster to be able to capture 1080p/60fps A/V feeds over the network (and/or remotely) to then produce a live stream.`,
            company: 'Stay Plugged In',
            callouts: [
                'Includes concepts: RTMP Ingest, SRT Relay, FFMPEG, Docker Containers, Microsservices'
            ],
            type: 'PROFESSIONAL',
            tech: [
                'Express',
                'Docker',
                'Bash Scripts',
                'FFMPEG',
                'RTMP',
                'SRT Relay',
                'DigitalOcean'
            ]
        },
        {
            title: 'Clash Challenges',
            description: `A pairing of a multi-tenant suite of client sites + an administrative dashboard to manage tournament operations, focused on esports. The stack allowed for the management of long running events, seasons, and brackets across a multi-organizational level of access for many users.`,
            company: 'Stay Plugged In',
            siteUrl: 'https://clashchallenges.io',
            callouts: [
                'The application has served three companies within multi-year operations, hosting leagues and competitions.',
                'The league generation and management features have saved on average 20 hours of work per week, compared to manual tracking methods.'
            ],
            type: 'PROFESSIONAL',
            tech: [
                'Next.js',
                'React.js',
                'GraphQL',
                'Turbo',
                'ShadcnUI',
                'Tailwindcss',
                'Severless',
                'Node.js',
                'Hasura',
                'DigitalOcean'
            ]
        },
        {
            title: 'My Portfolio Website',
            description: `"tayls.dev" hosts my personal story, blog and travel photography collections. I often use this site as a playground for new ideas, new releases and new technology to test and validate new features to then use in larger applications for my professional pursuits.`,
            siteUrl: 'https://tayls.dev',
            ghLink: 'https://github.com/kylektaylor1/tayls-site',
            callouts: ['No real callouts or impact here :)'],
            type: 'PERSONAL',
            tech: ['Svelte', 'SvelteKit', 'Node.js', 'Deployed to Vercel']
        }
    ];
</script>

<div class="container flex flex-col gap-36">
    <div class="flex flex-col gap-8 lg:gap-12">
        <div class="flex flex-col gap-4">
            {@render PageH1('My Projects')}
            <p class="text-sm text-ctp-text lg:text-base">
                {`Take a look at my prior and ongoing projects, both personal and professional projects.`}
            </p>
        </div>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {#each projects as p}
                <Project {...p} />
            {/each}
        </div>
    </div>
</div>
