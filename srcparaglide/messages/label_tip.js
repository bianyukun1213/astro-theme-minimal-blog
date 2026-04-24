/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_TipInputs */

const en_us2_label_tip = /** @type {(inputs: Label_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip`)
};

/** @type {(inputs: Label_TipInputs) => LocalizedString} */
const zh_cn2_label_tip = en_us2_label_tip;

/** @type {(inputs: Label_TipInputs) => LocalizedString} */
const ru_ru2_label_tip = en_us2_label_tip;

/**
* | output |
* | --- |
* | "Tip" |
*
* @param {Label_TipInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_tip = /** @type {((inputs?: Label_TipInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_TipInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_tip(inputs)
	if (locale === "zh-CN") return zh_cn2_label_tip(inputs)
	return ru_ru2_label_tip(inputs)
});