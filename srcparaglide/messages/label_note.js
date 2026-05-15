/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_NoteInputs */

const en_us2_label_note = /** @type {(inputs: Label_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const zh_cn2_label_note = /** @type {(inputs: Label_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`注意`)
};

const ru_ru2_label_note = /** @type {(inputs: Label_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Примечание`)
};

const he_il2_label_note = /** @type {(inputs: Label_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`הערה`)
};

/**
* | output |
* | --- |
* | "Note" |
*
* @param {Label_NoteInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_note = /** @type {((inputs?: Label_NoteInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_NoteInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_note(inputs)
	if (locale === "zh-CN") return zh_cn2_label_note(inputs)
	if (locale === "ru-RU") return ru_ru2_label_note(inputs)
	return he_il2_label_note(inputs)
});