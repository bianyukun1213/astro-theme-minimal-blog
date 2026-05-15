/**
* | output |
* | --- |
* | "All posts - page {pageNum}" |
*
* @param {Label_All_Posts_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_all_posts_pagenum: ((inputs: Label_All_Posts_PagenumInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_All_Posts_PagenumInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_All_Posts_PagenumInputs = {
    pageNum: NonNullable<unknown>;
};
