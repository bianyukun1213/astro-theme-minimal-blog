/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Hollis_UrlInputs */

const en_us2_author_hollis_url = /** @type {(inputs: Author_Hollis_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://yukun.bio/`)
};

const zh_cn2_author_hollis_url = /** @type {(inputs: Author_Hollis_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://yukun.bio/`)
};

const ru_ru2_author_hollis_url = /** @type {(inputs: Author_Hollis_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://yukun.bio/`)
};

/**
* | output |
* | --- |
* | "https://yukun.bio/" |
*
* @param {Author_Hollis_UrlInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_hollis_url = /** @type {((inputs?: Author_Hollis_UrlInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Hollis_UrlInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_hollis_url(inputs)
	if (locale === "zh-CN") return zh_cn2_author_hollis_url(inputs)
	return ru_ru2_author_hollis_url(inputs)
});