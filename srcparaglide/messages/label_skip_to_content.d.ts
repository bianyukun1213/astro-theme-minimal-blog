/**
* | output |
* | --- |
* | "Skip to content" |
*
* @param {Label_Skip_To_ContentInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_skip_to_content: ((inputs?: Label_Skip_To_ContentInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Skip_To_ContentInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Skip_To_ContentInputs = {};
