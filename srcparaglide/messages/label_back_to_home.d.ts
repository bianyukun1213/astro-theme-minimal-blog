/**
* | output |
* | --- |
* | "{siteTitle} - Back to home" |
*
* @param {Label_Back_To_HomeInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_back_to_home: ((inputs: Label_Back_To_HomeInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Back_To_HomeInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Back_To_HomeInputs = {
    siteTitle: NonNullable<unknown>;
};
