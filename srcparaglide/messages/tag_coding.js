/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_CodingInputs */

const en_us2_tag_coding = /** @type {(inputs: Tag_CodingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coding`)
};

const zh_cn2_tag_coding = /** @type {(inputs: Tag_CodingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编程`)
};

const ru_ru2_tag_coding = /** @type {(inputs: Tag_CodingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Программирование`)
};

const he_il2_tag_coding = /** @type {(inputs: Tag_CodingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`תכנות`)
};

/**
* | output |
* | --- |
* | "Coding" |
*
* @param {Tag_CodingInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_coding = /** @type {((inputs?: Tag_CodingInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_CodingInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_tag_coding(inputs)
	if (locale === "zh-CN") return zh_cn2_tag_coding(inputs)
	if (locale === "ru-RU") return ru_ru2_tag_coding(inputs)
	return he_il2_tag_coding(inputs)
});