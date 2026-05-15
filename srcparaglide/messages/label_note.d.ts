/**
* | output |
* | --- |
* | "Note" |
*
* @param {Label_NoteInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_note: ((inputs?: Label_NoteInputs, options?: {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}) => LocalizedString) & import("../runtime.js").MessageMetadata<Label_NoteInputs, {
    locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL";
}, {}>;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Label_NoteInputs = {};
