/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_FaviconInputs */

const en_us2_site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/images/favicon-32.webp`)
};

const zh_cn2_site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/images/favicon-32.webp`)
};

const ru_ru2_site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/images/favicon-32.webp`)
};

const he_il2_site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/images/favicon-32.webp`)
};

/**
* | output |
* | --- |
* | "/images/favicon-32.webp" |
*
* @param {Site_FaviconInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const site_favicon = /** @type {((inputs?: Site_FaviconInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_FaviconInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_site_favicon(inputs)
	if (locale === "zh-CN") return zh_cn2_site_favicon(inputs)
	if (locale === "ru-RU") return ru_ru2_site_favicon(inputs)
	return he_il2_site_favicon(inputs)
});