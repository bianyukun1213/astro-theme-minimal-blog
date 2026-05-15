/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_AutoInputs */

const en_us2_label_auto = /** @type {(inputs: Label_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto`)
};

const zh_cn2_label_auto = /** @type {(inputs: Label_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动`)
};

const ru_ru2_label_auto = /** @type {(inputs: Label_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авто`)
};

const he_il2_label_auto = /** @type {(inputs: Label_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`אוטומטי`)
};

/**
* | output |
* | --- |
* | "Auto" |
*
* @param {Label_AutoInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_auto = /** @type {((inputs?: Label_AutoInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_AutoInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_auto(inputs)
	if (locale === "zh-CN") return zh_cn2_label_auto(inputs)
	if (locale === "ru-RU") return ru_ru2_label_auto(inputs)
	return he_il2_label_auto(inputs)
});