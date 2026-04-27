/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ siteTitle: NonNullable<unknown> }} Label_Back_To_HomeInputs */

const en_us2_label_back_to_home = /** @type {(inputs: Label_Back_To_HomeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteTitle} - Back to home`)
};

const zh_cn2_label_back_to_home = /** @type {(inputs: Label_Back_To_HomeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteTitle} - 返回首页`)
};

const ru_ru2_label_back_to_home = /** @type {(inputs: Label_Back_To_HomeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteTitle} - Назад на главную`)
};

/**
* | output |
* | --- |
* | "{siteTitle} - Back to home" |
*
* @param {Label_Back_To_HomeInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_back_to_home = /** @type {((inputs: Label_Back_To_HomeInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Back_To_HomeInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_back_to_home(inputs)
	if (locale === "zh-CN") return zh_cn2_label_back_to_home(inputs)
	return ru_ru2_label_back_to_home(inputs)
});