<script lang="ts">
    import type { InputConstraint, SuperFormError } from 'sveltekit-superforms';
    import type {
        SuperFormData,
        SuperFormErrors
    } from 'sveltekit-superforms/client';

    type Props = {
        form: SuperFormData;
        errors: SuperFormError;
        constraints: InputConstraint;
    };

    let {} = $props();
</script>

<label for="name">Name</label>
<input
    type="text"
    name="name"
    bind:value={$form.name}
    aria-invalid={$errors.name ? 'true' : undefined}
    {...$constraints.name}
/>
{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
