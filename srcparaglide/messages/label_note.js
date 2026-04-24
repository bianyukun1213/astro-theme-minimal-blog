/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_NoteInputs */

const en_us2_label_note = /** @type {(inputs: Label_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

/** @type {(inputs: Label_NoteInputs) => LocalizedString} */
const zh_cn2_label_note = en_us2_label_note;

/** @type {(inputs: Label_NoteInputs) => LocalizedString} */
const ru_ru2_label_note = en_us2_label_note;

/**
* | output |
* | --- |
* | "Note" |
*
* @param {Label_NoteInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_note = /** @type {((inputs?: Label_NoteInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_NoteInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_note(inputs)
	if (locale === "zh-CN") return zh_cn2_label_note(inputs)
	return ru_ru2_label_note(inputs)
});