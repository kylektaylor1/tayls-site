import { contactFormSchema } from '$lib/utils/validate.utils';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { contactTable } from '$lib/server/db/schema';

export const load = async () => {
    const form = await superValidate(zod(contactFormSchema));

    // Always return { form } in load functions
    return { form };
};

export const actions = {
    contactFormSubmit: async ({ request }) => {
        const form = await superValidate(request, zod(contactFormSchema));
        console.log(form);

        if (!form.valid) {
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        // TODO: Do something with the validated form.data
        //
        try {
            await db.insert(contactTable).values({
                name: form.data.name,
                email: form.data.email,
                message: form.data.message
            });
            console.log('db write');
        } catch (e) {
            console.error(e);
        }

        // Display a success status message
        return message(form, 'Form posted successfully!');
    }
} satisfies Actions;
