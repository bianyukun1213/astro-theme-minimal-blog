/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tagName: NonNullable<unknown> }} Label_Tag_TagnameInputs */

const en_us2_label_tag_tagname = /** @type {(inputs: Label_Tag_TagnameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag: ${i?.tagName}`)
};

const zh_cn2_label_tag_tagname = /** @type {(inputs: Label_Tag_TagnameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`标签：${i?.tagName}`)
};

const ru_ru2_label_tag_tagname = /** @type {(inputs: Label_Tag_TagnameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Тег: ${i?.tagName}`)
};

const he_il2_label_tag_tagname = /** @type {(inputs: Label_Tag_TagnameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`תגית: ${i?.tagName}`)
};

/**
* | output |
* | --- |
* | "Tag: {tagName}" |
*
* @param {Label_Tag_TagnameInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tag_tagname = /** @type {((inputs: Label_Tag_TagnameInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tag_TagnameInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_tag_tagname(inputs)
	if (locale === "zh-CN") return zh_cn2_label_tag_tagname(inputs)
	if (locale === "ru-RU") return ru_ru2_label_tag_tagname(inputs)
	return he_il2_label_tag_tagname(inputs)
});