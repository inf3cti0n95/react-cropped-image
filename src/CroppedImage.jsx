import React, { Component } from "react";

export default class CroppedImage extends React.Component {
  constructor() {
    super();
    this.state = {
      croppedImageSource: null
    };
  }
  componentDidMount() {
    let canvas = document.createElement("canvas");
    canvas.height = this.props.height;
    canvas.width = this.props.width;
    let context = canvas.getContext("2d");

    let image = new Image();
    image.src = this.props.src;

    image.addEventListener("error", this.props.onError);

    image.addEventListener("load", () => {
      let sourceX = this.props.x;
      let sourceY = this.props.y;
      let sourceWidth = this.props.cropWidth;
      let sourceHeight = this.props.cropHeight;
      let destWidth = sourceWidth;
      let destHeight = sourceHeight;
      let destX = 0;
      let destY = 0;

      context.drawImage(
        image,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        destX,
        destY,
        destWidth,
        destHeight
      );

      this.setState({
        croppedImageSource: canvas.toDataURL()
      });
    });
  }

  render() {
    const imageProps = Object.assign({}, this.props);
    delete imageProps.cropHeight;
    delete imageProps.cropWidth;
    delete imageProps.onError;


    let { croppedImageSource } = this.state;

    return !!croppedImageSource ? (
      <img {...imageProps} src={croppedImageSource} />
    ) : null;
  }
}
