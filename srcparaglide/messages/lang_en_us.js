/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Lang_En_UsInputs */

const en_us2_lang_en_us = /** @type {(inputs: Lang_En_UsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eng`)
};

const zh_cn2_lang_en_us = /** @type {(inputs: Lang_En_UsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eng`)
};

const ru_ru2_lang_en_us = /** @type {(inputs: Lang_En_UsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eng`)
};

const he_il2_lang_en_us = /** @type {(inputs: Lang_En_UsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eng`)
};

/**
* | output |
* | --- |
* | "Eng" |
*
* @param {Lang_En_UsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const lang_en_us = /** @type {((inputs?: Lang_En_UsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Lang_En_UsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_lang_en_us(inputs)
	if (locale === "zh-CN") return zh_cn2_lang_en_us(inputs)
	if (locale === "ru-RU") return ru_ru2_lang_en_us(inputs)
	return he_il2_lang_en_us(inputs)
});