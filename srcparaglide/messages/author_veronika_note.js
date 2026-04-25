/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Veronika_NoteInputs */

const en_us2_author_veronika_note = /** @type {(inputs: Author_Veronika_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I am Veronika.`)
};

const zh_cn2_author_veronika_note = /** @type {(inputs: Author_Veronika_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我是 Veronika。`)
};

const ru_ru2_author_veronika_note = /** @type {(inputs: Author_Veronika_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Я Veronika.`)
};

/**
* | output |
* | --- |
* | "I am Veronika." |
*
* @param {Author_Veronika_NoteInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_veronika_note = /** @type {((inputs?: Author_Veronika_NoteInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Veronika_NoteInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_veronika_note(inputs)
	if (locale === "zh-CN") return zh_cn2_author_veronika_note(inputs)
	return ru_ru2_author_veronika_note(inputs)
});