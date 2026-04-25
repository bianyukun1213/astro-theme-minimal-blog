/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_Default_Og_ImageInputs */

const en_us2_site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/400x300`)
};

const zh_cn2_site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/400x300`)
};

const ru_ru2_site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/400x300`)
};

/**
* | output |
* | --- |
* | "https://placehold.co/400x300" |
*
* @param {Site_Default_Og_ImageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const site_default_og_image = /** @type {((inputs?: Site_Default_Og_ImageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Default_Og_ImageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_site_default_og_image(inputs)
	if (locale === "zh-CN") return zh_cn2_site_default_og_image(inputs)
	return ru_ru2_site_default_og_image(inputs)
});