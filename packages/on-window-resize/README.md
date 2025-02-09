# @rooks/use-on-window-resize

### A React hook for adding an event listener for window resize
<br/>

[![Build Status](https://travis-ci.org/imbhargav5/rooks.svg?branch=master)](https://travis-ci.org/imbhargav5/rooks) ![](https://img.shields.io/npm/v/@rooks/use-on-window-resize/latest.svg) ![](https://img.shields.io/npm/l/@rooks/use-on-window-resize.svg) ![](https://img.shields.io/npm/dt/@rooks/use-on-window-resize.svg) ![](https://img.shields.io/david/imbhargav5/rooks.svg?path=packages%2Fon-window-resize)

<a href="https://spectrum.chat/rooks"><img src="https://withspectrum.github.io/badge/badge.svg" alt="Join the community on Spectrum"/></a>

### Installation

```
npm install --save @rooks/use-on-window-resize
```

### Importing the hook

```javascript
import useOnWindowResize from "@rooks/use-on-window-resize"
```


### Usage

```jsx

function Demo() {
  useOnWindowResize(() => console.log("window resized"))
  return <p> Hello world </p>
}

render(<Demo/>)
```

### Arguments

| Arguments | Type     | Description                                     | Default value |
| --------- | -------- | ----------------------------------------------- | ------------- |
| callback  | function | Callback function which needs to run on unmount | undefined     |
| when      | boolean  | When the event handler should be active         | true          |

### A React hook for adding an event listener for window resize
