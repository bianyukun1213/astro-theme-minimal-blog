/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Label_Previous_PageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_previous_page: ((inputs?: Label_Previous_PageInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Previous_PageInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Previous_PageInputs = {};
