import { withThemeByDataAttribute } from '@storybook/addon-themes';

import type { Preview, SvelteRenderer } from '@storybook/sveltekit';

import '@fontsource-variable/inter';
import '@fontsource-variable/noto-serif';
import '@fontsource-variable/source-code-pro';
import '../src/app.css';

const preview: Preview = {
  parameters: {
    docs: { toc: true, story: { height: '200px' } },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    // backgrounds: {
    // 	default: 'light',
    // 	values: [
    // 		{ name: 'light', value: '#ffffff' },
    // 		{ name: 'dark', value: '#1a1a1a' }
    // 	]
    // }
  },
  decorators: [
    withThemeByDataAttribute<SvelteRenderer>({
      themes: { light: 'light', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-scheme',
    }),
  ],
};

export default preview;
