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
var react_router_dom_1 = require("react-router-dom");
var ai_1 = require("react-icons/ai");
var MenuContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* border: 1px solid red; */\n  /* font-size: 1.2rem; */\n  display: flex;\n  flex: 0.5;\n  & > * {\n    margin: 0 1rem;\n  }\n"], ["\n  /* border: 1px solid red; */\n  /* font-size: 1.2rem; */\n  display: flex;\n  flex: 0.5;\n  & > * {\n    margin: 0 1rem;\n  }\n"])));
var MenuItem = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: var(--primarygray);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n\n  & > svg {\n    margin: 10px 0 0 1px;\n    font-size: 0.7rem;\n    transition: transform 0.5s ease-in-out;\n  }\n\n  &:hover svg {\n    transform: rotate(-90deg);\n  }\n"], ["\n  color: var(--primarygray);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n\n  & > svg {\n    margin: 10px 0 0 1px;\n    font-size: 0.7rem;\n    transition: transform 0.5s ease-in-out;\n  }\n\n  &:hover svg {\n    transform: rotate(-90deg);\n  }\n"])));
var NavbarMenu = function () {
    return (react_1.default.createElement(MenuContainer, null,
        react_1.default.createElement(MenuItem, { to: "/app" },
            "App ",
            react_1.default.createElement(ai_1.AiOutlineCaretDown, null)),
        react_1.default.createElement(MenuItem, { to: "/resources" },
            "Resources ",
            react_1.default.createElement(ai_1.AiOutlineCaretDown, null)),
        react_1.default.createElement(MenuItem, { to: "/" },
            "Pro+ ",
            react_1.default.createElement(ai_1.AiOutlineCaretDown, null)),
        react_1.default.createElement(MenuItem, { to: "/" },
            "Pricing ",
            react_1.default.createElement(ai_1.AiOutlineCaretDown, null))));
};
exports.default = NavbarMenu;
var templateObject_1, templateObject_2;
