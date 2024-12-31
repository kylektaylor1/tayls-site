<script lang="ts">
    import BuildIcon from '../icons/BuildIcon.svelte';
    import RocketIcon from '../icons/RocketIcon.svelte';
    import CodeIcon from '../icons/CodeIcon.svelte';
    import TravelIcon from '../icons/TravelIcon.svelte';

    interface SkillDescriptionT {
        label: string;
        description: string;
        icon: 'CODE' | 'ROCKET' | 'TRAVEL' | 'BUILD';
    }

    const skillItems: SkillDescriptionT[] = [
        {
            label: `Developer`,
            description: `As a skilled full-stack developer, my curiosity leads me to develop robust web applications to solve the modern user's needs. Programming allows me to endlessly pursue my curiosities, which drives my best work.`,
            icon: 'CODE'
        },
        {
            label: `Entrepreneur`,
            description: `I consider myself fortunate to be an entrepreneur, and I am grateful for the opportunities that have come my way. Through hard work, perseverance, and a passion for innovation, I have been able to build successful businesses and make a positive impact in the world.`,
            icon: 'ROCKET'
        },
        {
            label: `Traveller`,
            description: `When I'm not working or tinkering with the my latest side project, I travel the world to explore new places. Immersing myself in different cultures and vibrant communities around the world is something that is hard to beat.`,
            icon: 'TRAVEL'
        },
        {
            label: `Builder`,
            description: `From designing and developing apps and websites to building businesses and even intricate LEGO sets, my passion for creating and problem-solving is evident in all aspects of my life. I thrive on taking on new challenges and bringing ideas to life.`,
            icon: 'BUILD'
        }
    ];
</script>

<div class="container flex w-full flex-col items-start">
    <h3 class="mb-2 text-3xl font-bold text-ctp-blue">My Passions</h3>
    <p class="w-full text-lg text-ctp-text md:w-3/4">
        {`In addition to my professional pursuits, I maintain a variety of hobbies and skills that complement my work ethic. By engaging in diverse activities and pursuing personal growth, I am able to maintain a healthy work-life balance that enhances my overall productivity and performance.`}
    </p>

    <div class="mt-12 grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        {#each skillItems as s}
            <div class="flex items-start gap-4">
                <div class="text-ctp-pink">
                    {#if s.icon === 'BUILD'}
                        <BuildIcon />
                    {/if}
                    {#if s.icon === 'ROCKET'}
                        <RocketIcon />
                    {/if}
                    {#if s.icon === 'CODE'}
                        <CodeIcon />
                    {/if}
                    {#if s.icon === 'TRAVEL'}
                        <TravelIcon />
                    {/if}
                </div>
                <div class="flex flex-col gap-1">
                    <p class="text-2xl font-semibold text-ctp-pink">
                        {s.label}
                    </p>
                    <p class="text-base text-ctp-text">{s.description}</p>
                </div>
            </div>
        {/each}
    </div>
</div>
