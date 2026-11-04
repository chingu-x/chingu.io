import type { StorybookConfig } from '@storybook/tanstack-react';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [    {
      name: "addon-storybook-sync",
      options: {
        port: Number(process.env.WEBSTORM_ADDON_STORYBOOK_SYNC_PORT) || undefined,
      },
    },
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp"
  ],
  "framework": "@storybook/tanstack-react"
};
export default config;