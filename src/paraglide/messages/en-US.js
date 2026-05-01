/* eslint-disable */
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


export const lang_en_us = /** @type {(inputs: Lang_En_UsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eng`)
};

export const lang_zh_cn = /** @type {(inputs: Lang_Zh_CnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简中`)
};

export const lang_ru_ru = /** @type {(inputs: Lang_Ru_RuInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рус.`)
};

export const lang_he_il = /** @type {(inputs: Lang_He_IlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`עברית`)
};

export const site_title = /** @type {(inputs: Site_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`My Blog`)
};

export const site_description = /** @type {(inputs: Site_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A minimal blog theme for Astro`)
};

export const site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/32`)
};

export const site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/400x300`)
};

export const label_latest_posts = /** @type {(inputs: Label_Latest_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest posts`)
};

export const label_all_posts = /** @type {(inputs: Label_All_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All posts`)
};

export const label_all_posts_pagenum = /** @type {(inputs: Label_All_Posts_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All posts - page ${i?.pageNum}`)
};

export const label_all_tags = /** @type {(inputs: Label_All_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All tags`)
};

export const label_all_tags_pagenum = /** @type {(inputs: Label_All_Tags_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All tags - page ${i?.pageNum}`)
};

export const label_tags = /** @type {(inputs: Label_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

export const label_tags_tagname_count = /** @type {(inputs: Label_Tags_Tagname_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tagName} (${i?.count})`)
};

export const label_tag_tagname = /** @type {(inputs: Label_Tag_TagnameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag: ${i?.tagName}`)
};

export const label_tag_tagname_pagenum = /** @type {(inputs: Label_Tag_Tagname_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag: ${i?.tagName} - page ${i?.pageNum}`)
};

export const label_authors = /** @type {(inputs: Label_AuthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Authors`)
};

export const label_skip_to_content = /** @type {(inputs: Label_Skip_To_ContentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skip to content`)
};

export const label_rss_feed = /** @type {(inputs: Label_Rss_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RSS feed`)
};

export const label_keep_reading = /** @type {(inputs: Label_Keep_ReadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep reading`)
};

export const label_back_to_home = /** @type {(inputs: Label_Back_To_HomeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteTitle} - Back to home`)
};

export const label_primary_navigation = /** @type {(inputs: Label_Primary_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primary navigation`)
};

export const label_posts_pagination = /** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posts pagination`)
};

export const label_previous_page = /** @type {(inputs: Label_Previous_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Previous`)
};

export const label_next_page = /** @type {(inputs: Label_Next_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Next`)
};

export const label_select_theme = /** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select theme`)
};

export const label_select_language = /** @type {(inputs: Label_Select_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select language`)
};

export const label_light = /** @type {(inputs: Label_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Light`)
};

export const label_dark = /** @type {(inputs: Label_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dark`)
};

export const label_auto = /** @type {(inputs: Label_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto`)
};

export const label_note = /** @type {(inputs: Label_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

export const label_tip = /** @type {(inputs: Label_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tip`)
};

export const label_caution = /** @type {(inputs: Label_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caution`)
};

export const label_danger = /** @type {(inputs: Label_DangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danger`)
};

export const tag_general = /** @type {(inputs: Tag_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General`)
};

export const tag_coding = /** @type {(inputs: Tag_CodingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coding`)
};

export const tag_mdx = /** @type {(inputs: Tag_MdxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MDX`)
};

export const tag_open_source = /** @type {(inputs: Tag_Open_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open source`)
};

export const tag_seoul = /** @type {(inputs: Tag_SeoulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seoul`)
};

export const tag_english = /** @type {(inputs: Tag_EnglishInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`English`)
};

export const tag_chinese = /** @type {(inputs: Tag_ChineseInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`中文`)
};

export const tag_russian = /** @type {(inputs: Tag_RussianInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Русский`)
};

export const tag_hebrew = /** @type {(inputs: Tag_HebrewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`עברית`)
};