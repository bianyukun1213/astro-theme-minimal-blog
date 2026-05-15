/**
* | output |
* | --- |
* | "{tagName} ({count})" |
*
* @param {Label_Tags_Tagname_CountInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tags_tagname_count: ((inputs: Label_Tags_Tagname_CountInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Tags_Tagname_CountInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Tags_Tagname_CountInputs = {
    tagName: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
