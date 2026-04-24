/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Select_ThemeInputs */

const en_us2_label_select_theme = /** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select theme`)
};

/** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */
const zh_cn2_label_select_theme = en_us2_label_select_theme;

/** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */
const ru_ru2_label_select_theme = en_us2_label_select_theme;

/**
* | output |
* | --- |
* | "Select theme" |
*
* @param {Label_Select_ThemeInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_select_theme = /** @type {((inputs?: Label_Select_ThemeInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Select_ThemeInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_select_theme(inputs)
	if (locale === "zh-CN") return zh_cn2_label_select_theme(inputs)
	return ru_ru2_label_select_theme(inputs)
});