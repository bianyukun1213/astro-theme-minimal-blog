/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Label_Rss_FeedInputs */

const en_us2_label_rss_feed = /** @type {(inputs: Label_Rss_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RSS feed`)
};

/** @type {(inputs: Label_Rss_FeedInputs) => LocalizedString} */
const zh_cn2_label_rss_feed = en_us2_label_rss_feed;

/** @type {(inputs: Label_Rss_FeedInputs) => LocalizedString} */
const ru_ru2_label_rss_feed = en_us2_label_rss_feed;

/**
* | output |
* | --- |
* | "RSS feed" |
*
* @param {Label_Rss_FeedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" }} options
* @returns {LocalizedString}
*/
export const label_rss_feed = /** @type {((inputs?: Label_Rss_FeedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Rss_FeedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return en_us2_label_rss_feed(inputs)
	if (locale === "zh-CN") return zh_cn2_label_rss_feed(inputs)
	return ru_ru2_label_rss_feed(inputs)
});