/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Posts_PaginationInputs */

const en_us2_label_posts_pagination = /** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posts pagination`)
};

/** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */
const zh_cn2_label_posts_pagination = en_us2_label_posts_pagination;

/** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */
const ru_ru2_label_posts_pagination = en_us2_label_posts_pagination;

/**
* | output |
* | --- |
* | "Posts pagination" |
*
* @param {Label_Posts_PaginationInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_posts_pagination = /** @type {((inputs?: Label_Posts_PaginationInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Posts_PaginationInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_posts_pagination(inputs)
	if (locale === "zh-CN") return zh_cn2_label_posts_pagination(inputs)
	return ru_ru2_label_posts_pagination(inputs)
});