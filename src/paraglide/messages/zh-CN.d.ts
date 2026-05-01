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
export const lang_en_us: (inputs: Lang_En_UsInputs) => LocalizedString;
export const lang_zh_cn: (inputs: Lang_Zh_CnInputs) => LocalizedString;
export const lang_ru_ru: (inputs: Lang_Ru_RuInputs) => LocalizedString;
export const lang_he_il: (inputs: Lang_He_IlInputs) => LocalizedString;
export const site_title: (inputs: Site_TitleInputs) => LocalizedString;
export const site_description: (inputs: Site_DescriptionInputs) => LocalizedString;
export const site_favicon: (inputs: Site_FaviconInputs) => LocalizedString;
export const site_default_og_image: (inputs: Site_Default_Og_ImageInputs) => LocalizedString;
export const label_latest_posts: (inputs: Label_Latest_PostsInputs) => LocalizedString;
export const label_all_posts: (inputs: Label_All_PostsInputs) => LocalizedString;
export const label_all_posts_pagenum: (inputs: Label_All_Posts_PagenumInputs) => LocalizedString;
export const label_all_tags: (inputs: Label_All_TagsInputs) => LocalizedString;
export const label_all_tags_pagenum: (inputs: Label_All_Tags_PagenumInputs) => LocalizedString;
export const label_tags: (inputs: Label_TagsInputs) => LocalizedString;
export const label_tags_tagname_count: (inputs: Label_Tags_Tagname_CountInputs) => LocalizedString;
export const label_tag_tagname: (inputs: Label_Tag_TagnameInputs) => LocalizedString;
export const label_tag_tagname_pagenum: (inputs: Label_Tag_Tagname_PagenumInputs) => LocalizedString;
export const label_authors: (inputs: Label_AuthorsInputs) => LocalizedString;
export const label_skip_to_content: (inputs: Label_Skip_To_ContentInputs) => LocalizedString;
export const label_rss_feed: (inputs: Label_Rss_FeedInputs) => LocalizedString;
export const label_keep_reading: (inputs: Label_Keep_ReadingInputs) => LocalizedString;
export const label_back_to_home: (inputs: Label_Back_To_HomeInputs) => LocalizedString;
export const label_primary_navigation: (inputs: Label_Primary_NavigationInputs) => LocalizedString;
export const label_posts_pagination: (inputs: Label_Posts_PaginationInputs) => LocalizedString;
export const label_previous_page: (inputs: Label_Previous_PageInputs) => LocalizedString;
export const label_next_page: (inputs: Label_Next_PageInputs) => LocalizedString;
export const label_select_theme: (inputs: Label_Select_ThemeInputs) => LocalizedString;
export const label_select_language: (inputs: Label_Select_LanguageInputs) => LocalizedString;
export const label_light: (inputs: Label_LightInputs) => LocalizedString;
export const label_dark: (inputs: Label_DarkInputs) => LocalizedString;
export const label_auto: (inputs: Label_AutoInputs) => LocalizedString;
export const label_note: (inputs: Label_NoteInputs) => LocalizedString;
export const label_tip: (inputs: Label_TipInputs) => LocalizedString;
export const label_caution: (inputs: Label_CautionInputs) => LocalizedString;
export const label_danger: (inputs: Label_DangerInputs) => LocalizedString;
export const tag_general: (inputs: Tag_GeneralInputs) => LocalizedString;
export const tag_coding: (inputs: Tag_CodingInputs) => LocalizedString;
export const tag_mdx: (inputs: Tag_MdxInputs) => LocalizedString;
export const tag_open_source: (inputs: Tag_Open_SourceInputs) => LocalizedString;
export const tag_seoul: (inputs: Tag_SeoulInputs) => LocalizedString;
export const tag_english: (inputs: Tag_EnglishInputs) => LocalizedString;
export const tag_chinese: (inputs: Tag_ChineseInputs) => LocalizedString;
export const tag_russian: (inputs: Tag_RussianInputs) => LocalizedString;
export const tag_hebrew: (inputs: Tag_HebrewInputs) => LocalizedString;
export type LocalizedString = import("../runtime.js").LocalizedString;
export type Lang_En_UsInputs = {};
export type Lang_Zh_CnInputs = {};
export type Lang_Ru_RuInputs = {};
export type Lang_He_IlInputs = {};
export type Site_TitleInputs = {};
export type Site_DescriptionInputs = {};
export type Site_FaviconInputs = {};
export type Site_Default_Og_ImageInputs = {};
export type Label_Latest_PostsInputs = {};
export type Label_All_PostsInputs = {};
export type Label_All_Posts_PagenumInputs = {
    pageNum: NonNullable<unknown>;
};
export type Label_All_TagsInputs = {};
export type Label_All_Tags_PagenumInputs = {
    pageNum: NonNullable<unknown>;
};
export type Label_TagsInputs = {};
export type Label_Tags_Tagname_CountInputs = {
    tagName: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
export type Label_Tag_TagnameInputs = {
    tagName: NonNullable<unknown>;
};
export type Label_Tag_Tagname_PagenumInputs = {
    tagName: NonNullable<unknown>;
    pageNum: NonNullable<unknown>;
};
export type Label_AuthorsInputs = {};
export type Label_Skip_To_ContentInputs = {};
export type Label_Rss_FeedInputs = {};
export type Label_Keep_ReadingInputs = {};
export type Label_Back_To_HomeInputs = {
    siteTitle: NonNullable<unknown>;
};
export type Label_Primary_NavigationInputs = {};
export type Label_Posts_PaginationInputs = {};
export type Label_Previous_PageInputs = {};
export type Label_Next_PageInputs = {};
export type Label_Select_ThemeInputs = {};
export type Label_Select_LanguageInputs = {};
export type Label_LightInputs = {};
export type Label_DarkInputs = {};
export type Label_AutoInputs = {};
export type Label_NoteInputs = {};
export type Label_TipInputs = {};
export type Label_CautionInputs = {};
export type Label_DangerInputs = {};
export type Tag_GeneralInputs = {};
export type Tag_CodingInputs = {};
export type Tag_MdxInputs = {};
export type Tag_Open_SourceInputs = {};
export type Tag_SeoulInputs = {};
export type Tag_EnglishInputs = {};
export type Tag_ChineseInputs = {};
export type Tag_RussianInputs = {};
export type Tag_HebrewInputs = {};
