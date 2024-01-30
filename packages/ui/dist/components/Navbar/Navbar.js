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
var Button_1 = __importDefault(require("../Button"));
var ai_1 = require("react-icons/ai");
var NavbarMenu_1 = __importDefault(require("./NavbarMenu"));
var StyledNavbar = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-height: 3rem;\n  position: absolute;\n  padding: 0.5rem 0.5rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  box-shadow:\n    rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,\n    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,\n    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n"], ["\n  min-height: 3rem;\n  position: absolute;\n  padding: 0.5rem 0.5rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  box-shadow:\n    rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,\n    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,\n    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;\n"])), function (props) { return props.theme.data.color; });
var LogoContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  justify-content: flex-start;\n  width: 12%;\n\n  & > img {\n    width: 2.5rem;\n    background-color: #7ca982;\n    padding: 0.5rem;\n    border-radius: 12px;\n  }\n\n  & > span {\n    font-family: 'Quicksand';\n    font-size: 30px;\n    font-weight: 700;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  justify-content: flex-start;\n  width: 12%;\n\n  & > img {\n    width: 2.5rem;\n    background-color: #7ca982;\n    padding: 0.5rem;\n    border-radius: 12px;\n  }\n\n  & > span {\n    font-family: 'Quicksand';\n    font-size: 30px;\n    font-weight: 700;\n  }\n"])));
var ButtonContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var Navbar = function () {
    return (react_1.default.createElement(StyledNavbar, null,
        react_1.default.createElement(LogoContainer, null,
            react_1.default.createElement("img", { src: "/images/logo.png" }),
            react_1.default.createElement("span", null, "POGO")),
        react_1.default.createElement(NavbarMenu_1.default, null),
        react_1.default.createElement(ButtonContainer, null,
            react_1.default.createElement(Button_1.default, { buttonType: "outline" },
                react_1.default.createElement(ai_1.AiOutlineLogin, null),
                " Login"),
            react_1.default.createElement(Button_1.default, { buttonType: "primary" },
                "Go To Dashboard ",
                react_1.default.createElement("span", null, "\u2192")))));
};
exports.default = Navbar;
var templateObject_1, templateObject_2, templateObject_3;
