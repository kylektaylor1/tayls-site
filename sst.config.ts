/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
    app(input) {
        return {
            name: 'tayls-site',
            home: 'aws',
            providers: {
                aws: {
                    profile:
                        input.stage === 'production'
                            ? 'tayls.dev-production'
                            : 'tayls.dev-dev'
                }
            }
        };
    },
    async run() {
        new sst.aws.SvelteKit('SvelteKitTaylsSite', {
            ...($app.stage === 'production' && {
                domain: {
                    name: 'tayls.dev',
                    dns: sst.cloudflare.dns()
                }
            })
        });
    }
});
