/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Veronika_NameInputs */

const en_us2_author_veronika_name = /** @type {(inputs: Author_Veronika_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veronika`)
};

const zh_cn2_author_veronika_name = /** @type {(inputs: Author_Veronika_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veronika`)
};

const ru_ru2_author_veronika_name = /** @type {(inputs: Author_Veronika_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veronika`)
};

/**
* | output |
* | --- |
* | "Veronika" |
*
* @param {Author_Veronika_NameInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_veronika_name = /** @type {((inputs?: Author_Veronika_NameInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Veronika_NameInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_veronika_name(inputs)
	if (locale === "zh-CN") return zh_cn2_author_veronika_name(inputs)
	return ru_ru2_author_veronika_name(inputs)
});