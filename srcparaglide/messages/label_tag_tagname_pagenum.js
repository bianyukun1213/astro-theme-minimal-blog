/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tagName: NonNullable<unknown>, pageNum: NonNullable<unknown> }} Label_Tag_Tagname_PagenumInputs */

const en_us2_label_tag_tagname_pagenum = /** @type {(inputs: Label_Tag_Tagname_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag: ${i?.tagName} - page ${i?.pageNum}`)
};

const zh_cn2_label_tag_tagname_pagenum = /** @type {(inputs: Label_Tag_Tagname_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`标签：${i?.tagName} - 第 ${i?.pageNum} 页`)
};

const ru_ru2_label_tag_tagname_pagenum = /** @type {(inputs: Label_Tag_Tagname_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Тег: ${i?.tagName} - страница ${i?.pageNum}`)
};

/**
* | output |
* | --- |
* | "Tag: {tagName} - page {pageNum}" |
*
* @param {Label_Tag_Tagname_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_tag_tagname_pagenum = /** @type {((inputs: Label_Tag_Tagname_PagenumInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tag_Tagname_PagenumInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_tag_tagname_pagenum(inputs)
	if (locale === "zh-CN") return zh_cn2_label_tag_tagname_pagenum(inputs)
	return ru_ru2_label_tag_tagname_pagenum(inputs)
});