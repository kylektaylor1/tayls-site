<script lang="ts">
    import type { Project as ProjectT } from '$lib/types/generic.types';
    import Project from '$lib/components/project/Project.svelte';

    const projects: ProjectT[] = [
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
                'DigitalOcean',
                'Deployed to Vercel'
            ]
        },
        {
            title: 'Emerge OMS',
            description:
                'After seeing quick growth, a sister merchandise and e-commerce company (to SPIN) required a custom order management system. Working with the founder directly, I created a web application to automate several workflows. The order sync workflow is as follows: upon a purchase via the Shopify site, a webhook triggered (a) the order to be synced to an application database, (b) calculated storefront revenue share, and (c) listed line items to be processed by third party vendors in a table to track the stages of production. The system allows for vendors and administrators to interact with orders at various stages of production.',
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
                'Shopify GQL',
                'Upstash - QStash',
                'Deployed to Vercel'
            ]
        },
        {
            title: 'SPIN Coca-Cola All-Stars',
            description: `As the sole developer on the project, this web app delivers critical business needs for the company’s (SPIN) marquee annual event. From database migrations, to the front end UI, every line of code was written to create a seamless user experience to gather nominations to become an All-Star. The system is designed to support multiple roles, allowing for nominees, nominators, judges and internal admins to access and mutate the appropriate data. In addition to meeting the event's needs, I also worked closely with Coca-Cola Consolidated to ensure sponsor requirements were met.`,
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
                'Node.js',
                'Deployed to Vercel'
            ]
        },
        {
            title: 'Clash Challenges',
            description: `Clash Challenges is a tournament platform specifically for esports competitions. This platform is build as a multi-tenant, multi-role system, where organizations can be incorporated into the system, which creates them an "espn.com"-esque website to serve up to date tournament, league and related data. The application has a centric dashboard for admins and users to inteact with the appropriate data for them. Admins can create entire events, with rosters, varying tournament structures and update data as needed.`,
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
                'DigitalOcean',
                'Deployed to Vercel'
            ]
        },
        {
            title: 'My Portfolio Website',
            description: `"tayls.dev" hosts my personal story, blog and travel photography collections. I often use this site as a playground for new ideas, new releases and new technology to test and validate new features to then use in larger applications for my professional pursuits.`,
            siteUrl: 'https://tayls.dev',
            ghLink: 'https://tayls.dev',
            callouts: ['No real callouts or impact here :)'],
            type: 'PROFESSIONAL',
            tech: ['Svelte', 'SvelteKit', 'Node.js', 'SST', 'Deployed to AWS']
        }
    ];
</script>

<div class="container flex flex-col gap-36">
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
            <h1 class="text-2xl font-semibold text-ctp-blue">My Projects</h1>
            <p class="text-base text-ctp-text">
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
