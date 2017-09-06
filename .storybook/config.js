import React from 'react';
import { configure, addDecorator, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';

addDecorator((story) => {
  return (story());
});

function getLink(href, text) {
  return `<a href=${href} rel="noopener noreferrer" target="_blank">${text}</a>`;
}

const README = getLink('https://github.com/yyssc/validate-float-input/blob/master/README.md', 'README');
const wrapperSource = getLink('https://github.com/yyssc/validate-float-input/tree/master/examples', 'wrapper source');

const helperText = `All examples are built using a wrapper component that is not exported by
  validate-float-input. Please see the ${README} for more information about minimal setup or explore
  the ${wrapperSource} to see how to integrate validate-float-input into your own app.`;

addDecorator(story => (
  <div>
    <div
      style={{
        background: '#fff',
        height: 6 * 8,
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '8px 40px 8px 8px',
        overflow: 'scroll',
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: helperText }} />
    </div>

    <div style={{ marginTop: 7 * 8 }}>
      {story()}
    </div>
  </div>
));

setOptions({
  name: 'VALIDATE-FLOAT-INPUT',
  url: 'https://github.com/yyssc/validate-float-input',
});

function loadStories() {
  require('../stories/HelloWorld');
  require('../stories/ValidateFloatInput');
}

setAddon(infoAddon);

configure(loadStories, module);
