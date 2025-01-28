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
            },
            typography: () => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': '#cdd6f4', // ctp text
                        '--tw-prose-headings': '#f5c2e7', // ctp pink
                        '--tw-prose-lead': '#f5c2e7',
                        '--tw-prose-links': '#74c7ec', // ctp sapphire
                        '--tw-prose-bold': '#cdd6f4',
                        '--tw-prose-counters': '#f5c2e7',
                        '--tw-prose-bullets': '#f5c2e7',
                        '--tw-prose-hr': '#b4befe',
                        '--tw-prose-quotes': '#f5e0dc', // ctp rosewater
                        '--tw-prose-quote-borders': '#f2cdcd', // ctp flamingo
                        '--tw-prose-captions': '#f2cdcd',
                        '--tw-prose-code': '#a6e3a1', // ctp green
                        '--tw-prose-pre-code': '#a6e3a1', // ctp green
                        '--tw-prose-pre-bg': '#11111b', // ctp crust
                        '--tw-prose-th-borders': '#b4befe', // ctp lavendar
                        '--tw-prose-td-borders': '#b4befe'
                    }
                }
            })
        }
    },
    plugins: [
        typography,
        forms,
        containerQueries,
        ctp({ defaultFlavour: 'mocha', prefix: 'ctp' })
    ]
} satisfies Config;
