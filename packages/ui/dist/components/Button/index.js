"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var ButtonTypeStyles = {
    primary: (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: #7ca982;\n    padding: 0.5rem 1.5rem;\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    font-size: 1.1rem;\n    color: white;\n    box-shadow:\n      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    cursor: pointer;\n    transition: background 0.4s ease-in-out; // Add transition property\n    &:hover {\n      background: #ecdfd4;\n      color: #71767e;\n    }\n  "], ["\n    background: #7ca982;\n    padding: 0.5rem 1.5rem;\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    font-size: 1.1rem;\n    color: white;\n    box-shadow:\n      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    cursor: pointer;\n    transition: background 0.4s ease-in-out; // Add transition property\n    &:hover {\n      background: #ecdfd4;\n      color: #71767e;\n    }\n  "]))),
    secondary: (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: #2a3d45;\n    padding: 0.5rem 1.5rem;\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    font-size: 1.1rem;\n    color: white;\n    box-shadow:\n      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    cursor: pointer;\n    transition: background 0.4s ease-in-out; // Add transition property\n    &:hover {\n      background: #ecdfd4;\n      color: #71767e;\n    }\n  "], ["\n    background: #2a3d45;\n    padding: 0.5rem 1.5rem;\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    font-size: 1.1rem;\n    color: white;\n    box-shadow:\n      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,\n      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    cursor: pointer;\n    transition: background 0.4s ease-in-out; // Add transition property\n    &:hover {\n      background: #ecdfd4;\n      color: #71767e;\n    }\n  "]))),
    outline: (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: #000;\n    background: linear-gradient(#c7c7d2, #bcbaba);\n  "], ["\n    color: #000;\n    background: linear-gradient(#c7c7d2, #bcbaba);\n  "]))),
    inverted: (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: #000;\n    background: linear-gradient(#c7c7d2, #bcbaba);\n  "], ["\n    color: #000;\n    background: linear-gradient(#c7c7d2, #bcbaba);\n  "]))),
};
var StyledButton = styled_components_1.styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) { return props.buttonType && ButtonTypeStyles[props.buttonType]; });
var Button = function (_a) {
    var _b = _a.buttonType, buttonType = _b === void 0 ? 'primary' : _b, children = _a.children, props = __rest(_a, ["buttonType", "children"]);
    return (react_1.default.createElement(StyledButton, __assign({}, props, { buttonType: buttonType }), children));
};
exports.default = Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;