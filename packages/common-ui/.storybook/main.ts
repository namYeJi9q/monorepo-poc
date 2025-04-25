// .storybook/main.js
module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
  previewHead: "./.storybook/preview.tsx",
  babel: async (options) => ({
    ...options,
    plugins: [
      ...(options.plugins || []),
      ["styled-components", { displayName: true }],
    ],
  }),
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
