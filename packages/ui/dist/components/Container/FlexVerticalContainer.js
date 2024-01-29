"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  border: 1px solid red;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n"], ["\n  display: flex;\n  border: 1px solid red;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n"])), function (props) { return props.theme.backgroundColor; });
var FlexVerticalContainer = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(StyledContainer, null, children);
};
exports.default = FlexVerticalContainer;
var templateObject_1;
