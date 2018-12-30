# react-cropped-image

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/inf3cti0n95/react-cropped-image.svg?branch=master)](https://travis-ci.org/inf3cti0n95/react-cropped-image)
[![codecov](https://codecov.io/gh/inf3cti0n95/react-cropped-image/branch/master/graph/badge.svg)](https://codecov.io/gh/inf3cti0n95/react-cropped-image)
[![npm](https://img.shields.io/npm/v/react-cropped-image.svg)](https://www.npmjs.com/package/react-cropped-image)

React Component to Render Cropped Image.

A Cleaner, Better way to render Cropped Image in React.

## Installation

```sh
yarn add react-cropped-image
```

## Usage

```jsx
<CroppedImage src="kitty.png" x={topLeftCornerX} y={topLeftCornerY} cropHeight={cropHeight} cropWidth={cropWidth}/>

```

|  Property  |                                      Description                                     |   Type   | Default Prop |
|:----------:|:------------------------------------------------------------------------------------:|:--------:|--------------|
|     src    |                           Source of the Image to be Cropped                          |  string  |      ""      |
|      x     |              X Coordinate of the Top Left Corner to start cropping from.             |  number  |              |
|      Y     |              Y Coordinate of the Top Left Corner to start cropping from.             |  number  |              |
| cropHeight | Height of the Crop Box (from (X,Y) Coordinate Down to (X, Y+cropHeight) Coordinate ) |  number  |              |
|  cropWidth |  Width of the Crop Box (from (X,Y) Coordinate Down to (X+cropWidth, Y) Coordinate )  |  number  |              |
|   onError  |                            Throws Error if Error Loading                             | function |              |