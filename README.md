# Elementa Style Guide

Elementa is a Vue.js component style guide, built with Vue for Vue projects.

**Warning:** this project is in a very early phase. You should not use it except to experiment with it, or if you want to contribute.

## Quick start

```bash
npm install --save-dev @elementa/core
```

- [Create an Elementa Element file](#elements).
- Run `npx elementa` to start the Elementa development server.

Live reloading does not work when adding new Element files, restart Elementa after adding a new Element.

## Configuration

If you want to change the default configuration, you can create an `elementa.config.js` file in the root directory of your project.

```js
// elementa.config.js
module.exports = {
  // Add custom webpack configuration.
  // See: https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  configureWebpack: {},
  elementSuffix: 'elm',
  // Define your navigation schema.
  navigationSchema: {
    components: {
      title: 'Components',
      children: {
        // If you want to add an element as child of `App`
        // you must define its parent as `components.app`.
        app: {
          title: 'App',
        },
      },
    },
  },
  paths: {
    root: process.cwd(),
    // The `<rootDir>` placeholder is automatically
    // replaced by the path you've specified above.
    src: '<rootDir>/src',
  },
};
```

## Elements

Elements are the pages of your style guide. Every Element describes one, or a group of similar components.

```bash
src
├── App.vue
└── components
    ├── HelloWorld.elm.vue
    └── HelloWorld.vue
```

Every file inside your `src` directory which ends with `.elm.vue` (this can be changed in the configuration) is automatically detected as an Element and added to the style guide.

```html
<template>
  <elementa-element>
    <template slot="title">Hello World</template>

    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

    <elementa-demo :controls="controls">
      <hello-world
        :title="controls.title.value"
        :status="controls.status.value"
      >
      </hello-world>
    </elementa-demo>
  </elementa-element>
</template>

<script>
/* elementa-navigation: [components|hello-world|Hello World] */

import ElementaDemo from '@elementa/core/src/components/ElementaDemo.vue';
import ElementaElement from '@elementa/core/src/components/ElementaElement.vue';

import HelloWorld from './HelloWorld.vue';

export default {
  name: 'HelloWorldElm',
  components: {
    ElementaDemo,
    ElementaElement,
    HelloWorld,
  },
  data() {
    return {
      // Controls make it possible to manipulate the data
      // of your component directly in the style guide.
      controls: {
        title: {
          label: 'Title',
          type: 'text',
          value: 'Hello',
        },
        status: {
          label: 'Status',
          type: 'select',
          value: 'success',
          options: ['success', 'error'],
        },
      },
    };
  },
};
</script>
```

### Metadata

The `/* elementa-navigation: [components|hello-world|Hello World] */` string inside the `<script>` section of the component, defines the Elements metadata.

```js
// Format
/* elementa-navigation: [PARENT|SLUG|TITLE] */

// Default
/* elementa-navigation: [components|button|Button] */

// Nested parent
/* elementa-navigation: [components.app|button|Button] */
```

When defining a nested parent, keep in mind that you have to define the basic structure in the `navigationSchema` property of the configuration.

### Demo

![Elementa Element with Controls](https://raw.githubusercontent.com/elementa-style-guide/core/master/assets/elementa-element-controls-demo.gif)

## Controls

Currently only Controls of type `text` and `select` are supported, more to come.

## Theming

Coming soon!

## About

### Author

Markus Oberlehner  
Website: https://markus.oberlehner.net  
Twitter: https://twitter.com/MaOberlehner  
PayPal.me: https://paypal.me/maoberlehner

### License

MIT
