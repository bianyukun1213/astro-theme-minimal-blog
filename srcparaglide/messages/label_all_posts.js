/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_All_PostsInputs */

const en_us2_label_all_posts = /** @type {(inputs: Label_All_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All posts`)
};

const zh_cn2_label_all_posts = /** @type {(inputs: Label_All_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部文章`)
};

const ru_ru2_label_all_posts = /** @type {(inputs: Label_All_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все публикации`)
};

const he_il2_label_all_posts = /** @type {(inputs: Label_All_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`כל הפוסטים`)
};

/**
* | output |
* | --- |
* | "All posts" |
*
* @param {Label_All_PostsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_all_posts = /** @type {((inputs?: Label_All_PostsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_All_PostsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_all_posts(inputs)
	if (locale === "zh-CN") return zh_cn2_label_all_posts(inputs)
	if (locale === "ru-RU") return ru_ru2_label_all_posts(inputs)
	return he_il2_label_all_posts(inputs)
});