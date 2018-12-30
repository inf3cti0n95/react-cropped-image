'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var CroppedImage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CroppedImage, _React$Component);

  function CroppedImage() {
    var _this;

    _classCallCheck(this, CroppedImage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CroppedImage).call(this));
    _this.state = {
      croppedImageSource: null
    };
    return _this;
  }

  _createClass(CroppedImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var canvas = document.createElement("canvas");
      canvas.height = this.props.height;
      canvas.width = this.props.width;
      var context = canvas.getContext("2d");
      var image = new Image();
      image.src = this.props.src;
      image.addEventListener("error", this.props.onError);
      image.addEventListener("load", function () {
        var sourceX = _this2.props.x;
        var sourceY = _this2.props.y;
        var sourceWidth = _this2.props.cropWidth;
        var sourceHeight = _this2.props.cropHeight;
        var destWidth = sourceWidth;
        var destHeight = sourceHeight;
        var destX = 0;
        var destY = 0;
        context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);

        _this2.setState({
          croppedImageSource: canvas.toDataURL()
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var imageProps = Object.assign({}, this.props);
      delete imageProps.cropHeight;
      delete imageProps.cropWidth;
      delete imageProps.onError;
      var croppedImageSource = this.state.croppedImageSource;
      return !!croppedImageSource ? React.createElement("img", _extends({}, imageProps, {
        src: croppedImageSource
      })) : null;
    }
  }]);

  return CroppedImage;
}(React.Component);

module.exports = CroppedImage;
