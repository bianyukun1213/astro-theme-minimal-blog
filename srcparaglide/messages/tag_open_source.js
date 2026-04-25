/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tag_Open_SourceInputs */

const en_us2_tag_open_source = /** @type {(inputs: Tag_Open_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open source`)
};

const zh_cn2_tag_open_source = /** @type {(inputs: Tag_Open_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开源`)
};

const ru_ru2_tag_open_source = /** @type {(inputs: Tag_Open_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открытый исходный код`)
};

/**
* | output |
* | --- |
* | "Open source" |
*
* @param {Tag_Open_SourceInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const tag_open_source = /** @type {((inputs?: Tag_Open_SourceInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Open_SourceInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_tag_open_source(inputs)
	if (locale === "zh-CN") return zh_cn2_tag_open_source(inputs)
	return ru_ru2_tag_open_source(inputs)
});