/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | TailwindConfig } */
const config = {
    arrowParens: 'always',
    printWidth: 80,
    singleQuote: true,
    jsxSingleQuote: true,
    semi: true,
    trailingComma: 'all',
    tabWidth: 4,
    plugins: ['prettier-plugin-tailwindcss'],
    tailwindConfig: 'tailwind.config.ts'
};

module.exports = config;
