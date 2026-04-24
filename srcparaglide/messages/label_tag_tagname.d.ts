/**
* | output |
* | --- |
* | "Tag: {tagName}" |
*
* @param {Label_Tag_TagnameInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_tag_tagname: ((inputs: Label_Tag_TagnameInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Tag_TagnameInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Tag_TagnameInputs = {
    tagName: NonNullable<unknown>;
};
