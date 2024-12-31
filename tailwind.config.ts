import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import ctp from '@catppuccin/tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem'
            },
            fontFamily: {
                'geist-mono': ['GeistMono', ...defaultTheme.fontFamily.mono]
            }
        }
    },
    plugins: [
        typography,
        forms,
        containerQueries,
        ctp({ defaultFlavour: 'mocha', prefix: 'ctp' })
    ]
} satisfies Config;
