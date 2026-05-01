/* eslint-disable */
import { getLocale, experimentalStaticLocale } from "../runtime.js"

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Lang_En_UsInputs */
/** @typedef {{}} Lang_Zh_CnInputs */
/** @typedef {{}} Lang_Ru_RuInputs */
/** @typedef {{}} Lang_He_IlInputs */
/** @typedef {{}} Site_TitleInputs */
/** @typedef {{}} Site_DescriptionInputs */
/** @typedef {{}} Site_FaviconInputs */
/** @typedef {{}} Site_Default_Og_ImageInputs */
/** @typedef {{}} Label_Latest_PostsInputs */
/** @typedef {{}} Label_All_PostsInputs */
/** @typedef {{ pageNum: NonNullable<unknown> }} Label_All_Posts_PagenumInputs */
/** @typedef {{}} Label_All_TagsInputs */
/** @typedef {{ pageNum: NonNullable<unknown> }} Label_All_Tags_PagenumInputs */
/** @typedef {{}} Label_TagsInputs */
/** @typedef {{ tagName: NonNullable<unknown>, count: NonNullable<unknown> }} Label_Tags_Tagname_CountInputs */
/** @typedef {{ tagName: NonNullable<unknown> }} Label_Tag_TagnameInputs */
/** @typedef {{ tagName: NonNullable<unknown>, pageNum: NonNullable<unknown> }} Label_Tag_Tagname_PagenumInputs */
/** @typedef {{}} Label_AuthorsInputs */
/** @typedef {{}} Label_Skip_To_ContentInputs */
/** @typedef {{}} Label_Rss_FeedInputs */
/** @typedef {{}} Label_Keep_ReadingInputs */
/** @typedef {{ siteTitle: NonNullable<unknown> }} Label_Back_To_HomeInputs */
/** @typedef {{}} Label_Primary_NavigationInputs */
/** @typedef {{}} Label_Posts_PaginationInputs */
/** @typedef {{}} Label_Previous_PageInputs */
/** @typedef {{}} Label_Next_PageInputs */
/** @typedef {{}} Label_Select_ThemeInputs */
/** @typedef {{}} Label_Select_LanguageInputs */
/** @typedef {{}} Label_LightInputs */
/** @typedef {{}} Label_DarkInputs */
/** @typedef {{}} Label_AutoInputs */
/** @typedef {{}} Label_NoteInputs */
/** @typedef {{}} Label_TipInputs */
/** @typedef {{}} Label_CautionInputs */
/** @typedef {{}} Label_DangerInputs */
/** @typedef {{}} Tag_GeneralInputs */
/** @typedef {{}} Tag_CodingInputs */
/** @typedef {{}} Tag_MdxInputs */
/** @typedef {{}} Tag_Open_SourceInputs */
/** @typedef {{}} Tag_SeoulInputs */
/** @typedef {{}} Tag_EnglishInputs */
/** @typedef {{}} Tag_ChineseInputs */
/** @typedef {{}} Tag_RussianInputs */
/** @typedef {{}} Tag_HebrewInputs */
import * as __en_us2 from "./en-US.js"
import * as __zh_cn2 from "./zh-CN.js"
import * as __ru_ru2 from "./ru-RU.js"
import * as __he_il2 from "./he-IL.js"
/**
* | output |
* | --- |
* | "Eng" |
*
* @param {Lang_En_UsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const lang_en_us = /** @type {((inputs?: Lang_En_UsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Lang_En_UsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.lang_en_us(inputs)
	if (locale === "zh-CN") return __zh_cn2.lang_en_us(inputs)
	if (locale === "ru-RU") return __ru_ru2.lang_en_us(inputs)
	return __he_il2.lang_en_us(inputs)
});
/**
* | output |
* | --- |
* | "简中" |
*
* @param {Lang_Zh_CnInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const lang_zh_cn = /** @type {((inputs?: Lang_Zh_CnInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Lang_Zh_CnInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.lang_zh_cn(inputs)
	if (locale === "zh-CN") return __zh_cn2.lang_zh_cn(inputs)
	if (locale === "ru-RU") return __ru_ru2.lang_zh_cn(inputs)
	return __he_il2.lang_zh_cn(inputs)
});
/**
* | output |
* | --- |
* | "Рус." |
*
* @param {Lang_Ru_RuInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const lang_ru_ru = /** @type {((inputs?: Lang_Ru_RuInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Lang_Ru_RuInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.lang_ru_ru(inputs)
	if (locale === "zh-CN") return __zh_cn2.lang_ru_ru(inputs)
	if (locale === "ru-RU") return __ru_ru2.lang_ru_ru(inputs)
	return __he_il2.lang_ru_ru(inputs)
});
/**
* | output |
* | --- |
* | "עברית" |
*
* @param {Lang_He_IlInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const lang_he_il = /** @type {((inputs?: Lang_He_IlInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Lang_He_IlInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.lang_he_il(inputs)
	if (locale === "zh-CN") return __zh_cn2.lang_he_il(inputs)
	if (locale === "ru-RU") return __ru_ru2.lang_he_il(inputs)
	return __he_il2.lang_he_il(inputs)
});
/**
* | output |
* | --- |
* | "My Blog" |
*
* @param {Site_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const site_title = /** @type {((inputs?: Site_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.site_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.site_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.site_title(inputs)
	return __he_il2.site_title(inputs)
});
/**
* | output |
* | --- |
* | "A minimal blog theme for Astro" |
*
* @param {Site_DescriptionInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const site_description = /** @type {((inputs?: Site_DescriptionInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_DescriptionInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.site_description(inputs)
	if (locale === "zh-CN") return __zh_cn2.site_description(inputs)
	if (locale === "ru-RU") return __ru_ru2.site_description(inputs)
	return __he_il2.site_description(inputs)
});
/**
* | output |
* | --- |
* | "https://placehold.co/32" |
*
* @param {Site_FaviconInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const site_favicon = /** @type {((inputs?: Site_FaviconInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_FaviconInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.site_favicon(inputs)
	if (locale === "zh-CN") return __zh_cn2.site_favicon(inputs)
	if (locale === "ru-RU") return __ru_ru2.site_favicon(inputs)
	return __he_il2.site_favicon(inputs)
});
/**
* | output |
* | --- |
* | "https://placehold.co/400x300" |
*
* @param {Site_Default_Og_ImageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const site_default_og_image = /** @type {((inputs?: Site_Default_Og_ImageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Site_Default_Og_ImageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.site_default_og_image(inputs)
	if (locale === "zh-CN") return __zh_cn2.site_default_og_image(inputs)
	if (locale === "ru-RU") return __ru_ru2.site_default_og_image(inputs)
	return __he_il2.site_default_og_image(inputs)
});
/**
* | output |
* | --- |
* | "Latest posts" |
*
* @param {Label_Latest_PostsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_latest_posts = /** @type {((inputs?: Label_Latest_PostsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Latest_PostsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_latest_posts(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_latest_posts(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_latest_posts(inputs)
	return __he_il2.label_latest_posts(inputs)
});
/**
* | output |
* | --- |
* | "All posts" |
*
* @param {Label_All_PostsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_all_posts = /** @type {((inputs?: Label_All_PostsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_All_PostsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_all_posts(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_all_posts(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_all_posts(inputs)
	return __he_il2.label_all_posts(inputs)
});
/**
* | output |
* | --- |
* | "All posts - page {pageNum}" |
*
* @param {Label_All_Posts_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_all_posts_pagenum = /** @type {((inputs: Label_All_Posts_PagenumInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_All_Posts_PagenumInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_all_posts_pagenum(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_all_posts_pagenum(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_all_posts_pagenum(inputs)
	return __he_il2.label_all_posts_pagenum(inputs)
});
/**
* | output |
* | --- |
* | "All tags" |
*
* @param {Label_All_TagsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_all_tags = /** @type {((inputs?: Label_All_TagsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_All_TagsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_all_tags(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_all_tags(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_all_tags(inputs)
	return __he_il2.label_all_tags(inputs)
});
/**
* | output |
* | --- |
* | "All tags - page {pageNum}" |
*
* @param {Label_All_Tags_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_all_tags_pagenum = /** @type {((inputs: Label_All_Tags_PagenumInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_All_Tags_PagenumInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_all_tags_pagenum(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_all_tags_pagenum(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_all_tags_pagenum(inputs)
	return __he_il2.label_all_tags_pagenum(inputs)
});
/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Label_TagsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tags = /** @type {((inputs?: Label_TagsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_TagsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tags(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tags(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tags(inputs)
	return __he_il2.label_tags(inputs)
});
/**
* | output |
* | --- |
* | "{tagName} ({count})" |
*
* @param {Label_Tags_Tagname_CountInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tags_tagname_count = /** @type {((inputs: Label_Tags_Tagname_CountInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tags_Tagname_CountInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tags_tagname_count(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tags_tagname_count(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tags_tagname_count(inputs)
	return __he_il2.label_tags_tagname_count(inputs)
});
/**
* | output |
* | --- |
* | "Tag: {tagName}" |
*
* @param {Label_Tag_TagnameInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tag_tagname = /** @type {((inputs: Label_Tag_TagnameInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tag_TagnameInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tag_tagname(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tag_tagname(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tag_tagname(inputs)
	return __he_il2.label_tag_tagname(inputs)
});
/**
* | output |
* | --- |
* | "Tag: {tagName} - page {pageNum}" |
*
* @param {Label_Tag_Tagname_PagenumInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tag_tagname_pagenum = /** @type {((inputs: Label_Tag_Tagname_PagenumInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tag_Tagname_PagenumInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tag_tagname_pagenum(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tag_tagname_pagenum(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tag_tagname_pagenum(inputs)
	return __he_il2.label_tag_tagname_pagenum(inputs)
});
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
	if (locale === "en-US") return __en_us2.label_authors(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_authors(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_authors(inputs)
	return __he_il2.label_authors(inputs)
});
/**
* | output |
* | --- |
* | "Skip to content" |
*
* @param {Label_Skip_To_ContentInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_skip_to_content = /** @type {((inputs?: Label_Skip_To_ContentInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Skip_To_ContentInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_skip_to_content(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_skip_to_content(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_skip_to_content(inputs)
	return __he_il2.label_skip_to_content(inputs)
});
/**
* | output |
* | --- |
* | "RSS feed" |
*
* @param {Label_Rss_FeedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_rss_feed = /** @type {((inputs?: Label_Rss_FeedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Rss_FeedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_rss_feed(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_rss_feed(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_rss_feed(inputs)
	return __he_il2.label_rss_feed(inputs)
});
/**
* | output |
* | --- |
* | "Keep reading" |
*
* @param {Label_Keep_ReadingInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_keep_reading = /** @type {((inputs?: Label_Keep_ReadingInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Keep_ReadingInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_keep_reading(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_keep_reading(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_keep_reading(inputs)
	return __he_il2.label_keep_reading(inputs)
});
/**
* | output |
* | --- |
* | "{siteTitle} - Back to home" |
*
* @param {Label_Back_To_HomeInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_back_to_home = /** @type {((inputs: Label_Back_To_HomeInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Back_To_HomeInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_back_to_home(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_back_to_home(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_back_to_home(inputs)
	return __he_il2.label_back_to_home(inputs)
});
/**
* | output |
* | --- |
* | "Primary navigation" |
*
* @param {Label_Primary_NavigationInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_primary_navigation = /** @type {((inputs?: Label_Primary_NavigationInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Primary_NavigationInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_primary_navigation(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_primary_navigation(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_primary_navigation(inputs)
	return __he_il2.label_primary_navigation(inputs)
});
/**
* | output |
* | --- |
* | "Posts pagination" |
*
* @param {Label_Posts_PaginationInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_posts_pagination = /** @type {((inputs?: Label_Posts_PaginationInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Posts_PaginationInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_posts_pagination(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_posts_pagination(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_posts_pagination(inputs)
	return __he_il2.label_posts_pagination(inputs)
});
/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Label_Previous_PageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_previous_page = /** @type {((inputs?: Label_Previous_PageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Previous_PageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_previous_page(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_previous_page(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_previous_page(inputs)
	return __he_il2.label_previous_page(inputs)
});
/**
* | output |
* | --- |
* | "Next" |
*
* @param {Label_Next_PageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_next_page = /** @type {((inputs?: Label_Next_PageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Next_PageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_next_page(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_next_page(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_next_page(inputs)
	return __he_il2.label_next_page(inputs)
});
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
	if (locale === "en-US") return __en_us2.label_select_theme(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_select_theme(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_select_theme(inputs)
	return __he_il2.label_select_theme(inputs)
});
/**
* | output |
* | --- |
* | "Select language" |
*
* @param {Label_Select_LanguageInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_select_language = /** @type {((inputs?: Label_Select_LanguageInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Select_LanguageInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_select_language(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_select_language(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_select_language(inputs)
	return __he_il2.label_select_language(inputs)
});
/**
* | output |
* | --- |
* | "Light" |
*
* @param {Label_LightInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_light = /** @type {((inputs?: Label_LightInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_LightInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_light(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_light(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_light(inputs)
	return __he_il2.label_light(inputs)
});
/**
* | output |
* | --- |
* | "Dark" |
*
* @param {Label_DarkInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_dark = /** @type {((inputs?: Label_DarkInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_DarkInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_dark(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_dark(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_dark(inputs)
	return __he_il2.label_dark(inputs)
});
/**
* | output |
* | --- |
* | "Auto" |
*
* @param {Label_AutoInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_auto = /** @type {((inputs?: Label_AutoInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_AutoInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_auto(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_auto(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_auto(inputs)
	return __he_il2.label_auto(inputs)
});
/**
* | output |
* | --- |
* | "Note" |
*
* @param {Label_NoteInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_note = /** @type {((inputs?: Label_NoteInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_NoteInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_note(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_note(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_note(inputs)
	return __he_il2.label_note(inputs)
});
/**
* | output |
* | --- |
* | "Tip" |
*
* @param {Label_TipInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tip = /** @type {((inputs?: Label_TipInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_TipInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tip(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tip(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tip(inputs)
	return __he_il2.label_tip(inputs)
});
/**
* | output |
* | --- |
* | "Caution" |
*
* @param {Label_CautionInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_caution = /** @type {((inputs?: Label_CautionInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_CautionInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_caution(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_caution(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_caution(inputs)
	return __he_il2.label_caution(inputs)
});
/**
* | output |
* | --- |
* | "Danger" |
*
* @param {Label_DangerInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_danger = /** @type {((inputs?: Label_DangerInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_DangerInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_danger(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_danger(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_danger(inputs)
	return __he_il2.label_danger(inputs)
});
/**
* | output |
* | --- |
* | "General" |
*
* @param {Tag_GeneralInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_general = /** @type {((inputs?: Tag_GeneralInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_GeneralInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_general(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_general(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_general(inputs)
	return __he_il2.tag_general(inputs)
});
/**
* | output |
* | --- |
* | "Coding" |
*
* @param {Tag_CodingInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_coding = /** @type {((inputs?: Tag_CodingInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_CodingInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_coding(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_coding(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_coding(inputs)
	return __he_il2.tag_coding(inputs)
});
/**
* | output |
* | --- |
* | "MDX" |
*
* @param {Tag_MdxInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_mdx = /** @type {((inputs?: Tag_MdxInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_MdxInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_mdx(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_mdx(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_mdx(inputs)
	return __he_il2.tag_mdx(inputs)
});
/**
* | output |
* | --- |
* | "Open source" |
*
* @param {Tag_Open_SourceInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_open_source = /** @type {((inputs?: Tag_Open_SourceInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_Open_SourceInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_open_source(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_open_source(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_open_source(inputs)
	return __he_il2.tag_open_source(inputs)
});
/**
* | output |
* | --- |
* | "Seoul" |
*
* @param {Tag_SeoulInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_seoul = /** @type {((inputs?: Tag_SeoulInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_SeoulInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_seoul(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_seoul(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_seoul(inputs)
	return __he_il2.tag_seoul(inputs)
});
/**
* | output |
* | --- |
* | "English" |
*
* @param {Tag_EnglishInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_english = /** @type {((inputs?: Tag_EnglishInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_EnglishInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_english(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_english(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_english(inputs)
	return __he_il2.tag_english(inputs)
});
/**
* | output |
* | --- |
* | "中文" |
*
* @param {Tag_ChineseInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_chinese = /** @type {((inputs?: Tag_ChineseInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_ChineseInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_chinese(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_chinese(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_chinese(inputs)
	return __he_il2.tag_chinese(inputs)
});
/**
* | output |
* | --- |
* | "Русский" |
*
* @param {Tag_RussianInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_russian = /** @type {((inputs?: Tag_RussianInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_RussianInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_russian(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_russian(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_russian(inputs)
	return __he_il2.tag_russian(inputs)
});
/**
* | output |
* | --- |
* | "עברית" |
*
* @param {Tag_HebrewInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_hebrew = /** @type {((inputs?: Tag_HebrewInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_HebrewInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_hebrew(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_hebrew(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_hebrew(inputs)
	return __he_il2.tag_hebrew(inputs)
});