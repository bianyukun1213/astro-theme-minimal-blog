/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Veronika_PhotoInputs */

const en_us2_author_veronika_photo = /** @type {(inputs: Author_Veronika_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/64`)
};

const zh_cn2_author_veronika_photo = /** @type {(inputs: Author_Veronika_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/64`)
};

const ru_ru2_author_veronika_photo = /** @type {(inputs: Author_Veronika_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/64`)
};

/**
* | output |
* | --- |
* | "https://placehold.co/64" |
*
* @param {Author_Veronika_PhotoInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_veronika_photo = /** @type {((inputs?: Author_Veronika_PhotoInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Veronika_PhotoInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_veronika_photo(inputs)
	if (locale === "zh-CN") return zh_cn2_author_veronika_photo(inputs)
	return ru_ru2_author_veronika_photo(inputs)
});