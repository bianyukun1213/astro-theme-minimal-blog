/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_SeoulInputs */

const en_us2_tag_seoul = /** @type {(inputs: Tag_SeoulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seoul`)
};

const zh_cn2_tag_seoul = /** @type {(inputs: Tag_SeoulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`首尔`)
};

const ru_ru2_tag_seoul = /** @type {(inputs: Tag_SeoulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сеул`)
};

/**
* | output |
* | --- |
* | "Seoul" |
*
* @param {Tag_SeoulInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const tag_seoul = /** @type {((inputs?: Tag_SeoulInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_SeoulInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_tag_seoul(inputs)
	if (locale === "zh-CN") return zh_cn2_tag_seoul(inputs)
	return ru_ru2_tag_seoul(inputs)
});