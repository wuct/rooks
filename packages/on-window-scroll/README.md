# @rooks/use-on-window-scroll

### A React hook for adding an event listener for window scroll
<br/>

[![Build Status](https://travis-ci.org/imbhargav5/rooks.svg?branch=master)](https://travis-ci.org/imbhargav5/rooks) ![](https://img.shields.io/npm/v/@rooks/use-on-window-scroll/latest.svg) ![](https://img.shields.io/npm/l/@rooks/use-on-window-scroll.svg) ![](https://img.shields.io/npm/dt/@rooks/use-on-window-scroll.svg) ![](https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fon-window-scroll)

<a href="https://spectrum.chat/rooks"><img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum"/></a>

### Installation

```
npm install --save @rooks/use-on-window-scroll
```

### Importing the hook

```javascript
import useOnWindowScroll from "@rooks/use-on-window-scroll"
```


### Usage

```jsx

function Demo() {
  useOnWindowScroll(() => console.log("window scrolled"))
  return <p> Hello world </p>
}

render(<Demo/>)
```

### Arguments

| Arguments | Type     | Description                                     | Default value |
| --------- | -------- | ----------------------------------------------- | ------------- |
| callback  | function | Callback function which needs to run on unmount | undefined     |
| when      | boolean  | When the event handler should be active         | true          |

### A React hook for adding an event listener for window scroll
