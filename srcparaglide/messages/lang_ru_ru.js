/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Lang_Ru_RuInputs */

const en_us2_lang_ru_ru = /** @type {(inputs: Lang_Ru_RuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`🇷🇺 Рус.`)
};

const zh_cn2_lang_ru_ru = /** @type {(inputs: Lang_Ru_RuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`🇷🇺 Рус.`)
};

const ru_ru2_lang_ru_ru = /** @type {(inputs: Lang_Ru_RuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`🇷🇺 Рус.`)
};

const he_il2_lang_ru_ru = /** @type {(inputs: Lang_Ru_RuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`🇷🇺 Рус.`)
};

/**
* | output |
* | --- |
* | "🇷🇺 Рус." |
*
* @param {Lang_Ru_RuInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const lang_ru_ru = /** @type {((inputs?: Lang_Ru_RuInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Lang_Ru_RuInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_lang_ru_ru(inputs)
	if (locale === "zh-CN") return zh_cn2_lang_ru_ru(inputs)
	if (locale === "ru-RU") return ru_ru2_lang_ru_ru(inputs)
	return he_il2_lang_ru_ru(inputs)
});