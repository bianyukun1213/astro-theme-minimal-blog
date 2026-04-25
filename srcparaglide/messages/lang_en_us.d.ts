/**
* | output |
* | --- |
* | "English" |
*
* @param {Lang_En_UsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const lang_en_us: ((inputs?: Lang_En_UsInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Lang_En_UsInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Lang_En_UsInputs = {};
