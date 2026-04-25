/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Hollis_NoteInputs */

const en_us2_author_hollis_note = /** @type {(inputs: Author_Hollis_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I am Hollis.`)
};

const zh_cn2_author_hollis_note = /** @type {(inputs: Author_Hollis_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我是 Hollis。`)
};

const ru_ru2_author_hollis_note = /** @type {(inputs: Author_Hollis_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Я Hollis.`)
};

/**
* | output |
* | --- |
* | "I am Hollis." |
*
* @param {Author_Hollis_NoteInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_hollis_note = /** @type {((inputs?: Author_Hollis_NoteInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Hollis_NoteInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_hollis_note(inputs)
	if (locale === "zh-CN") return zh_cn2_author_hollis_note(inputs)
	return ru_ru2_author_hollis_note(inputs)
});