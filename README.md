# This is a fork of [scroll-snap](https://github.com/lucafalasco/scroll-snap)

This fork adds a config option to allow snapping to the item currently occupying most of its parent container, as opposed to snapping to the next item in the current scroll direction:

```javascript
  const snapConfig = {
      snapToNearest: true // *OPTIONAL* (default = false)
  }
```

## Original readme:

scroll-snap
===========

[![npm](https://img.shields.io/badge/npm-scroll--snap-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/scroll-snap)
[![npm version](https://img.shields.io/npm/v/scroll-snap.svg?style=flat-square)](https://www.npmjs.com/package/scroll-snap)
[![npm downloads](https://img.shields.io/npm/dm/scroll-snap.svg?style=flat-square)](https://www.npmjs.com/package/scroll-snap)

Snap page when user stops scrolling, basically implements [CSS Scroll Snap Points](https://developer.mozilla.org/en/docs/Web/CSS/CSS_Scroll_Snap_Points), but with a customizable configuration and a consistent cross browser behaviour.

* works in all modern browsers
* `requestAnimationFrame` for 60fps
* customizable configuration
* no additional libraries
* no extra stylesheet

## Installation

```sh
npm install scroll-snap --save
```
or
```sh
yarn add scroll-snap
```

## Usage

Just call the constructor passing a DOM element and a configuration object as parameters, then use:

`bind()` to initialize the scroll snap and bind the listener, accepts an optional callback as parameter to execute once the animation ends.

`unbind()` to remove the listener.

Check out the following code:

```javascript
import ScrollSnap from 'scroll-snap'

const snapConfig = {
  scrollSnapDestination: '90% 0%', // *REQUIRED* scroll-snap-destination css property, as defined here: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination
  scrollTimeout: 100, // *OPTIONAL* (default = 100) time in ms after which scrolling is considered finished
  scrollTime: 300 // *OPTIONAL* (default = 300) time in ms for the smooth snap
}

function callback () {
  console.log('called when snap animation ends')
}

const element = document.getElementById('container')
const snapObject = new ScrollSnap(element, snapConfig)

snapObject.bind(callback)

// unbind the element
// snapObject.unbind();
```

## Contributing

```
git clone https://github.com/lucafalasco/scroll-snap.git
cd scroll-snap
npm install
```

Build for production:
```
npm run build
```

## License

MIT
