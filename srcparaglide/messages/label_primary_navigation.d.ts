/**
* | output |
* | --- |
* | "Primary navigation" |
*
* @param {Label_Primary_NavigationInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_primary_navigation: ((inputs?: Label_Primary_NavigationInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Primary_NavigationInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Primary_NavigationInputs = {};
