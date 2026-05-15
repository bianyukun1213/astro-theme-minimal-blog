/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tagName: NonNullable<unknown>, count: NonNullable<unknown> }} Label_Tags_Tagname_CountInputs */

const en_us2_label_tags_tagname_count = /** @type {(inputs: Label_Tags_Tagname_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tagName} (${i?.count})`)
};

const zh_cn2_label_tags_tagname_count = /** @type {(inputs: Label_Tags_Tagname_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tagName} (${i?.count})`)
};

const ru_ru2_label_tags_tagname_count = /** @type {(inputs: Label_Tags_Tagname_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tagName} (${i?.count})`)
};

const he_il2_label_tags_tagname_count = /** @type {(inputs: Label_Tags_Tagname_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tagName} (${i?.count})`)
};

/**
* | output |
* | --- |
* | "{tagName} ({count})" |
*
* @param {Label_Tags_Tagname_CountInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tags_tagname_count = /** @type {((inputs: Label_Tags_Tagname_CountInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tags_Tagname_CountInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_tags_tagname_count(inputs)
	if (locale === "zh-CN") return zh_cn2_label_tags_tagname_count(inputs)
	if (locale === "ru-RU") return ru_ru2_label_tags_tagname_count(inputs)
	return he_il2_label_tags_tagname_count(inputs)
});