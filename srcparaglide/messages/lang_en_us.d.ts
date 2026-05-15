/**
* | output |
* | --- |
* | "Eng" |
*
* @param {Lang_En_UsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const lang_en_us: ((inputs?: Lang_En_UsInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Lang_En_UsInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Lang_En_UsInputs = {};
