// .storybook/preview.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';

const theme = {
  colors: {
    logstack: '…',
    grey: '…',
  },
};

export const decorators = [
  (Story:any) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];