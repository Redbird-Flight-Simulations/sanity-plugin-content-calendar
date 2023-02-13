"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Event;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _warningIcon = _interopRequireDefault(require("part:@sanity/base/warning-icon"));

var _dateFns = require("date-fns");

var _ui = require("@sanity/ui");

var _config = require("../config");

var _hooks = require("../hooks");

function Event(_ref) {
  var event = _ref.event;
  var _type = event.doc._type;
  var hasChanges = (0, _hooks.useHasChanges)(event);
  return /*#__PURE__*/_react["default"].createElement(_ui.Box, {
    padding: 1
  }, /*#__PURE__*/_react["default"].createElement(_ui.Card, {
    tone: hasChanges ? "caution" : "primary",
    padding: 2,
    paddingTop: 1,
    shadow: 1,
    radius: 2
  }, /*#__PURE__*/_react["default"].createElement(_ui.Flex, {
    align: "center",
    gap: 2
  }, hasChanges && /*#__PURE__*/_react["default"].createElement(_warningIcon["default"], null), /*#__PURE__*/_react["default"].createElement(_ui.Stack, {
    space: 2
  }, /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    size: 1,
    weight: "semibold",
    style: {
      paddingTop: 5,
      textOverflow: 'ellipsis',
      overflowX: 'clip'
    }
  }, "[", _type.toUpperCase(), "] ", event.title), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    size: 0
  }, (0, _dateFns.format)(event.start, _config.timeFormat))))));
}

Event.propTypes = {
  event: _propTypes["default"].shape({
    start: _propTypes["default"].instanceOf(Date),
    title: _propTypes["default"].string
  }).isRequired
};