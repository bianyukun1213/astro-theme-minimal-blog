/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Skip_To_ContentInputs */

const en_us2_label_skip_to_content = /** @type {(inputs: Label_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip to content`)
};

/** @type {(inputs: Label_Skip_To_ContentInputs) => LocalizedString} */
const zh_cn2_label_skip_to_content = en_us2_label_skip_to_content;

/** @type {(inputs: Label_Skip_To_ContentInputs) => LocalizedString} */
const ru_ru2_label_skip_to_content = en_us2_label_skip_to_content;

/**
* | output |
* | --- |
* | "Skip to content" |
*
* @param {Label_Skip_To_ContentInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_skip_to_content = /** @type {((inputs?: Label_Skip_To_ContentInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Skip_To_ContentInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_skip_to_content(inputs)
	if (locale === "zh-CN") return zh_cn2_label_skip_to_content(inputs)
	return ru_ru2_label_skip_to_content(inputs)
});