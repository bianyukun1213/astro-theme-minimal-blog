/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Veronika_UrlInputs */

const en_us2_author_veronika_url = /** @type {(inputs: Author_Veronika_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://example.com/`)
};

const zh_cn2_author_veronika_url = /** @type {(inputs: Author_Veronika_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://example.com/`)
};

const ru_ru2_author_veronika_url = /** @type {(inputs: Author_Veronika_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://example.com/`)
};

/**
* | output |
* | --- |
* | "https://example.com/" |
*
* @param {Author_Veronika_UrlInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_veronika_url = /** @type {((inputs?: Author_Veronika_UrlInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Veronika_UrlInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_veronika_url(inputs)
	if (locale === "zh-CN") return zh_cn2_author_veronika_url(inputs)
	return ru_ru2_author_veronika_url(inputs)
});