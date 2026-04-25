/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ username: NonNullable<unknown> }} Example_MessageInputs */

const en_us2_example_message = /** @type {(inputs: Example_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hello world ${i?.username}`)
};

const zh_cn2_example_message = /** @type {(inputs: Example_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`你好，世界 ${i?.username}`)
};

const ru_ru2_example_message = /** @type {(inputs: Example_MessageInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Привет, мир ${i?.username}`)
};

/**
* | output |
* | --- |
* | "Hello world {username}" |
*
* @param {Example_MessageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const example_message = /** @type {((inputs: Example_MessageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Example_MessageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_example_message(inputs)
	if (locale === "zh-CN") return zh_cn2_example_message(inputs)
	return ru_ru2_example_message(inputs)
});