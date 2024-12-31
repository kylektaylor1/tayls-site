<script lang="ts">
    import barcaImg from '$lib/assets/kyle-barca-low.jpg';
    import MailIcon from '$lib/components/icons/MailIcon.svelte';
    import XIcon from '$lib/components/icons/XIcon.svelte';
</script>

<div class="container flex flex-col gap-36 lg:flex-row">
    <div class="order-2 flex w-full flex-col gap-6 lg:order-1 lg:w-2/3">
        <h1 class="text-2xl font-semibold text-ctp-blue">
            I'm Kyle Taylor. Get to know me!
        </h1>
        <div class="flex flex-col gap-4 text-base text-ctp-text">
            <p class="">
                {`Ever since I can remember, I always chased difficult things in life. As a young boy, my math and science interests were never quite satiated. From chemistry to calculus, I was the kid who didn't get quite enough from just the classroom. Outside of the classroom, I also was played baseball and football from a young age. Being able to compete in sports and pursue difficult scholarly ahievements, I quickly learnd the value of hard work and perseverance. Through my hard work, I was able to help my high school football team to the best season in school history as the starting right guard, along with finishing third in my class, excelling in math and sciences.`}
            </p>
            <p class="">
                {`Outside of school and sports, I was an avid gamer and tech enthusiast. Everything from tinkering with electronics, to exploring what was possible in the vast worlds of my favorite games, I was always trying to "level up". I'll always say that I was born just about five years too early, as you will find out why later.`}
            </p>
            <p class="">
                {`Continuing to college, I learned that the beginngings of my adult life proved to be the most difficult challenge yet. While I knew I liked math and sciences, I was not too sure what I would like to pursue as a career. After struggling a bit in my freshman year, I took a gap year, where I worked while attending a community college. While this may seem like a step back to some, this was a year where I was able to focus on myself and what I wanted to continue to achieve. Working at a steakhouse, I was able to learn social and communication skills that I still use daily. After this gap year, I was able to continue my education at UNC Chapel Hill. Graduating from UNC Chapel Hill is something I will always cherish, as beyond the classroom, I was able to begin to solidify the adult life I wanted to achieve.`}
            </p>
            <p class="">
                {`Shortly before graduating college, one of my closest friends brought an opportunity to me to join a startup, where we focused on helping students like my past self find opporutnities to gain scholarships to compete in collegiate esports. I say my past self as collegiate esports circa 2019 (when I graduated college) was something that was still small, but primed to exploe. With the pandemic to shortly follow, gaming exploded from something that while had a large player base, to where gaming is today, where everyone plays. With this opportunity at Stay Plugged In (SPIN) right in front of me, and my past now knowing that if I was born just a few years later, I could have absolutly taken advantage of such an oppporutinity to compete in college on a scholarship. I immediately got to work with SPIN, where I still am to this day as the Director of Technology.`}
            </p>
            <p class="">
                {`Now, how did I become a developer you may be wondering? Through the startup, we had a need for someone with technical capabilities to accomplish the company's (now quite endless) list of needs. With this, along with my love in tech, I quickly jumped at the bit to quite literally learn by doing. While the needs within the company were met with a third party in the beginnning, paying a third party for small changes was something not financially effective. With this, in my spare time, I dove head first into courses, classes and side projects to quickly bring my personal programming skills up to par. During this time, I fell in love with everything from writing small marketing websites to creating full stack applications to support our platform requirements.`}
            </p>
            <p class="">
                {`Currently (beginning 2025), I am an avid developer, writing code for SPIN during the day and for my side projects at night. I take pride in not just being someone that can write efficient & scalable code, but creating solutions for users to solve the problem they are facing. It's one thing to be able to turn a precisely defined business need into code, but it's a whole different world of capaibility to be able to identify user & business interests and/or problems into a production-deployed application.`}
            </p>
            <p class="">
                {`When I am not programming, I amd either planning my next travel stint around the world, or on said travel stint. Immersing myself in other county's culture is truly something special. My partner and I love to experience what the entire world has to offer and have just only scracthed the surface of where we want to go. So far, I have Canada, France, Spain, and Italy checked off the list, visiting incredible cities like Paris and Rome. However, the true gems are in the small towns, such as Calella de Palafrugell or the Old Town in Ibiza.`}
            </p>
        </div>
    </div>
    <div class="order-1 flex w-full flex-col gap-8 lg:order-2 lg:w-1/3">
        <img
            src={barcaImg}
            alt="Kyle in Barcelona"
            class="max-h-[600px] w-4/5 rotate-2 rounded-lg object-cover object-center lg:max-h-none lg:w-full"
        />
        <div class="flex flex-col gap-2">
            <a
                href="mailto:kyle@tayls.dev"
                class="flex items-center gap-4 text-sm/none text-ctp-subtext1 hover:cursor-pointer"
            >
                <MailIcon className={'size-5 text-white'} />
                <span class="">Email Me</span>
            </a>

            <a
                href="https://x.com/taylsspin"
                class="flex items-center gap-4 text-sm/none text-ctp-subtext1 hover:cursor-pointer"
            >
                <XIcon className={'size-4'} />
                <span class="">Follow me on X</span>
            </a>
        </div>
    </div>
</div>
