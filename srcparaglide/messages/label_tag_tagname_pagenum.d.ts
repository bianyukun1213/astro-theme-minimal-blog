/**
* | output |
* | --- |
* | "Tag: {tagName} - page {pageNum}" |
*
* @param {Label_Tag_Tagname_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_tag_tagname_pagenum: ((inputs: Label_Tag_Tagname_PagenumInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Tag_Tagname_PagenumInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Tag_Tagname_PagenumInputs = {
    tagName: NonNullable<unknown>;
    pageNum: NonNullable<unknown>;
};
