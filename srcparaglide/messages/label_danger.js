/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_DangerInputs */

const en_us2_label_danger = /** @type {(inputs: Label_DangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danger`)
};

const zh_cn2_label_danger = /** @type {(inputs: Label_DangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`危险`)
};

const ru_ru2_label_danger = /** @type {(inputs: Label_DangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опасно`)
};

/**
* | output |
* | --- |
* | "Danger" |
*
* @param {Label_DangerInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_danger = /** @type {((inputs?: Label_DangerInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_DangerInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_danger(inputs)
	if (locale === "zh-CN") return zh_cn2_label_danger(inputs)
	return ru_ru2_label_danger(inputs)
});