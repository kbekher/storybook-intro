import { addParameters, configure, addDecorator } from "@storybook/react";
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

import crfTheme from './crfTheme';

import "../bootstrap-reboot.min.css"
import "../bootstrap.css"
import "../bootstrap-grid.css"
import '../main.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addParameters({
    options: {
        theme: crfTheme
    }
})

// Show info and how to use the component << Should be the first one
addDecorator(withInfo({
    inline: true
}));

// Knobs allow to dynamically change content and bring additional funcitonality
addDecorator(withKnobs);

configure(loadStories, module);