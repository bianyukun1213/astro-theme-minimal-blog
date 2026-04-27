/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_LightInputs */

const en_us2_label_light = /** @type {(inputs: Label_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
};

const zh_cn2_label_light = /** @type {(inputs: Label_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浅色`)
};

const ru_ru2_label_light = /** @type {(inputs: Label_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Светлая`)
};

/**
* | output |
* | --- |
* | "Light" |
*
* @param {Label_LightInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_light = /** @type {((inputs?: Label_LightInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_LightInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_light(inputs)
	if (locale === "zh-CN") return zh_cn2_label_light(inputs)
	return ru_ru2_label_light(inputs)
});