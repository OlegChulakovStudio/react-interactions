# react-interactions
React component for micro-interactions

[See examples](http://react-interactions.chulakov.ru)


## Install
```
npm install react-interactions --save
```

## How to use

Be sure to include styles at some point, probably during your bootstrapping:
```js
import 'chramework/dist/main.css';
```

Use `Tap` component:
```js
import React from 'react';
import Tap from 'react-interactions';

const MyButton = () => {
  <button className="MyButton">
    Click me
    <Tap scale fade waves />
  </button>
}

export default MyButton;
```


## Roadmap
+ Drop dependencies
+ Set scale level
+ Set fade level


## Publishing to npm
1. Make production build `npm run build`
2. Change current version in `package.json`.
3. If you did some changes in styleguide styles, run `npm styleguide:build`
4. Run `npm publish` to publish the package to npm.
