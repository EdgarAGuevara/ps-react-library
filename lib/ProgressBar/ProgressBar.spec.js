"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Aprender donde va esto
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('ProgressBar', function () {
  test('getWidthAsPercentOfTotalWidth should return 250 with Total of 500 and percent of 50%', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
      percent: 50,
      width: 500
    }));
    var width = wrapper.instance().getWidthAsPercentOfTotalWidth();
    expect(width).toEqual(250);
  });
});