/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Default_Og_ImageInputs */

const en_us2_site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/images/og-image.jpg`)
};

const zh_cn2_site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/images/og-image.jpg`)
};

const ru_ru2_site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/images/og-image.jpg`)
};

const he_il2_site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`/images/og-image.jpg`)
};

/**
* | output |
* | --- |
* | "/images/og-image.jpg" |
*
* @param {Site_Default_Og_ImageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const site_default_og_image = /** @type {((inputs?: Site_Default_Og_ImageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Default_Og_ImageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_site_default_og_image(inputs)
	if (locale === "zh-CN") return zh_cn2_site_default_og_image(inputs)
	if (locale === "ru-RU") return ru_ru2_site_default_og_image(inputs)
	return he_il2_site_default_og_image(inputs)
});