<script lang="ts">
    import TextAreaField from '$lib/components/common/TextAreaField.svelte';
    import TextField from '$lib/components/common/TextField.svelte';
    import MailIcon from '$lib/components/icons/MailIcon.svelte';
    import XIcon from '$lib/components/icons/XIcon.svelte';
    import type { ContactForm } from '$lib/utils/validate.utils.ts';

    import { superForm } from 'sveltekit-superforms';

    let { data } = $props();

    // Client API:
    const superform = superForm<ContactForm>(data.form);
    const { message, enhance } = superform;
</script>

<div class="container flex flex-col gap-8">
    <h1 class="text-2xl font-semibold text-ctp-blue lg:text-3xl">Contact Me</h1>

    <div
        class="flex flex-col gap-6 rounded-2xl border border-ctp-lavender bg-ctp-mantle p-6"
    >
        {#if $message}<h3 class="text-lg text-ctp-green">
                {$message}
            </h3>{/if}
        <form
            method="POST"
            action="/contact?/contactFormSubmit"
            use:enhance
            class="flex flex-col gap-4"
        >
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <TextField {superform} field="name" />
                <TextField {superform} field="email" />
            </div>
            <TextAreaField {superform} field="message" />

            <div>
                <button
                    class="rounded-2xl bg-ctp-green px-4 py-2 text-ctp-base"
                    type="submit">Submit</button
                >
            </div>
        </form>
    </div>
    <div class="flex flex-col items-start gap-2">
        <a
            href="mailto:kyle@tayls.dev"
            class="flex items-center gap-4 text-sm/none text-ctp-subtext1 hover:cursor-pointer"
        >
            <MailIcon className={'size-5 text-white'} />
            <span>Email Me</span>
        </a>

        <a
            href="https://x.com/taylsdotdev"
            class="flex items-center gap-4 text-sm/none text-ctp-subtext1 hover:cursor-pointer"
        >
            <XIcon className={'size-4'} />
            <span>DM me on X</span>
        </a>
    </div>
</div>
