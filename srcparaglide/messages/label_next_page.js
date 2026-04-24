/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Next_PageInputs */

const en_us2_label_next_page = /** @type {(inputs: Label_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

/** @type {(inputs: Label_Next_PageInputs) => LocalizedString} */
const zh_cn2_label_next_page = en_us2_label_next_page;

/** @type {(inputs: Label_Next_PageInputs) => LocalizedString} */
const ru_ru2_label_next_page = en_us2_label_next_page;

/**
* | output |
* | --- |
* | "Next" |
*
* @param {Label_Next_PageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_next_page = /** @type {((inputs?: Label_Next_PageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Next_PageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_next_page(inputs)
	if (locale === "zh-CN") return zh_cn2_label_next_page(inputs)
	return ru_ru2_label_next_page(inputs)
});