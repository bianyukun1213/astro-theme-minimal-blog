/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Latest_PostsInputs */

const en_us2_label_latest_posts = /** @type {(inputs: Label_Latest_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest posts`)
};

const zh_cn2_label_latest_posts = /** @type {(inputs: Label_Latest_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新文章`)
};

const ru_ru2_label_latest_posts = /** @type {(inputs: Label_Latest_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последние публикации`)
};

const he_il2_label_latest_posts = /** @type {(inputs: Label_Latest_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`הפוסטים האחרונים`)
};

/**
* | output |
* | --- |
* | "Latest posts" |
*
* @param {Label_Latest_PostsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_latest_posts = /** @type {((inputs?: Label_Latest_PostsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Latest_PostsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_latest_posts(inputs)
	if (locale === "zh-CN") return zh_cn2_label_latest_posts(inputs)
	if (locale === "ru-RU") return ru_ru2_label_latest_posts(inputs)
	return he_il2_label_latest_posts(inputs)
});