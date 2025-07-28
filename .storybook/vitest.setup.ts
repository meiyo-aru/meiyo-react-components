import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from '@storybook/react-vite';
import * as projectAnnotations from './preview';

import '@testing-library/jest-dom'; // Importa matchers como .toBeInTheDocument()
import { cleanup } from '@testing-library/react'; // Limpa o DOM após cada teste
import { afterEach } from 'vitest'; // Hook do Vitest

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
afterEach(() => {
  cleanup();
});