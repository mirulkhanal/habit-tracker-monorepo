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
var HeroContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* border: 1px solid red; */\n  max-height: 100%;\n  overflow: hidden;\n  border-radius: 1px;\n  /* height: 20%; */\n"], ["\n  /* border: 1px solid red; */\n  max-height: 100%;\n  overflow: hidden;\n  border-radius: 1px;\n  /* height: 20%; */\n"])));
var HeroImage = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-position: contain;\n  /* max-width: 100%; */\n"], ["\n  background-position: contain;\n  /* max-width: 100%; */\n"])));
var Hero = function () {
    return (react_1.default.createElement(HeroContainer, null,
        react_1.default.createElement(HeroImage, { src: "/images/main.jpg" })));
};
exports.default = Hero;
var templateObject_1, templateObject_2;
