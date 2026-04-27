/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Primary_NavigationInputs */

const en_us2_label_primary_navigation = /** @type {(inputs: Label_Primary_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primary navigation`)
};

const zh_cn2_label_primary_navigation = /** @type {(inputs: Label_Primary_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主导航`)
};

const ru_ru2_label_primary_navigation = /** @type {(inputs: Label_Primary_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Основная навигация`)
};

/**
* | output |
* | --- |
* | "Primary navigation" |
*
* @param {Label_Primary_NavigationInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_primary_navigation = /** @type {((inputs?: Label_Primary_NavigationInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Primary_NavigationInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_primary_navigation(inputs)
	if (locale === "zh-CN") return zh_cn2_label_primary_navigation(inputs)
	return ru_ru2_label_primary_navigation(inputs)
});