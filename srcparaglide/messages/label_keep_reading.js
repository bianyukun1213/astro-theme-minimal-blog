/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Keep_ReadingInputs */

const en_us2_label_keep_reading = /** @type {(inputs: Label_Keep_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep reading`)
};

/** @type {(inputs: Label_Keep_ReadingInputs) => LocalizedString} */
const zh_cn2_label_keep_reading = en_us2_label_keep_reading;

/** @type {(inputs: Label_Keep_ReadingInputs) => LocalizedString} */
const ru_ru2_label_keep_reading = en_us2_label_keep_reading;

/**
* | output |
* | --- |
* | "Keep reading" |
*
* @param {Label_Keep_ReadingInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_keep_reading = /** @type {((inputs?: Label_Keep_ReadingInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Keep_ReadingInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_keep_reading(inputs)
	if (locale === "zh-CN") return zh_cn2_label_keep_reading(inputs)
	return ru_ru2_label_keep_reading(inputs)
});