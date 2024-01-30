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
var HeroContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* border: 1px solid red; */\n  max-height: 100%;\n  overflow: hidden;\n  border-radius: 1px;\n  height: 75%;\n  position: relative;\n  &:first-child {\n  }\n"], ["\n  /* border: 1px solid red; */\n  max-height: 100%;\n  overflow: hidden;\n  border-radius: 1px;\n  height: 75%;\n  position: relative;\n  &:first-child {\n  }\n"])));
var HeroImage = styled_components_1.default.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  object-fit: fill;\n  filter: drop-shadow(7px 10px 15px #000000);\n  transform: scale(-1, -1);\n  bottom: 0;\n"], ["\n  position: absolute;\n  width: 100%;\n  object-fit: fill;\n  filter: drop-shadow(7px 10px 15px #000000);\n  transform: scale(-1, -1);\n  bottom: 0;\n"])));
var WavesContainer = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  & :last-child {\n    transform: rotate(0deg);\n    transition: transform 1.5s ease-in-out;\n  }\n  & :last-child:hover {\n    cursor: pointer;\n    transform: rotate(270deg);\n  }\n"], ["\n  & :last-child {\n    transform: rotate(0deg);\n    transition: transform 1.5s ease-in-out;\n  }\n  & :last-child:hover {\n    cursor: pointer;\n    transform: rotate(270deg);\n  }\n"])));
var HeroTitle = styled_components_1.default.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: fit-content;\n  color: var(--secondarygray);\n  margin-left: 70px;\n  display: flex;\n  flex-direction: column;\n  font-size: 3rem;\n  margin-top: 20px;\n  & .gradient_box {\n    padding: 0 10px;\n    color: white;\n    background: var(--primaryred);\n  }\n  & .hero_title {\n    width: fit-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    & > button {\n      margin: 10px 10px 0 0;\n      font-size: 2rem;\n    }\n  }\n"], ["\n  width: fit-content;\n  color: var(--secondarygray);\n  margin-left: 70px;\n  display: flex;\n  flex-direction: column;\n  font-size: 3rem;\n  margin-top: 20px;\n  & .gradient_box {\n    padding: 0 10px;\n    color: white;\n    background: var(--primaryred);\n  }\n  & .hero_title {\n    width: fit-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 10px;\n    & > button {\n      margin: 10px 10px 0 0;\n      font-size: 2rem;\n    }\n  }\n"])));
var Hero = function () {
    return (react_1.default.createElement(HeroContainer, null,
        react_1.default.createElement(HeroTitle, null,
            react_1.default.createElement("span", { className: "hero_title" },
                react_1.default.createElement(Button_1.default, { buttonType: "secondary" }, " JOIN \u2192"),
                "the Wave"),
            react_1.default.createElement("span", null,
                "Build better ",
                react_1.default.createElement("span", { className: "gradient_box" }, "habits"))),
        react_1.default.createElement(WavesContainer, null,
            react_1.default.createElement(HeroImage, { src: "/vectors/wave.svg", style: { zIndex: 4 } }),
            react_1.default.createElement(HeroImage, { src: "/vectors/grey_wave_box.svg\n      ", style: { zIndex: 3 } }),
            react_1.default.createElement(HeroImage, { src: "/vectors/dark_green_wave.svg", style: { zIndex: 1 } }),
            react_1.default.createElement(HeroImage, { src: "/vectors/red_wave_sharp.svg\n      ", style: { zIndex: 2 } }),
            react_1.default.createElement(HeroImage, { src: "/images/sun-hd.png", style: {
                    zIndex: 0,
                    width: '20%',
                    right: '300px',
                    bottom: '100px',
                } }))));
};
exports.default = Hero;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
