/**
* | output |
* | --- |
* | "Posts pagination" |
*
* @param {Label_Posts_PaginationInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_posts_pagination: ((inputs?: Label_Posts_PaginationInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_Posts_PaginationInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_Posts_PaginationInputs = {};
