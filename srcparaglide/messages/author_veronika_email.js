/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Veronika_EmailInputs */

const en_us2_author_veronika_email = /** @type {(inputs: Author_Veronika_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`veronika@example.com`)
};

const zh_cn2_author_veronika_email = /** @type {(inputs: Author_Veronika_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`veronika@example.com`)
};

const ru_ru2_author_veronika_email = /** @type {(inputs: Author_Veronika_EmailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`veronika@example.com`)
};

/**
* | output |
* | --- |
* | "veronika@example.com" |
*
* @param {Author_Veronika_EmailInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_veronika_email = /** @type {((inputs?: Author_Veronika_EmailInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Veronika_EmailInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_veronika_email(inputs)
	if (locale === "zh-CN") return zh_cn2_author_veronika_email(inputs)
	return ru_ru2_author_veronika_email(inputs)
});