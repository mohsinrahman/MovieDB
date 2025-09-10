/** @type { import('@storybook/react-vite').Preview } */
import { initialize, mswLoader } from "msw-storybook-addon";
initialize({
  onUnhandledRequest: "bypass",
});

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  loaders: [mswLoader],
};

export default preview;
