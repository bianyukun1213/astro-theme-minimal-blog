/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Author_Hollis_PhotoInputs */

const en_us2_author_hollis_photo = /** @type {(inputs: Author_Hollis_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://avatars.githubusercontent.com/u/24708556`)
};

const zh_cn2_author_hollis_photo = /** @type {(inputs: Author_Hollis_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://avatars.githubusercontent.com/u/24708556`)
};

const ru_ru2_author_hollis_photo = /** @type {(inputs: Author_Hollis_PhotoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://avatars.githubusercontent.com/u/24708556`)
};

/**
* | output |
* | --- |
* | "https://avatars.githubusercontent.com/u/24708556" |
*
* @param {Author_Hollis_PhotoInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const author_hollis_photo = /** @type {((inputs?: Author_Hollis_PhotoInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Author_Hollis_PhotoInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_author_hollis_photo(inputs)
	if (locale === "zh-CN") return zh_cn2_author_hollis_photo(inputs)
	return ru_ru2_author_hollis_photo(inputs)
});