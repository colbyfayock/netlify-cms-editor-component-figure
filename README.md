# Figure Netlify CMS Editor Component

Use the native HTML `<figure>` element in Netlify CMS to add an image and caption it!

## Install
Add the package to your project:
```shell
yarn add netlify-cms-editor-component-figure
or
npm install --save netlify-cms-editor-component-figure
```

Import and register the component next to your configuration
```js
// src/cms/cms.js

import { registerEditorComponent } from 'netlify-cms-app'
import { Figure } from 'netlify-cms-editor-component-figure';

registerEditorComponent(Figure);
```

## How to use
Once susccessfully added, you'll now have an additional option in the + dropdown for a Figure.

## Support

For help with this widget, open an [issue](https://github.com/colbyfayock/netlify-cms-editor-component-figure) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
