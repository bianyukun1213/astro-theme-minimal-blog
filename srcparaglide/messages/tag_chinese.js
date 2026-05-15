/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_ChineseInputs */

const en_us2_tag_chinese = /** @type {(inputs: Tag_ChineseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`中文`)
};

const zh_cn2_tag_chinese = /** @type {(inputs: Tag_ChineseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`中文`)
};

const ru_ru2_tag_chinese = /** @type {(inputs: Tag_ChineseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`中文`)
};

const he_il2_tag_chinese = /** @type {(inputs: Tag_ChineseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`中文`)
};

/**
* | output |
* | --- |
* | "中文" |
*
* @param {Tag_ChineseInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_chinese = /** @type {((inputs?: Tag_ChineseInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ChineseInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_tag_chinese(inputs)
	if (locale === "zh-CN") return zh_cn2_tag_chinese(inputs)
	if (locale === "ru-RU") return ru_ru2_tag_chinese(inputs)
	return he_il2_tag_chinese(inputs)
});