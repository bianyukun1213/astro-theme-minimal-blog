/**
* | output |
* | --- |
* | "A minimal blog theme for Astro" |
*
* @param {Site_DescriptionInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const site_description: ((inputs?: Site_DescriptionInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Site_DescriptionInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Site_DescriptionInputs = {};
