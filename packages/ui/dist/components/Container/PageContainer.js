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
var StyledContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  padding: 0 0;\n  padding-top: 3.6rem;\n  background-color: ", ";\n  background-image: ", ";\n  border: 1px solid green;\n"], ["\n  height: 100%;\n  width: 100%;\n  padding: 0 0;\n  padding-top: 3.6rem;\n  background-color: ", ";\n  background-image: ", ";\n  border: 1px solid green;\n"])), function (props) { return props.theme.data.backgroundColor; }, function (props) { return props.theme.data.backgroundImage; });
var PageContainer = function (_a) {
    var children = _a.children;
    return react_1.default.createElement(StyledContainer, null, children);
};
exports.default = PageContainer;
var templateObject_1;
