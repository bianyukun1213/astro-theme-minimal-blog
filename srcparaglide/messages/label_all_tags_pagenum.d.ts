/**
* | output |
* | --- |
* | "All tags - page {pageNum}" |
*
* @param {Label_All_Tags_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_all_tags_pagenum: ((inputs: Label_All_Tags_PagenumInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_All_Tags_PagenumInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_All_Tags_PagenumInputs = {
    pageNum: NonNullable<unknown>;
};
