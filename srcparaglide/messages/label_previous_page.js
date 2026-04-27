/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Previous_PageInputs */

const en_us2_label_previous_page = /** @type {(inputs: Label_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous`)
};

const zh_cn2_label_previous_page = /** @type {(inputs: Label_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一页`)
};

const ru_ru2_label_previous_page = /** @type {(inputs: Label_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предыдущая`)
};

/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Label_Previous_PageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_previous_page = /** @type {((inputs?: Label_Previous_PageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Previous_PageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_previous_page(inputs)
	if (locale === "zh-CN") return zh_cn2_label_previous_page(inputs)
	return ru_ru2_label_previous_page(inputs)
});