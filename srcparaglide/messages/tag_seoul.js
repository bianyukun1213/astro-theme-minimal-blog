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

const he_il2_tag_seoul = /** @type {(inputs: Tag_SeoulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`סיאול`)
};

/**
* | output |
* | --- |
* | "Seoul" |
*
* @param {Tag_SeoulInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_seoul = /** @type {((inputs?: Tag_SeoulInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_SeoulInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_tag_seoul(inputs)
	if (locale === "zh-CN") return zh_cn2_tag_seoul(inputs)
	if (locale === "ru-RU") return ru_ru2_tag_seoul(inputs)
	return he_il2_tag_seoul(inputs)
});