/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_MdxInputs */

const en_us2_tag_mdx = /** @type {(inputs: Tag_MdxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MDX`)
};

const zh_cn2_tag_mdx = /** @type {(inputs: Tag_MdxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MDX`)
};

const ru_ru2_tag_mdx = /** @type {(inputs: Tag_MdxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MDX`)
};

/**
* | output |
* | --- |
* | "MDX" |
*
* @param {Tag_MdxInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const tag_mdx = /** @type {((inputs?: Tag_MdxInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_MdxInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_tag_mdx(inputs)
	if (locale === "zh-CN") return zh_cn2_tag_mdx(inputs)
	return ru_ru2_tag_mdx(inputs)
});