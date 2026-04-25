/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_TitleInputs */

const en_us2_site_title = /** @type {(inputs: Site_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My Blog`)
};

const zh_cn2_site_title = /** @type {(inputs: Site_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我的博客`)
};

const ru_ru2_site_title = /** @type {(inputs: Site_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мой блог`)
};

/**
* | output |
* | --- |
* | "My Blog" |
*
* @param {Site_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const site_title = /** @type {((inputs?: Site_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_site_title(inputs)
	if (locale === "zh-CN") return zh_cn2_site_title(inputs)
	return ru_ru2_site_title(inputs)
});