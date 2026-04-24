/**
* | output |
* | --- |
* | "Keep reading" |
*
* @param {Label_Keep_ReadingInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_keep_reading: ((inputs?: Label_Keep_ReadingInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Keep_ReadingInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Keep_ReadingInputs = {};
