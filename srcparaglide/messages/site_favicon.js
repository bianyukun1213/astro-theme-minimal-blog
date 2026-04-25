/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_FaviconInputs */

const en_us2_site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/32`)
};

const zh_cn2_site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/32`)
};

const ru_ru2_site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/32`)
};

/**
* | output |
* | --- |
* | "https://placehold.co/32" |
*
* @param {Site_FaviconInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const site_favicon = /** @type {((inputs?: Site_FaviconInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_FaviconInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_site_favicon(inputs)
	if (locale === "zh-CN") return zh_cn2_site_favicon(inputs)
	return ru_ru2_site_favicon(inputs)
});