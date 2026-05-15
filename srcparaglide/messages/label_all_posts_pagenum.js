/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ pageNum: NonNullable<unknown> }} Label_All_Posts_PagenumInputs */

const en_us2_label_all_posts_pagenum = /** @type {(inputs: Label_All_Posts_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All posts - page ${i?.pageNum}`)
};

const zh_cn2_label_all_posts_pagenum = /** @type {(inputs: Label_All_Posts_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`全部文章 - 第 ${i?.pageNum} 页`)
};

const ru_ru2_label_all_posts_pagenum = /** @type {(inputs: Label_All_Posts_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Все публикации - страница ${i?.pageNum}`)
};

const he_il2_label_all_posts_pagenum = /** @type {(inputs: Label_All_Posts_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`כל הפוסטים - עמוד ${i?.pageNum}`)
};

/**
* | output |
* | --- |
* | "All posts - page {pageNum}" |
*
* @param {Label_All_Posts_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_all_posts_pagenum = /** @type {((inputs: Label_All_Posts_PagenumInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_All_Posts_PagenumInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_all_posts_pagenum(inputs)
	if (locale === "zh-CN") return zh_cn2_label_all_posts_pagenum(inputs)
	if (locale === "ru-RU") return ru_ru2_label_all_posts_pagenum(inputs)
	return he_il2_label_all_posts_pagenum(inputs)
});