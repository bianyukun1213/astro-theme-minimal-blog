/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Hollis_NameInputs */

const en_us2_author_hollis_name = /** @type {(inputs: Author_Hollis_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hollis`)
};

const zh_cn2_author_hollis_name = /** @type {(inputs: Author_Hollis_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hollis`)
};

const ru_ru2_author_hollis_name = /** @type {(inputs: Author_Hollis_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hollis`)
};

/**
* | output |
* | --- |
* | "Hollis" |
*
* @param {Author_Hollis_NameInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_hollis_name = /** @type {((inputs?: Author_Hollis_NameInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Hollis_NameInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_hollis_name(inputs)
	if (locale === "zh-CN") return zh_cn2_author_hollis_name(inputs)
	return ru_ru2_author_hollis_name(inputs)
});