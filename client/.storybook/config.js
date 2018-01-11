/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/react';

function loadStories() {
  require('../app/stories/index');
  require('../app/stories/inputs');
}

configure(loadStories, module);
