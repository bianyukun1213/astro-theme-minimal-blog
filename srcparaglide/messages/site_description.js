/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Site_DescriptionInputs */

const en_us2_site_description = /** @type {(inputs: Site_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Life is short. Live it twice as wide!`)
};

const zh_cn2_site_description = /** @type {(inputs: Site_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人生苦短，我要活出双倍精彩！`)
};

const ru_ru2_site_description = /** @type {(inputs: Site_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жизнь коротка. Живи вдвойне шире!`)
};

const he_il2_site_description = /** @type {(inputs: Site_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`חיים קצרים. לחיות לרוחב כפול!`)
};

/**
* | output |
* | --- |
* | "Life is short. Live it twice as wide!" |
*
* @param {Site_DescriptionInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const site_description = /** @type {((inputs?: Site_DescriptionInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_DescriptionInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_site_description(inputs)
	if (locale === "zh-CN") return zh_cn2_site_description(inputs)
	if (locale === "ru-RU") return ru_ru2_site_description(inputs)
	return he_il2_site_description(inputs)
});