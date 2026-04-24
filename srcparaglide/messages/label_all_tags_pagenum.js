/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ pageNum: NonNullable<unknown> }} Label_All_Tags_PagenumInputs */

const en_us2_label_all_tags_pagenum = /** @type {(inputs: Label_All_Tags_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All tags - page ${i?.pageNum}`)
};

const zh_cn2_label_all_tags_pagenum = /** @type {(inputs: Label_All_Tags_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`全部标签 - 第 ${i?.pageNum} 页`)
};

const ru_ru2_label_all_tags_pagenum = /** @type {(inputs: Label_All_Tags_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Все теги - страница ${i?.pageNum}`)
};

/**
* | output |
* | --- |
* | "All tags - page {pageNum}" |
*
* @param {Label_All_Tags_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_all_tags_pagenum = /** @type {((inputs: Label_All_Tags_PagenumInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_All_Tags_PagenumInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_all_tags_pagenum(inputs)
	if (locale === "zh-CN") return zh_cn2_label_all_tags_pagenum(inputs)
	return ru_ru2_label_all_tags_pagenum(inputs)
});