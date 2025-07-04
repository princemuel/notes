import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
  framework: '@storybook/sveltekit',
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-docs',
    '@storybook/addon-svelte-csf',
  ],
};
export default config;
