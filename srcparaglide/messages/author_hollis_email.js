/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Hollis_EmailInputs */

const en_us2_author_hollis_email = /** @type {(inputs: Author_Hollis_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bianyukun1213@outlook.com`)
};

const zh_cn2_author_hollis_email = /** @type {(inputs: Author_Hollis_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bianyukun1213@outlook.com`)
};

const ru_ru2_author_hollis_email = /** @type {(inputs: Author_Hollis_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`bianyukun1213@outlook.com`)
};

/**
* | output |
* | --- |
* | "bianyukun1213@outlook.com" |
*
* @param {Author_Hollis_EmailInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_hollis_email = /** @type {((inputs?: Author_Hollis_EmailInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Hollis_EmailInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_hollis_email(inputs)
	if (locale === "zh-CN") return zh_cn2_author_hollis_email(inputs)
	return ru_ru2_author_hollis_email(inputs)
});