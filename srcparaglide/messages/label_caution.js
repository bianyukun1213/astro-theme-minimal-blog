/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_CautionInputs */

const en_us2_label_caution = /** @type {(inputs: Label_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caution`)
};

const zh_cn2_label_caution = /** @type {(inputs: Label_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`警告`)
};

const ru_ru2_label_caution = /** @type {(inputs: Label_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предупреждение`)
};

const he_il2_label_caution = /** @type {(inputs: Label_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`זהירות`)
};

/**
* | output |
* | --- |
* | "Caution" |
*
* @param {Label_CautionInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_caution = /** @type {((inputs?: Label_CautionInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_CautionInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_caution(inputs)
	if (locale === "zh-CN") return zh_cn2_label_caution(inputs)
	if (locale === "ru-RU") return ru_ru2_label_caution(inputs)
	return he_il2_label_caution(inputs)
});