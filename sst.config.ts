/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
    app(input) {
        return {
            name: 'tayls-site',
            removal: input?.stage === 'production' ? 'retain' : 'remove',
            protect: ['production'].includes(input?.stage),
            home: 'aws',
            providers: {
                aws: {
                    profile:
                        input.stage === 'production'
                            ? 'tayls.dev-production'
                            : 'tayls.dev-dev'
                },
                cloudflare: '5.45.0'
            }
        };
    },
    async run() {
        const vpc = new sst.aws.Vpc('TaylsSiteVpc');
        const cluster = new sst.aws.Cluster('TaylsSiteCluster', { vpc });

        cluster.addService('TaylsSiteSvelteKit', {
            loadBalancer: {
                ports: [{ listen: '80/http', forward: '3000/http' }],
                domain: {
                    name: 'tayls.dev',
                    dns: sst.cloudflare.dns()
                }
            },
            dev: {
                command: 'pnpm vite dev'
            }
        });
    }
});
