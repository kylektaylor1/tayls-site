<script lang="ts" module>
    type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
    import {
        formFieldProxy,
        type SuperForm,
        type FormPathLeaves
    } from 'sveltekit-superforms';

    let {
        superform,
        field,
        ...otherProps
    }: { superform: SuperForm<T>; field: FormPathLeaves<T> } = $props();

    const { value, errors, constraints } = formFieldProxy(superform, field);
    const label = field
        .split('')
        .map((s, idx) => (idx === 0 ? s.toUpperCase() : s))
        .join('');
</script>

<label class="text-sm text-ctp-subtext1">
    <span class="ml-4">{label}</span>
    <br />
    <textarea
        class="mt-1 block w-full rounded-2xl border border-ctp-lavender bg-ctp-surface0 px-3 py-2 text-ctp-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ctp-lavender disabled:cursor-not-allowed"
        name={field}
        rows={4}
        aria-invalid={$errors ? 'true' : undefined}
        bind:value={$value}
        {...$constraints}
        {...otherProps}
    ></textarea>
</label>
{#if $errors}<span class="text-ctp-red">{$errors}</span>{/if}
