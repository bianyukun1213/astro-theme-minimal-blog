/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Lang_Zh_CnInputs */

const en_us2_lang_zh_cn = /** @type {(inputs: Lang_Zh_CnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`🇨🇳 简中`)
};

const zh_cn2_lang_zh_cn = /** @type {(inputs: Lang_Zh_CnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`🇨🇳 简中`)
};

const ru_ru2_lang_zh_cn = /** @type {(inputs: Lang_Zh_CnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`🇨🇳 简中`)
};

const he_il2_lang_zh_cn = /** @type {(inputs: Lang_Zh_CnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`🇨🇳 简中`)
};

/**
* | output |
* | --- |
* | "🇨🇳 简中" |
*
* @param {Lang_Zh_CnInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const lang_zh_cn = /** @type {((inputs?: Lang_Zh_CnInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Lang_Zh_CnInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_lang_zh_cn(inputs)
	if (locale === "zh-CN") return zh_cn2_lang_zh_cn(inputs)
	if (locale === "ru-RU") return ru_ru2_lang_zh_cn(inputs)
	return he_il2_lang_zh_cn(inputs)
});