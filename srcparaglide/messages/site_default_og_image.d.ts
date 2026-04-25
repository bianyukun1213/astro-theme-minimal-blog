/**
* | output |
* | --- |
* | "https://placehold.co/400x300" |
*
* @param {Site_Default_Og_ImageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const site_default_og_image: ((inputs?: Site_Default_Og_ImageInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Site_Default_Og_ImageInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Site_Default_Og_ImageInputs = {};
