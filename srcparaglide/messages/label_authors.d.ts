/**
* | output |
* | --- |
* | "Authors" |
*
* @param {Label_AuthorsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_authors: ((inputs?: Label_AuthorsInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_AuthorsInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_AuthorsInputs = {};
