/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_AuthorsInputs */

const en_us2_label_authors = /** @type {(inputs: Label_AuthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authors`)
};

const zh_cn2_label_authors = /** @type {(inputs: Label_AuthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

const ru_ru2_label_authors = /** @type {(inputs: Label_AuthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы`)
};

const he_il2_label_authors = /** @type {(inputs: Label_AuthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`מחברים`)
};

/**
* | output |
* | --- |
* | "Authors" |
*
* @param {Label_AuthorsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_authors = /** @type {((inputs?: Label_AuthorsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_AuthorsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_authors(inputs)
	if (locale === "zh-CN") return zh_cn2_label_authors(inputs)
	if (locale === "ru-RU") return ru_ru2_label_authors(inputs)
	return he_il2_label_authors(inputs)
});