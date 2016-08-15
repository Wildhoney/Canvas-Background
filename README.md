# Canvas Background

> A super useful function for applying a background colour to a canvas element before invoking toDataURL.

> **Note:** Pilfered from [Mick Chambers](http://www.mikechambers.com/blog/2011/01/31/setting-the-background-color-when-generating-images-from-canvas-todataurl/).<br />
> **Further Note:** [Likely doesn't deserve](http://www.haneycodes.net/npm-left-pad-have-we-forgotten-how-to-program/) its own npm package.

> npm: npm i canvas-background --save

## Getting Started

Use `canvas-background` to apply a background colour to the `canvas` element before exporting it via `toDataURL`.

```javascript
import withBackground from 'canvas-background';

const canvas = document.querySelector('canvas');
const data = withBackground(canvas, '#ffffff', {
    type: 'image/jpeg',
    encoderOptions: 1.0
})
```

With thanks to [mickchambers.com](http://www.mikechambers.com/blog/2011/01/31/setting-the-background-color-when-generating-images-from-canvas-todataurl/).
