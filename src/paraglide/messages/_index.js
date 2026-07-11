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
/** @typedef {{}} Label_More_PostsInputs */
/** @typedef {{}} Label_All_TagsInputs */
/** @typedef {{ pageNum: NonNullable<unknown> }} Label_All_Tags_PagenumInputs */
/** @typedef {{}} Label_TagsInputs */
/** @typedef {{ tagName: NonNullable<unknown>, count: NonNullable<unknown> }} Label_Tags_Tagname_CountInputs */
/** @typedef {{ tagName: NonNullable<unknown> }} Label_Tag_TagnameInputs */
/** @typedef {{ tagName: NonNullable<unknown>, pageNum: NonNullable<unknown> }} Label_Tag_Tagname_PagenumInputs */
/** @typedef {{}} Label_AuthorsInputs */
/** @typedef {{}} Label_StickyInputs */
/** @typedef {{}} Label_DraftInputs */
/** @typedef {{}} Btn_Skip_To_Content_TitleInputs */
/** @typedef {{}} Btn_Rss_Feed_TitleInputs */
/** @typedef {{}} Btn_Keep_Reading_TitleInputs */
/** @typedef {{ siteTitle: NonNullable<unknown> }} Btn_Back_To_Home_TitleInputs */
/** @typedef {{}} Btn_Back_To_Top_TitleInputs */
/** @typedef {{}} Btn_Interactions_TitleInputs */
/** @typedef {{}} Label_Primary_NavigationInputs */
/** @typedef {{}} Label_Posts_PaginationInputs */
/** @typedef {{}} Btn_Previous_Page_TitleInputs */
/** @typedef {{}} Btn_Next_Page_TitleInputs */
/** @typedef {{}} Label_Post_NavigationInputs */
/** @typedef {{}} Label_Select_ThemeInputs */
/** @typedef {{}} Label_Select_LanguageInputs */
/** @typedef {{}} Btn_Search_TitleInputs */
/** @typedef {{}} Btn_Expand_Toc_TitleInputs */
/** @typedef {{}} Label_LockedInputs */
/** @typedef {{}} Label_Password_PlaceholderInputs */
/** @typedef {{}} Btn_Unlock_TitleInputs */
/** @typedef {{}} Label_Password_IncorrectInputs */
/** @typedef {{}} Btn_Lock_TitleInputs */
/** @typedef {{}} Label_Tide_Picture_Default_MaskInputs */
/** @typedef {{}} Btn_Tide_Picture_Reveal_TitleInputs */
/** @typedef {{}} Label_Tide_InteractionsInputs */
/** @typedef {{}} Label_Tide_Interactions_WalineInputs */
/** @typedef {{}} Label_Tide_Interactions_WebmentionjsInputs */
/** @typedef {{}} Label_FootnotesInputs */
/** @typedef {{}} Btn_Footnote_Back_TitleInputs */
/** @typedef {{}} Label_LightInputs */
/** @typedef {{}} Label_DarkInputs */
/** @typedef {{}} Label_AutoInputs */
/** @typedef {{}} Label_NoteInputs */
/** @typedef {{}} Label_TipInputs */
/** @typedef {{}} Label_CautionInputs */
/** @typedef {{}} Label_DangerInputs */
/** @typedef {{}} Label_YoutubeInputs */
/** @typedef {{}} Label_Netease_MusicInputs */
/** @typedef {{}} Const_Pswp_Close_TitleInputs */
/** @typedef {{}} Const_Pswp_Zoom_TitleInputs */
/** @typedef {{}} Const_Pswp_Arrow_Prev_TitleInputs */
/** @typedef {{}} Const_Pswp_Arrow_Next_TitleInputs */
/** @typedef {{}} Const_Pswp_Error_MsgInputs */
/** @typedef {{}} Const_Pswp_Index_Indicator_SepInputs */
/** @typedef {{}} Const_Pswp_Caption_TitleInputs */
/** @typedef {{}} Const_Pswp_Reveal_TitleInputs */
/** @typedef {{}} Const_Waline_NickInputs */
/** @typedef {{}} Const_Waline_Nickerror1Inputs */
/** @typedef {{}} Const_Waline_MailInputs */
/** @typedef {{}} Const_Waline_Mailerror1Inputs */
/** @typedef {{}} Const_Waline_LinkInputs */
/** @typedef {{}} Const_Waline_OptionalInputs */
/** @typedef {{}} Const_Waline_PlaceholderInputs */
/** @typedef {{}} Const_Waline_SofaInputs */
/** @typedef {{}} Const_Waline_SubmitInputs */
/** @typedef {{}} Const_Waline_LikeInputs */
/** @typedef {{}} Const_Waline_Cancellike1Inputs */
/** @typedef {{}} Const_Waline_ReplyInputs */
/** @typedef {{}} Const_Waline_Cancelreply1Inputs */
/** @typedef {{}} Const_Waline_CommentInputs */
/** @typedef {{}} Const_Waline_RefreshInputs */
/** @typedef {{}} Const_Waline_MoreInputs */
/** @typedef {{}} Const_Waline_PreviewInputs */
/** @typedef {{}} Const_Waline_EmojiInputs */
/** @typedef {{}} Const_Waline_Uploadimage1Inputs */
/** @typedef {{}} Const_Waline_SecondsInputs */
/** @typedef {{}} Const_Waline_MinutesInputs */
/** @typedef {{}} Const_Waline_HoursInputs */
/** @typedef {{}} Const_Waline_DaysInputs */
/** @typedef {{}} Const_Waline_NowInputs */
/** @typedef {{}} Const_Waline_UploadingInputs */
/** @typedef {{}} Const_Waline_LoginInputs */
/** @typedef {{}} Const_Waline_LogoutInputs */
/** @typedef {{}} Const_Waline_AdminInputs */
/** @typedef {{}} Const_Waline_StickyInputs */
/** @typedef {{}} Const_Waline_WordInputs */
/** @typedef {{}} Const_Waline_Wordhint1Inputs */
/** @typedef {{}} Const_Waline_AnonymousInputs */
/** @typedef {{}} Const_Waline_Level0Inputs */
/** @typedef {{}} Const_Waline_Level1Inputs */
/** @typedef {{}} Const_Waline_Level2Inputs */
/** @typedef {{}} Const_Waline_Level3Inputs */
/** @typedef {{}} Const_Waline_Level4Inputs */
/** @typedef {{}} Const_Waline_Level5Inputs */
/** @typedef {{}} Const_Waline_GifInputs */
/** @typedef {{}} Const_Waline_Gifsearchplaceholder2Inputs */
/** @typedef {{}} Const_Waline_ProfileInputs */
/** @typedef {{}} Const_Waline_ApprovedInputs */
/** @typedef {{}} Const_Waline_WaitingInputs */
/** @typedef {{}} Const_Waline_SpamInputs */
/** @typedef {{}} Const_Waline_UnstickyInputs */
/** @typedef {{}} Const_Waline_OldestInputs */
/** @typedef {{}} Const_Waline_LatestInputs */
/** @typedef {{}} Const_Waline_HottestInputs */
/** @typedef {{}} Const_Waline_Reactiontitle1Inputs */
/** @typedef {{}} Const_Waline_Reaction0Inputs */
/** @typedef {{}} Const_Waline_Reaction1Inputs */
/** @typedef {{}} Const_Waline_Reaction2Inputs */
/** @typedef {{}} Const_Waline_Reaction3Inputs */
/** @typedef {{}} Const_Waline_Reaction4Inputs */
/** @typedef {{}} Const_Waline_Reaction5Inputs */
/** @typedef {{}} Const_Waline_Reaction6Inputs */
/** @typedef {{}} Const_Waline_Reaction7Inputs */
/** @typedef {{}} Const_Waline_Reaction8Inputs */
/** @typedef {{}} Const_Waline_Commentunderreview2Inputs */
/** @typedef {{}} Const_Waline_Subpostcomment2Inputs */
/** @typedef {{}} Const_Waline_Subsitecomment2Inputs */
/** @typedef {{}} Const_Waline_Subscribetoreplies2Inputs */
/** @typedef {{}} Const_Webmentionjs_RepliedInputs */
/** @typedef {{}} Const_Webmentionjs_LikedInputs */
/** @typedef {{}} Const_Webmentionjs_RepostedInputs */
/** @typedef {{}} Const_Webmentionjs_ReactedInputs */
/** @typedef {{}} Const_Webmentionjs_BookmarkedInputs */
/** @typedef {{}} Const_Webmentionjs_MentionedInputs */
/** @typedef {{}} Const_Webmentionjs_RsvpedInputs */
/** @typedef {{}} Const_Webmentionjs_FollowedInputs */
/** @typedef {{}} Const_Webmentionjs_ResponsesInputs */
/** @typedef {{}} Const_Webmentionjs_MentionInputs */
/** @typedef {{}} Const_Webmentionjs_ReactionsInputs */
/** @typedef {{}} Copyright_Cc_By_Sa_4_0Inputs */
/** @typedef {{}} Tag_UntaggedInputs */
/** @typedef {{}} Tag_GeneralInputs */
/** @typedef {{}} Tag_CodingInputs */
/** @typedef {{}} Tag_MdxInputs */
/** @typedef {{}} Tag_Open_SourceInputs */
/** @typedef {{}} Tag_SeoulInputs */
import * as __en_us2 from "./en-US.js"
import * as __zh_cn2 from "./zh-CN.js"
import * as __ru_ru2 from "./ru-RU.js"
import * as __he_il2 from "./he-IL.js"
/**
* | output |
* | --- |
* | "🇺🇸 Eng" |
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
* | "🇨🇳 简中" |
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
* | "🇷🇺 Рус." |
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
* | "🇮🇱 עברית" |
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
* | "His 2nd Life" |
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
* | "Life is short. Live it twice as wide!" |
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
* | "/images/favicon-32.webp" |
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
* | "/images/og-image.jpg" |
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
* | "More posts" |
*
* @param {Label_More_PostsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_more_posts = /** @type {((inputs?: Label_More_PostsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_More_PostsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_more_posts(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_more_posts(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_more_posts(inputs)
	return __he_il2.label_more_posts(inputs)
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
* | "Sticky" |
*
* @param {Label_StickyInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_sticky = /** @type {((inputs?: Label_StickyInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_StickyInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_sticky(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_sticky(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_sticky(inputs)
	return __he_il2.label_sticky(inputs)
});
/**
* | output |
* | --- |
* | "Draft" |
*
* @param {Label_DraftInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_draft = /** @type {((inputs?: Label_DraftInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_DraftInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_draft(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_draft(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_draft(inputs)
	return __he_il2.label_draft(inputs)
});
/**
* | output |
* | --- |
* | "Skip to content" |
*
* @param {Btn_Skip_To_Content_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_skip_to_content_title = /** @type {((inputs?: Btn_Skip_To_Content_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Skip_To_Content_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_skip_to_content_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_skip_to_content_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_skip_to_content_title(inputs)
	return __he_il2.btn_skip_to_content_title(inputs)
});
/**
* | output |
* | --- |
* | "RSS feed" |
*
* @param {Btn_Rss_Feed_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_rss_feed_title = /** @type {((inputs?: Btn_Rss_Feed_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Rss_Feed_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_rss_feed_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_rss_feed_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_rss_feed_title(inputs)
	return __he_il2.btn_rss_feed_title(inputs)
});
/**
* | output |
* | --- |
* | "Keep reading" |
*
* @param {Btn_Keep_Reading_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_keep_reading_title = /** @type {((inputs?: Btn_Keep_Reading_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Keep_Reading_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_keep_reading_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_keep_reading_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_keep_reading_title(inputs)
	return __he_il2.btn_keep_reading_title(inputs)
});
/**
* | output |
* | --- |
* | "{siteTitle} - Back to home" |
*
* @param {Btn_Back_To_Home_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_back_to_home_title = /** @type {((inputs: Btn_Back_To_Home_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Back_To_Home_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_back_to_home_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_back_to_home_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_back_to_home_title(inputs)
	return __he_il2.btn_back_to_home_title(inputs)
});
/**
* | output |
* | --- |
* | "Back to top" |
*
* @param {Btn_Back_To_Top_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_back_to_top_title = /** @type {((inputs?: Btn_Back_To_Top_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Back_To_Top_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_back_to_top_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_back_to_top_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_back_to_top_title(inputs)
	return __he_il2.btn_back_to_top_title(inputs)
});
/**
* | output |
* | --- |
* | "Interactions" |
*
* @param {Btn_Interactions_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_interactions_title = /** @type {((inputs?: Btn_Interactions_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Interactions_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_interactions_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_interactions_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_interactions_title(inputs)
	return __he_il2.btn_interactions_title(inputs)
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
* @param {Btn_Previous_Page_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_previous_page_title = /** @type {((inputs?: Btn_Previous_Page_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Previous_Page_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_previous_page_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_previous_page_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_previous_page_title(inputs)
	return __he_il2.btn_previous_page_title(inputs)
});
/**
* | output |
* | --- |
* | "Next" |
*
* @param {Btn_Next_Page_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_next_page_title = /** @type {((inputs?: Btn_Next_Page_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Next_Page_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_next_page_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_next_page_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_next_page_title(inputs)
	return __he_il2.btn_next_page_title(inputs)
});
/**
* | output |
* | --- |
* | "Post navigation" |
*
* @param {Label_Post_NavigationInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_post_navigation = /** @type {((inputs?: Label_Post_NavigationInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Post_NavigationInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_post_navigation(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_post_navigation(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_post_navigation(inputs)
	return __he_il2.label_post_navigation(inputs)
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
* | "Search" |
*
* @param {Btn_Search_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_search_title = /** @type {((inputs?: Btn_Search_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Search_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_search_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_search_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_search_title(inputs)
	return __he_il2.btn_search_title(inputs)
});
/**
* | output |
* | --- |
* | "Expand table of contents" |
*
* @param {Btn_Expand_Toc_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_expand_toc_title = /** @type {((inputs?: Btn_Expand_Toc_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Expand_Toc_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_expand_toc_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_expand_toc_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_expand_toc_title(inputs)
	return __he_il2.btn_expand_toc_title(inputs)
});
/**
* | output |
* | --- |
* | "Content locked" |
*
* @param {Label_LockedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_locked = /** @type {((inputs?: Label_LockedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_LockedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_locked(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_locked(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_locked(inputs)
	return __he_il2.label_locked(inputs)
});
/**
* | output |
* | --- |
* | "Enter password" |
*
* @param {Label_Password_PlaceholderInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_password_placeholder = /** @type {((inputs?: Label_Password_PlaceholderInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Password_PlaceholderInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_password_placeholder(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_password_placeholder(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_password_placeholder(inputs)
	return __he_il2.label_password_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "Unlock" |
*
* @param {Btn_Unlock_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_unlock_title = /** @type {((inputs?: Btn_Unlock_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Unlock_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_unlock_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_unlock_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_unlock_title(inputs)
	return __he_il2.btn_unlock_title(inputs)
});
/**
* | output |
* | --- |
* | "Incorrect password, please try again." |
*
* @param {Label_Password_IncorrectInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_password_incorrect = /** @type {((inputs?: Label_Password_IncorrectInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Password_IncorrectInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_password_incorrect(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_password_incorrect(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_password_incorrect(inputs)
	return __he_il2.label_password_incorrect(inputs)
});
/**
* | output |
* | --- |
* | "Lock" |
*
* @param {Btn_Lock_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_lock_title = /** @type {((inputs?: Btn_Lock_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Lock_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_lock_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_lock_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_lock_title(inputs)
	return __he_il2.btn_lock_title(inputs)
});
/**
* | output |
* | --- |
* | "Hidden" |
*
* @param {Label_Tide_Picture_Default_MaskInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tide_picture_default_mask = /** @type {((inputs?: Label_Tide_Picture_Default_MaskInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tide_Picture_Default_MaskInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tide_picture_default_mask(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tide_picture_default_mask(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tide_picture_default_mask(inputs)
	return __he_il2.label_tide_picture_default_mask(inputs)
});
/**
* | output |
* | --- |
* | "Click to reveal" |
*
* @param {Btn_Tide_Picture_Reveal_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_tide_picture_reveal_title = /** @type {((inputs?: Btn_Tide_Picture_Reveal_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Tide_Picture_Reveal_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_tide_picture_reveal_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_tide_picture_reveal_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_tide_picture_reveal_title(inputs)
	return __he_il2.btn_tide_picture_reveal_title(inputs)
});
/**
* | output |
* | --- |
* | "Interactions" |
*
* @param {Label_Tide_InteractionsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tide_interactions = /** @type {((inputs?: Label_Tide_InteractionsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tide_InteractionsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tide_interactions(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tide_interactions(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tide_interactions(inputs)
	return __he_il2.label_tide_interactions(inputs)
});
/**
* | output |
* | --- |
* | "Waline" |
*
* @param {Label_Tide_Interactions_WalineInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tide_interactions_waline = /** @type {((inputs?: Label_Tide_Interactions_WalineInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tide_Interactions_WalineInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tide_interactions_waline(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tide_interactions_waline(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tide_interactions_waline(inputs)
	return __he_il2.label_tide_interactions_waline(inputs)
});
/**
* | output |
* | --- |
* | "Webmentions" |
*
* @param {Label_Tide_Interactions_WebmentionjsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_tide_interactions_webmentionjs = /** @type {((inputs?: Label_Tide_Interactions_WebmentionjsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Tide_Interactions_WebmentionjsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_tide_interactions_webmentionjs(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_tide_interactions_webmentionjs(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_tide_interactions_webmentionjs(inputs)
	return __he_il2.label_tide_interactions_webmentionjs(inputs)
});
/**
* | output |
* | --- |
* | "Footnotes" |
*
* @param {Label_FootnotesInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_footnotes = /** @type {((inputs?: Label_FootnotesInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_FootnotesInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_footnotes(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_footnotes(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_footnotes(inputs)
	return __he_il2.label_footnotes(inputs)
});
/**
* | output |
* | --- |
* | "Back to content" |
*
* @param {Btn_Footnote_Back_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const btn_footnote_back_title = /** @type {((inputs?: Btn_Footnote_Back_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Btn_Footnote_Back_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.btn_footnote_back_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.btn_footnote_back_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.btn_footnote_back_title(inputs)
	return __he_il2.btn_footnote_back_title(inputs)
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
* | "YouTube video player" |
*
* @param {Label_YoutubeInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_youtube = /** @type {((inputs?: Label_YoutubeInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_YoutubeInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_youtube(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_youtube(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_youtube(inputs)
	return __he_il2.label_youtube(inputs)
});
/**
* | output |
* | --- |
* | "NetEase Music" |
*
* @param {Label_Netease_MusicInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const label_netease_music = /** @type {((inputs?: Label_Netease_MusicInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Label_Netease_MusicInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.label_netease_music(inputs)
	if (locale === "zh-CN") return __zh_cn2.label_netease_music(inputs)
	if (locale === "ru-RU") return __ru_ru2.label_netease_music(inputs)
	return __he_il2.label_netease_music(inputs)
});
/**
* | output |
* | --- |
* | "Close" |
*
* @param {Const_Pswp_Close_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_pswp_close_title = /** @type {((inputs?: Const_Pswp_Close_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Pswp_Close_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_pswp_close_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_pswp_close_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_pswp_close_title(inputs)
	return __he_il2.const_pswp_close_title(inputs)
});
/**
* | output |
* | --- |
* | "Zoom" |
*
* @param {Const_Pswp_Zoom_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_pswp_zoom_title = /** @type {((inputs?: Const_Pswp_Zoom_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Pswp_Zoom_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_pswp_zoom_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_pswp_zoom_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_pswp_zoom_title(inputs)
	return __he_il2.const_pswp_zoom_title(inputs)
});
/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Const_Pswp_Arrow_Prev_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_pswp_arrow_prev_title = /** @type {((inputs?: Const_Pswp_Arrow_Prev_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Pswp_Arrow_Prev_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_pswp_arrow_prev_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_pswp_arrow_prev_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_pswp_arrow_prev_title(inputs)
	return __he_il2.const_pswp_arrow_prev_title(inputs)
});
/**
* | output |
* | --- |
* | "Next" |
*
* @param {Const_Pswp_Arrow_Next_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_pswp_arrow_next_title = /** @type {((inputs?: Const_Pswp_Arrow_Next_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Pswp_Arrow_Next_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_pswp_arrow_next_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_pswp_arrow_next_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_pswp_arrow_next_title(inputs)
	return __he_il2.const_pswp_arrow_next_title(inputs)
});
/**
* | output |
* | --- |
* | "The image cannot be loaded" |
*
* @param {Const_Pswp_Error_MsgInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_pswp_error_msg = /** @type {((inputs?: Const_Pswp_Error_MsgInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Pswp_Error_MsgInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_pswp_error_msg(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_pswp_error_msg(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_pswp_error_msg(inputs)
	return __he_il2.const_pswp_error_msg(inputs)
});
/**
* | output |
* | --- |
* | "/" |
*
* @param {Const_Pswp_Index_Indicator_SepInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_pswp_index_indicator_sep = /** @type {((inputs?: Const_Pswp_Index_Indicator_SepInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Pswp_Index_Indicator_SepInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_pswp_index_indicator_sep(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_pswp_index_indicator_sep(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_pswp_index_indicator_sep(inputs)
	return __he_il2.const_pswp_index_indicator_sep(inputs)
});
/**
* | output |
* | --- |
* | "Caption" |
*
* @param {Const_Pswp_Caption_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_pswp_caption_title = /** @type {((inputs?: Const_Pswp_Caption_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Pswp_Caption_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_pswp_caption_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_pswp_caption_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_pswp_caption_title(inputs)
	return __he_il2.const_pswp_caption_title(inputs)
});
/**
* | output |
* | --- |
* | "Reveal" |
*
* @param {Const_Pswp_Reveal_TitleInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_pswp_reveal_title = /** @type {((inputs?: Const_Pswp_Reveal_TitleInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Pswp_Reveal_TitleInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_pswp_reveal_title(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_pswp_reveal_title(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_pswp_reveal_title(inputs)
	return __he_il2.const_pswp_reveal_title(inputs)
});
/**
* | output |
* | --- |
* | "Nickname" |
*
* @param {Const_Waline_NickInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_nick = /** @type {((inputs?: Const_Waline_NickInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_NickInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_nick(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_nick(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_nick(inputs)
	return __he_il2.const_waline_nick(inputs)
});
/**
* | output |
* | --- |
* | "Nickname must be at least 3 characters" |
*
* @param {Const_Waline_Nickerror1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_nickerror1 = /** @type {((inputs?: Const_Waline_Nickerror1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Nickerror1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_nickerror1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_nickerror1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_nickerror1(inputs)
	return __he_il2.const_waline_nickerror1(inputs)
});
export { const_waline_nickerror1 as "const_waline_nickError" }
/**
* | output |
* | --- |
* | "Email" |
*
* @param {Const_Waline_MailInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_mail = /** @type {((inputs?: Const_Waline_MailInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_MailInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_mail(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_mail(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_mail(inputs)
	return __he_il2.const_waline_mail(inputs)
});
/**
* | output |
* | --- |
* | "Please enter a valid email address" |
*
* @param {Const_Waline_Mailerror1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_mailerror1 = /** @type {((inputs?: Const_Waline_Mailerror1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Mailerror1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_mailerror1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_mailerror1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_mailerror1(inputs)
	return __he_il2.const_waline_mailerror1(inputs)
});
export { const_waline_mailerror1 as "const_waline_mailError" }
/**
* | output |
* | --- |
* | "Website" |
*
* @param {Const_Waline_LinkInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_link = /** @type {((inputs?: Const_Waline_LinkInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_LinkInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_link(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_link(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_link(inputs)
	return __he_il2.const_waline_link(inputs)
});
/**
* | output |
* | --- |
* | "Optional" |
*
* @param {Const_Waline_OptionalInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_optional = /** @type {((inputs?: Const_Waline_OptionalInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_OptionalInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_optional(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_optional(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_optional(inputs)
	return __he_il2.const_waline_optional(inputs)
});
/**
* | output |
* | --- |
* | "Leave a comment" |
*
* @param {Const_Waline_PlaceholderInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_placeholder = /** @type {((inputs?: Const_Waline_PlaceholderInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_PlaceholderInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_placeholder(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_placeholder(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_placeholder(inputs)
	return __he_il2.const_waline_placeholder(inputs)
});
/**
* | output |
* | --- |
* | "Be the first to comment?" |
*
* @param {Const_Waline_SofaInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_sofa = /** @type {((inputs?: Const_Waline_SofaInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_SofaInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_sofa(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_sofa(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_sofa(inputs)
	return __he_il2.const_waline_sofa(inputs)
});
/**
* | output |
* | --- |
* | "Submit" |
*
* @param {Const_Waline_SubmitInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_submit = /** @type {((inputs?: Const_Waline_SubmitInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_SubmitInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_submit(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_submit(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_submit(inputs)
	return __he_il2.const_waline_submit(inputs)
});
/**
* | output |
* | --- |
* | "Like" |
*
* @param {Const_Waline_LikeInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_like = /** @type {((inputs?: Const_Waline_LikeInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_LikeInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_like(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_like(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_like(inputs)
	return __he_il2.const_waline_like(inputs)
});
/**
* | output |
* | --- |
* | "Unlike" |
*
* @param {Const_Waline_Cancellike1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_cancellike1 = /** @type {((inputs?: Const_Waline_Cancellike1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Cancellike1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_cancellike1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_cancellike1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_cancellike1(inputs)
	return __he_il2.const_waline_cancellike1(inputs)
});
export { const_waline_cancellike1 as "const_waline_cancelLike" }
/**
* | output |
* | --- |
* | "Reply" |
*
* @param {Const_Waline_ReplyInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reply = /** @type {((inputs?: Const_Waline_ReplyInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_ReplyInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reply(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reply(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reply(inputs)
	return __he_il2.const_waline_reply(inputs)
});
/**
* | output |
* | --- |
* | "Cancel reply" |
*
* @param {Const_Waline_Cancelreply1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_cancelreply1 = /** @type {((inputs?: Const_Waline_Cancelreply1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Cancelreply1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_cancelreply1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_cancelreply1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_cancelreply1(inputs)
	return __he_il2.const_waline_cancelreply1(inputs)
});
export { const_waline_cancelreply1 as "const_waline_cancelReply" }
/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Const_Waline_CommentInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_comment = /** @type {((inputs?: Const_Waline_CommentInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_CommentInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_comment(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_comment(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_comment(inputs)
	return __he_il2.const_waline_comment(inputs)
});
/**
* | output |
* | --- |
* | "Refresh" |
*
* @param {Const_Waline_RefreshInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_refresh = /** @type {((inputs?: Const_Waline_RefreshInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_RefreshInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_refresh(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_refresh(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_refresh(inputs)
	return __he_il2.const_waline_refresh(inputs)
});
/**
* | output |
* | --- |
* | "Load more…" |
*
* @param {Const_Waline_MoreInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_more = /** @type {((inputs?: Const_Waline_MoreInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_MoreInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_more(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_more(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_more(inputs)
	return __he_il2.const_waline_more(inputs)
});
/**
* | output |
* | --- |
* | "Preview" |
*
* @param {Const_Waline_PreviewInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_preview = /** @type {((inputs?: Const_Waline_PreviewInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_PreviewInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_preview(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_preview(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_preview(inputs)
	return __he_il2.const_waline_preview(inputs)
});
/**
* | output |
* | --- |
* | "Emoji" |
*
* @param {Const_Waline_EmojiInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_emoji = /** @type {((inputs?: Const_Waline_EmojiInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_EmojiInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_emoji(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_emoji(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_emoji(inputs)
	return __he_il2.const_waline_emoji(inputs)
});
/**
* | output |
* | --- |
* | "Upload images" |
*
* @param {Const_Waline_Uploadimage1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_uploadimage1 = /** @type {((inputs?: Const_Waline_Uploadimage1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Uploadimage1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_uploadimage1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_uploadimage1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_uploadimage1(inputs)
	return __he_il2.const_waline_uploadimage1(inputs)
});
export { const_waline_uploadimage1 as "const_waline_uploadImage" }
/**
* | output |
* | --- |
* | "second(s) ago" |
*
* @param {Const_Waline_SecondsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_seconds = /** @type {((inputs?: Const_Waline_SecondsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_SecondsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_seconds(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_seconds(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_seconds(inputs)
	return __he_il2.const_waline_seconds(inputs)
});
/**
* | output |
* | --- |
* | "minute(s) ago" |
*
* @param {Const_Waline_MinutesInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_minutes = /** @type {((inputs?: Const_Waline_MinutesInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_MinutesInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_minutes(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_minutes(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_minutes(inputs)
	return __he_il2.const_waline_minutes(inputs)
});
/**
* | output |
* | --- |
* | "hour(s) ago" |
*
* @param {Const_Waline_HoursInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_hours = /** @type {((inputs?: Const_Waline_HoursInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_HoursInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_hours(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_hours(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_hours(inputs)
	return __he_il2.const_waline_hours(inputs)
});
/**
* | output |
* | --- |
* | "day(s) ago" |
*
* @param {Const_Waline_DaysInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_days = /** @type {((inputs?: Const_Waline_DaysInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_DaysInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_days(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_days(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_days(inputs)
	return __he_il2.const_waline_days(inputs)
});
/**
* | output |
* | --- |
* | "Just now" |
*
* @param {Const_Waline_NowInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_now = /** @type {((inputs?: Const_Waline_NowInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_NowInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_now(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_now(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_now(inputs)
	return __he_il2.const_waline_now(inputs)
});
/**
* | output |
* | --- |
* | "Uploading" |
*
* @param {Const_Waline_UploadingInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_uploading = /** @type {((inputs?: Const_Waline_UploadingInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_UploadingInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_uploading(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_uploading(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_uploading(inputs)
	return __he_il2.const_waline_uploading(inputs)
});
/**
* | output |
* | --- |
* | "Login" |
*
* @param {Const_Waline_LoginInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_login = /** @type {((inputs?: Const_Waline_LoginInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_LoginInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_login(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_login(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_login(inputs)
	return __he_il2.const_waline_login(inputs)
});
/**
* | output |
* | --- |
* | "Logout" |
*
* @param {Const_Waline_LogoutInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_logout = /** @type {((inputs?: Const_Waline_LogoutInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_LogoutInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_logout(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_logout(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_logout(inputs)
	return __he_il2.const_waline_logout(inputs)
});
/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Const_Waline_AdminInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_admin = /** @type {((inputs?: Const_Waline_AdminInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_AdminInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_admin(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_admin(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_admin(inputs)
	return __he_il2.const_waline_admin(inputs)
});
/**
* | output |
* | --- |
* | "Pin" |
*
* @param {Const_Waline_StickyInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_sticky = /** @type {((inputs?: Const_Waline_StickyInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_StickyInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_sticky(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_sticky(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_sticky(inputs)
	return __he_il2.const_waline_sticky(inputs)
});
/**
* | output |
* | --- |
* | "word(s)" |
*
* @param {Const_Waline_WordInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_word = /** @type {((inputs?: Const_Waline_WordInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_WordInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_word(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_word(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_word(inputs)
	return __he_il2.const_waline_word(inputs)
});
/**
* | output |
* | --- |
* | "Comment should be between $0 and $1 word(s)! Current count: $2" |
*
* @param {Const_Waline_Wordhint1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_wordhint1 = /** @type {((inputs?: Const_Waline_Wordhint1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Wordhint1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_wordhint1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_wordhint1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_wordhint1(inputs)
	return __he_il2.const_waline_wordhint1(inputs)
});
export { const_waline_wordhint1 as "const_waline_wordHint" }
/**
* | output |
* | --- |
* | "Anonymous" |
*
* @param {Const_Waline_AnonymousInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_anonymous = /** @type {((inputs?: Const_Waline_AnonymousInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_AnonymousInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_anonymous(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_anonymous(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_anonymous(inputs)
	return __he_il2.const_waline_anonymous(inputs)
});
/**
* | output |
* | --- |
* | "Level 0" |
*
* @param {Const_Waline_Level0Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_level0 = /** @type {((inputs?: Const_Waline_Level0Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Level0Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_level0(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_level0(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_level0(inputs)
	return __he_il2.const_waline_level0(inputs)
});
/**
* | output |
* | --- |
* | "Level 1" |
*
* @param {Const_Waline_Level1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_level1 = /** @type {((inputs?: Const_Waline_Level1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Level1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_level1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_level1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_level1(inputs)
	return __he_il2.const_waline_level1(inputs)
});
/**
* | output |
* | --- |
* | "Level 2" |
*
* @param {Const_Waline_Level2Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_level2 = /** @type {((inputs?: Const_Waline_Level2Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Level2Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_level2(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_level2(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_level2(inputs)
	return __he_il2.const_waline_level2(inputs)
});
/**
* | output |
* | --- |
* | "Level 3" |
*
* @param {Const_Waline_Level3Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_level3 = /** @type {((inputs?: Const_Waline_Level3Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Level3Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_level3(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_level3(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_level3(inputs)
	return __he_il2.const_waline_level3(inputs)
});
/**
* | output |
* | --- |
* | "Level 4" |
*
* @param {Const_Waline_Level4Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_level4 = /** @type {((inputs?: Const_Waline_Level4Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Level4Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_level4(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_level4(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_level4(inputs)
	return __he_il2.const_waline_level4(inputs)
});
/**
* | output |
* | --- |
* | "Level 5" |
*
* @param {Const_Waline_Level5Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_level5 = /** @type {((inputs?: Const_Waline_Level5Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Level5Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_level5(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_level5(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_level5(inputs)
	return __he_il2.const_waline_level5(inputs)
});
/**
* | output |
* | --- |
* | "GIF" |
*
* @param {Const_Waline_GifInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_gif = /** @type {((inputs?: Const_Waline_GifInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_GifInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_gif(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_gif(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_gif(inputs)
	return __he_il2.const_waline_gif(inputs)
});
/**
* | output |
* | --- |
* | "Search GIFs" |
*
* @param {Const_Waline_Gifsearchplaceholder2Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_gifsearchplaceholder2 = /** @type {((inputs?: Const_Waline_Gifsearchplaceholder2Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Gifsearchplaceholder2Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_gifsearchplaceholder2(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_gifsearchplaceholder2(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_gifsearchplaceholder2(inputs)
	return __he_il2.const_waline_gifsearchplaceholder2(inputs)
});
export { const_waline_gifsearchplaceholder2 as "const_waline_gifSearchPlaceholder" }
/**
* | output |
* | --- |
* | "Profile" |
*
* @param {Const_Waline_ProfileInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_profile = /** @type {((inputs?: Const_Waline_ProfileInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_ProfileInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_profile(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_profile(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_profile(inputs)
	return __he_il2.const_waline_profile(inputs)
});
/**
* | output |
* | --- |
* | "Approved" |
*
* @param {Const_Waline_ApprovedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_approved = /** @type {((inputs?: Const_Waline_ApprovedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_ApprovedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_approved(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_approved(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_approved(inputs)
	return __he_il2.const_waline_approved(inputs)
});
/**
* | output |
* | --- |
* | "Pending" |
*
* @param {Const_Waline_WaitingInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_waiting = /** @type {((inputs?: Const_Waline_WaitingInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_WaitingInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_waiting(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_waiting(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_waiting(inputs)
	return __he_il2.const_waline_waiting(inputs)
});
/**
* | output |
* | --- |
* | "Spam" |
*
* @param {Const_Waline_SpamInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_spam = /** @type {((inputs?: Const_Waline_SpamInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_SpamInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_spam(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_spam(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_spam(inputs)
	return __he_il2.const_waline_spam(inputs)
});
/**
* | output |
* | --- |
* | "Unpin" |
*
* @param {Const_Waline_UnstickyInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_unsticky = /** @type {((inputs?: Const_Waline_UnstickyInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_UnstickyInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_unsticky(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_unsticky(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_unsticky(inputs)
	return __he_il2.const_waline_unsticky(inputs)
});
/**
* | output |
* | --- |
* | "Oldest" |
*
* @param {Const_Waline_OldestInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_oldest = /** @type {((inputs?: Const_Waline_OldestInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_OldestInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_oldest(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_oldest(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_oldest(inputs)
	return __he_il2.const_waline_oldest(inputs)
});
/**
* | output |
* | --- |
* | "Latest" |
*
* @param {Const_Waline_LatestInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_latest = /** @type {((inputs?: Const_Waline_LatestInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_LatestInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_latest(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_latest(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_latest(inputs)
	return __he_il2.const_waline_latest(inputs)
});
/**
* | output |
* | --- |
* | "Hottest" |
*
* @param {Const_Waline_HottestInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_hottest = /** @type {((inputs?: Const_Waline_HottestInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_HottestInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_hottest(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_hottest(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_hottest(inputs)
	return __he_il2.const_waline_hottest(inputs)
});
/**
* | output |
* | --- |
* | "Leave your reaction?" |
*
* @param {Const_Waline_Reactiontitle1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_reactiontitle1 = /** @type {((inputs?: Const_Waline_Reactiontitle1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reactiontitle1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reactiontitle1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reactiontitle1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reactiontitle1(inputs)
	return __he_il2.const_waline_reactiontitle1(inputs)
});
export { const_waline_reactiontitle1 as "const_waline_reactionTitle" }
/**
* | output |
* | --- |
* | "Like" |
*
* @param {Const_Waline_Reaction0Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction0 = /** @type {((inputs?: Const_Waline_Reaction0Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction0Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction0(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction0(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction0(inputs)
	return __he_il2.const_waline_reaction0(inputs)
});
/**
* | output |
* | --- |
* | "Dislike" |
*
* @param {Const_Waline_Reaction1Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction1 = /** @type {((inputs?: Const_Waline_Reaction1Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction1Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction1(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction1(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction1(inputs)
	return __he_il2.const_waline_reaction1(inputs)
});
/**
* | output |
* | --- |
* | "Garbage" |
*
* @param {Const_Waline_Reaction2Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction2 = /** @type {((inputs?: Const_Waline_Reaction2Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction2Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction2(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction2(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction2(inputs)
	return __he_il2.const_waline_reaction2(inputs)
});
/**
* | output |
* | --- |
* | "Side-eye" |
*
* @param {Const_Waline_Reaction3Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction3 = /** @type {((inputs?: Const_Waline_Reaction3Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction3Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction3(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction3(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction3(inputs)
	return __he_il2.const_waline_reaction3(inputs)
});
/**
* | output |
* | --- |
* | "Thanks" |
*
* @param {Const_Waline_Reaction4Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction4 = /** @type {((inputs?: Const_Waline_Reaction4Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction4Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction4(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction4(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction4(inputs)
	return __he_il2.const_waline_reaction4(inputs)
});
/**
* | output |
* | --- |
* | "Awesome!" |
*
* @param {Const_Waline_Reaction5Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction5 = /** @type {((inputs?: Const_Waline_Reaction5Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction5Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction5(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction5(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction5(inputs)
	return __he_il2.const_waline_reaction5(inputs)
});
/**
* | output |
* | --- |
* | "" |
*
* @param {Const_Waline_Reaction6Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction6 = /** @type {((inputs?: Const_Waline_Reaction6Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction6Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction6(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction6(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction6(inputs)
	return __he_il2.const_waline_reaction6(inputs)
});
/**
* | output |
* | --- |
* | "" |
*
* @param {Const_Waline_Reaction7Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction7 = /** @type {((inputs?: Const_Waline_Reaction7Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction7Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction7(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction7(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction7(inputs)
	return __he_il2.const_waline_reaction7(inputs)
});
/**
* | output |
* | --- |
* | "" |
*
* @param {Const_Waline_Reaction8Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_waline_reaction8 = /** @type {((inputs?: Const_Waline_Reaction8Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Reaction8Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_reaction8(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_reaction8(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_reaction8(inputs)
	return __he_il2.const_waline_reaction8(inputs)
});
/**
* | output |
* | --- |
* | "Your comment is under review. It is currently only visible to you and will be publicly visible once approved." |
*
* @param {Const_Waline_Commentunderreview2Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_commentunderreview2 = /** @type {((inputs?: Const_Waline_Commentunderreview2Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Commentunderreview2Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_commentunderreview2(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_commentunderreview2(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_commentunderreview2(inputs)
	return __he_il2.const_waline_commentunderreview2(inputs)
});
export { const_waline_commentunderreview2 as "const_waline_commentUnderReview" }
/**
* | output |
* | --- |
* | "Subscribe to comments on this post" |
*
* @param {Const_Waline_Subpostcomment2Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_subpostcomment2 = /** @type {((inputs?: Const_Waline_Subpostcomment2Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Subpostcomment2Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_subpostcomment2(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_subpostcomment2(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_subpostcomment2(inputs)
	return __he_il2.const_waline_subpostcomment2(inputs)
});
export { const_waline_subpostcomment2 as "const_waline_subPostComment" }
/**
* | output |
* | --- |
* | "Subscribe to all site comments" |
*
* @param {Const_Waline_Subsitecomment2Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_subsitecomment2 = /** @type {((inputs?: Const_Waline_Subsitecomment2Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Subsitecomment2Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_subsitecomment2(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_subsitecomment2(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_subsitecomment2(inputs)
	return __he_il2.const_waline_subsitecomment2(inputs)
});
export { const_waline_subsitecomment2 as "const_waline_subSiteComment" }
/**
* | output |
* | --- |
* | "Subscribe to replies to your comments" |
*
* @param {Const_Waline_Subscribetoreplies2Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
const const_waline_subscribetoreplies2 = /** @type {((inputs?: Const_Waline_Subscribetoreplies2Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Waline_Subscribetoreplies2Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_waline_subscribetoreplies2(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_waline_subscribetoreplies2(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_waline_subscribetoreplies2(inputs)
	return __he_il2.const_waline_subscribetoreplies2(inputs)
});
export { const_waline_subscribetoreplies2 as "const_waline_subscribeToReplies" }
/**
* | output |
* | --- |
* | "replied" |
*
* @param {Const_Webmentionjs_RepliedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_replied = /** @type {((inputs?: Const_Webmentionjs_RepliedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_RepliedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_replied(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_replied(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_replied(inputs)
	return __he_il2.const_webmentionjs_replied(inputs)
});
/**
* | output |
* | --- |
* | "liked" |
*
* @param {Const_Webmentionjs_LikedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_liked = /** @type {((inputs?: Const_Webmentionjs_LikedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_LikedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_liked(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_liked(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_liked(inputs)
	return __he_il2.const_webmentionjs_liked(inputs)
});
/**
* | output |
* | --- |
* | "reposted" |
*
* @param {Const_Webmentionjs_RepostedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_reposted = /** @type {((inputs?: Const_Webmentionjs_RepostedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_RepostedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_reposted(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_reposted(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_reposted(inputs)
	return __he_il2.const_webmentionjs_reposted(inputs)
});
/**
* | output |
* | --- |
* | "reacted" |
*
* @param {Const_Webmentionjs_ReactedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_reacted = /** @type {((inputs?: Const_Webmentionjs_ReactedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_ReactedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_reacted(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_reacted(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_reacted(inputs)
	return __he_il2.const_webmentionjs_reacted(inputs)
});
/**
* | output |
* | --- |
* | "bookmarked" |
*
* @param {Const_Webmentionjs_BookmarkedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_bookmarked = /** @type {((inputs?: Const_Webmentionjs_BookmarkedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_BookmarkedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_bookmarked(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_bookmarked(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_bookmarked(inputs)
	return __he_il2.const_webmentionjs_bookmarked(inputs)
});
/**
* | output |
* | --- |
* | "mentioned" |
*
* @param {Const_Webmentionjs_MentionedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_mentioned = /** @type {((inputs?: Const_Webmentionjs_MentionedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_MentionedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_mentioned(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_mentioned(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_mentioned(inputs)
	return __he_il2.const_webmentionjs_mentioned(inputs)
});
/**
* | output |
* | --- |
* | "RSVPed" |
*
* @param {Const_Webmentionjs_RsvpedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_rsvped = /** @type {((inputs?: Const_Webmentionjs_RsvpedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_RsvpedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_rsvped(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_rsvped(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_rsvped(inputs)
	return __he_il2.const_webmentionjs_rsvped(inputs)
});
/**
* | output |
* | --- |
* | "followed" |
*
* @param {Const_Webmentionjs_FollowedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_followed = /** @type {((inputs?: Const_Webmentionjs_FollowedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_FollowedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_followed(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_followed(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_followed(inputs)
	return __he_il2.const_webmentionjs_followed(inputs)
});
/**
* | output |
* | --- |
* | "Responses" |
*
* @param {Const_Webmentionjs_ResponsesInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_responses = /** @type {((inputs?: Const_Webmentionjs_ResponsesInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_ResponsesInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_responses(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_responses(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_responses(inputs)
	return __he_il2.const_webmentionjs_responses(inputs)
});
/**
* | output |
* | --- |
* | "mention" |
*
* @param {Const_Webmentionjs_MentionInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_mention = /** @type {((inputs?: Const_Webmentionjs_MentionInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_MentionInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_mention(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_mention(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_mention(inputs)
	return __he_il2.const_webmentionjs_mention(inputs)
});
/**
* | output |
* | --- |
* | "Reactions" |
*
* @param {Const_Webmentionjs_ReactionsInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const const_webmentionjs_reactions = /** @type {((inputs?: Const_Webmentionjs_ReactionsInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Const_Webmentionjs_ReactionsInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.const_webmentionjs_reactions(inputs)
	if (locale === "zh-CN") return __zh_cn2.const_webmentionjs_reactions(inputs)
	if (locale === "ru-RU") return __ru_ru2.const_webmentionjs_reactions(inputs)
	return __he_il2.const_webmentionjs_reactions(inputs)
});
/**
* | output |
* | --- |
* | "CC BY-SA 4.0" |
*
* @param {Copyright_Cc_By_Sa_4_0Inputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const copyright_cc_by_sa_4_0 = /** @type {((inputs?: Copyright_Cc_By_Sa_4_0Inputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Copyright_Cc_By_Sa_4_0Inputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.copyright_cc_by_sa_4_0(inputs)
	if (locale === "zh-CN") return __zh_cn2.copyright_cc_by_sa_4_0(inputs)
	if (locale === "ru-RU") return __ru_ru2.copyright_cc_by_sa_4_0(inputs)
	return __he_il2.copyright_cc_by_sa_4_0(inputs)
});
/**
* | output |
* | --- |
* | "Untagged" |
*
* @param {Tag_UntaggedInputs} inputs
* @param {{ locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }} options
* @returns {LocalizedString}
*/
export const tag_untagged = /** @type {((inputs?: Tag_UntaggedInputs, options?: { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tag_UntaggedInputs, { locale?: "en-US" | "zh-CN" | "ru-RU" | "he-IL" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en-US") return __en_us2.tag_untagged(inputs)
	if (locale === "zh-CN") return __zh_cn2.tag_untagged(inputs)
	if (locale === "ru-RU") return __ru_ru2.tag_untagged(inputs)
	return __he_il2.tag_untagged(inputs)
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