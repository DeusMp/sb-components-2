"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomColor = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: 'UI/Labels/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio' },
        color: { control: 'color' },
        fontColor: { control: 'color' },
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'Valor de Label',
        size: 'normal'
    }
};
exports.AllCaps = {
    args: {
        label: 'All Caps Label',
        allCaps: true
    }
};
exports.Secondary = {
    args: {
        label: 'Secondary Label',
        color: 'text-secondary'
    }
};
exports.CustomColor = {
    args: {
        label: 'Custom Color Label',
        fontColor: '#5517ac'
    }
};
exports.CustomBackgroundColor = {
    args: {
        label: 'Custom Background Color',
        size: 'h2',
        fontColor: 'white',
        backgroundColor: 'black'
    }
};
// export const CustomWidth = Template.bind({});
