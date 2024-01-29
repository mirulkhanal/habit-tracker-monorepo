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
var StyledNavbar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 3rem;\n  position: absolute;\n  padding: 0.5rem 0.5rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  & > img {\n    padding: 1rem;\n    background-color: red;\n    border-radius: 8px;\n  }\n"], ["\n  min-height: 3rem;\n  position: absolute;\n  padding: 0.5rem 0.5rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  & > img {\n    padding: 1rem;\n    background-color: red;\n    border-radius: 8px;\n  }\n"])));
var Navbar = function () {
    return (react_1.default.createElement(StyledNavbar, null,
        react_1.default.createElement("img", { src: "/images/logo.png" })));
};
exports.default = Navbar;
var templateObject_1;
