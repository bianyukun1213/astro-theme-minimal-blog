/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_All_TagsInputs */

const en_us2_label_all_tags = /** @type {(inputs: Label_All_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All tags`)
};

const zh_cn2_label_all_tags = /** @type {(inputs: Label_All_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部标签`)
};

const ru_ru2_label_all_tags = /** @type {(inputs: Label_All_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все теги`)
};

/**
* | output |
* | --- |
* | "All tags" |
*
* @param {Label_All_TagsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_all_tags = /** @type {((inputs?: Label_All_TagsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_All_TagsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_all_tags(inputs)
	if (locale === "zh-CN") return zh_cn2_label_all_tags(inputs)
	return ru_ru2_label_all_tags(inputs)
});