/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_GeneralInputs */

const en_us2_tag_general = /** @type {(inputs: Tag_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General`)
};

const zh_cn2_tag_general = /** @type {(inputs: Tag_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一般`)
};

const ru_ru2_tag_general = /** @type {(inputs: Tag_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общее`)
};

const he_il2_tag_general = /** @type {(inputs: Tag_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`כללי`)
};

/**
* | output |
* | --- |
* | "General" |
*
* @param {Tag_GeneralInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_general = /** @type {((inputs?: Tag_GeneralInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_GeneralInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_tag_general(inputs)
	if (locale === "zh-CN") return zh_cn2_tag_general(inputs)
	if (locale === "ru-RU") return ru_ru2_tag_general(inputs)
	return he_il2_tag_general(inputs)
});