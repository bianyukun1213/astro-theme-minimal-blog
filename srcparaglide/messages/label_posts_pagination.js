/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Posts_PaginationInputs */

const en_us2_label_posts_pagination = /** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posts pagination`)
};

const zh_cn2_label_posts_pagination = /** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文章分页`)
};

const ru_ru2_label_posts_pagination = /** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пагинация публикаций`)
};

const he_il2_label_posts_pagination = /** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`דפדוף פוסטים`)
};

/**
* | output |
* | --- |
* | "Posts pagination" |
*
* @param {Label_Posts_PaginationInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_posts_pagination = /** @type {((inputs?: Label_Posts_PaginationInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Posts_PaginationInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_posts_pagination(inputs)
	if (locale === "zh-CN") return zh_cn2_label_posts_pagination(inputs)
	if (locale === "ru-RU") return ru_ru2_label_posts_pagination(inputs)
	return he_il2_label_posts_pagination(inputs)
});