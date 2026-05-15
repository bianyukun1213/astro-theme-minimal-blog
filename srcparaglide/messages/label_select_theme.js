/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Select_ThemeInputs */

const en_us2_label_select_theme = /** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select theme`)
};

const zh_cn2_label_select_theme = /** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择主题`)
};

const ru_ru2_label_select_theme = /** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать тему`)
};

const he_il2_label_select_theme = /** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`בחר ערכת נושא`)
};

/**
* | output |
* | --- |
* | "Select theme" |
*
* @param {Label_Select_ThemeInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_select_theme = /** @type {((inputs?: Label_Select_ThemeInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Select_ThemeInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_select_theme(inputs)
	if (locale === "zh-CN") return zh_cn2_label_select_theme(inputs)
	if (locale === "ru-RU") return ru_ru2_label_select_theme(inputs)
	return he_il2_label_select_theme(inputs)
});