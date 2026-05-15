/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_DarkInputs */

const en_us2_label_dark = /** @type {(inputs: Label_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
};

const zh_cn2_label_dark = /** @type {(inputs: Label_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`深色`)
};

const ru_ru2_label_dark = /** @type {(inputs: Label_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тёмная`)
};

const he_il2_label_dark = /** @type {(inputs: Label_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`כהה`)
};

/**
* | output |
* | --- |
* | "Dark" |
*
* @param {Label_DarkInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_dark = /** @type {((inputs?: Label_DarkInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_DarkInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_dark(inputs)
	if (locale === "zh-CN") return zh_cn2_label_dark(inputs)
	if (locale === "ru-RU") return ru_ru2_label_dark(inputs)
	return he_il2_label_dark(inputs)
});