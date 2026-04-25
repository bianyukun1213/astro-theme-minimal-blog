/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_EnglishInputs */

const en_us2_tag_english = /** @type {(inputs: Tag_EnglishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`English`)
};

const zh_cn2_tag_english = /** @type {(inputs: Tag_EnglishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`英语`)
};

const ru_ru2_tag_english = /** @type {(inputs: Tag_EnglishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Английский`)
};

/**
* | output |
* | --- |
* | "English" |
*
* @param {Tag_EnglishInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const tag_english = /** @type {((inputs?: Tag_EnglishInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_EnglishInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_tag_english(inputs)
	if (locale === "zh-CN") return zh_cn2_tag_english(inputs)
	return ru_ru2_tag_english(inputs)
});