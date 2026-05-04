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
/** @typedef {{}} Btn_Skip_To_Content_TitleInputs */
/** @typedef {{}} Btn_Rss_Feed_TitleInputs */
/** @typedef {{}} Btn_Keep_Reading_TitleInputs */
/** @typedef {{ siteTitle: NonNullable<unknown> }} Btn_Back_To_Home_TitleInputs */
/** @typedef {{}} Label_Primary_NavigationInputs */
/** @typedef {{}} Label_Posts_PaginationInputs */
/** @typedef {{}} Btn_Previous_Page_TitleInputs */
/** @typedef {{}} Btn_Next_Page_TitleInputs */
/** @typedef {{}} Label_Select_ThemeInputs */
/** @typedef {{}} Label_Select_LanguageInputs */
/** @typedef {{}} Btn_Expand_Toc_TitleInputs */
/** @typedef {{}} Label_LightInputs */
/** @typedef {{}} Label_DarkInputs */
/** @typedef {{}} Label_AutoInputs */
/** @typedef {{}} Label_NoteInputs */
/** @typedef {{}} Label_TipInputs */
/** @typedef {{}} Label_CautionInputs */
/** @typedef {{}} Label_DangerInputs */
/** @typedef {{}} Label_Tide_Picture_Default_MaskInputs */
/** @typedef {{}} Btn_Tide_Picture_Reveal_TitleInputs */
/** @typedef {{}} Btn_Pswp_Close_TitleInputs */
/** @typedef {{}} Btn_Pswp_Zoom_TitleInputs */
/** @typedef {{}} Btn_Pswp_Arrow_Prev_TitleInputs */
/** @typedef {{}} Btn_Pswp_Arrow_Next_TitleInputs */
/** @typedef {{}} Label_Pswp_Error_MsgInputs */
/** @typedef {{}} Label_Pswp_Index_Indicator_SepInputs */
/** @typedef {{}} Btn_Pswp_Caption_TitleInputs */
/** @typedef {{}} Btn_Pswp_Reveal_TitleInputs */
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
	return /** @type {LocalizedString} */ (`Мой блог`)
};

export const site_description = /** @type {(inputs: Site_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Минималистичная тема блога для Astro`)
};

export const site_favicon = /** @type {(inputs: Site_FaviconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/32`)
};

export const site_default_og_image = /** @type {(inputs: Site_Default_Og_ImageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://placehold.co/400x300`)
};

export const label_latest_posts = /** @type {(inputs: Label_Latest_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последние публикации`)
};

export const label_all_posts = /** @type {(inputs: Label_All_PostsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все публикации`)
};

export const label_all_posts_pagenum = /** @type {(inputs: Label_All_Posts_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Все публикации - страница ${i?.pageNum}`)
};

export const label_all_tags = /** @type {(inputs: Label_All_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все теги`)
};

export const label_all_tags_pagenum = /** @type {(inputs: Label_All_Tags_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Все теги - страница ${i?.pageNum}`)
};

export const label_tags = /** @type {(inputs: Label_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги`)
};

export const label_tags_tagname_count = /** @type {(inputs: Label_Tags_Tagname_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.tagName} (${i?.count})`)
};

export const label_tag_tagname = /** @type {(inputs: Label_Tag_TagnameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Тег: ${i?.tagName}`)
};

export const label_tag_tagname_pagenum = /** @type {(inputs: Label_Tag_Tagname_PagenumInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Тег: ${i?.tagName} - страница ${i?.pageNum}`)
};

export const label_authors = /** @type {(inputs: Label_AuthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы`)
};

export const btn_skip_to_content_title = /** @type {(inputs: Btn_Skip_To_Content_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перейти к содержимому`)
};

export const btn_rss_feed_title = /** @type {(inputs: Btn_Rss_Feed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RSS-лента`)
};

export const btn_keep_reading_title = /** @type {(inputs: Btn_Keep_Reading_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Читать далее`)
};

export const btn_back_to_home_title = /** @type {(inputs: Btn_Back_To_Home_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.siteTitle} - Назад на главную`)
};

export const label_primary_navigation = /** @type {(inputs: Label_Primary_NavigationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Основная навигация`)
};

export const label_posts_pagination = /** @type {(inputs: Label_Posts_PaginationInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пагинация публикаций`)
};

export const btn_previous_page_title = /** @type {(inputs: Btn_Previous_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предыдущая`)
};

export const btn_next_page_title = /** @type {(inputs: Btn_Next_Page_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующая`)
};

export const label_select_theme = /** @type {(inputs: Label_Select_ThemeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать тему`)
};

export const label_select_language = /** @type {(inputs: Label_Select_LanguageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выбрать язык`)
};

export const btn_expand_toc_title = /** @type {(inputs: Btn_Expand_Toc_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Развернуть оглавление`)
};

export const label_light = /** @type {(inputs: Label_LightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Светлая`)
};

export const label_dark = /** @type {(inputs: Label_DarkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тёмная`)
};

export const label_auto = /** @type {(inputs: Label_AutoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авто`)
};

export const label_note = /** @type {(inputs: Label_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Примечание`)
};

export const label_tip = /** @type {(inputs: Label_TipInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совет`)
};

export const label_caution = /** @type {(inputs: Label_CautionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предупреждение`)
};

export const label_danger = /** @type {(inputs: Label_DangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опасно`)
};

export const label_tide_picture_default_mask = /** @type {(inputs: Label_Tide_Picture_Default_MaskInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыто`)
};

export const btn_tide_picture_reveal_title = /** @type {(inputs: Btn_Tide_Picture_Reveal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите, чтобы раскрыть`)
};

export const btn_pswp_close_title = /** @type {(inputs: Btn_Pswp_Close_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрыть`)
};

export const btn_pswp_zoom_title = /** @type {(inputs: Btn_Pswp_Zoom_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Увеличить`)
};

export const btn_pswp_arrow_prev_title = /** @type {(inputs: Btn_Pswp_Arrow_Prev_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предыдущая`)
};

export const btn_pswp_arrow_next_title = /** @type {(inputs: Btn_Pswp_Arrow_Next_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Следующая`)
};

export const label_pswp_error_msg = /** @type {(inputs: Label_Pswp_Error_MsgInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изображение не может быть загружено`)
};

export const label_pswp_index_indicator_sep = /** @type {(inputs: Label_Pswp_Index_Indicator_SepInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (` / `)
};

export const btn_pswp_caption_title = /** @type {(inputs: Btn_Pswp_Caption_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подпись`)
};

export const btn_pswp_reveal_title = /** @type {(inputs: Btn_Pswp_Reveal_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Раскрыть`)
};

export const tag_general = /** @type {(inputs: Tag_GeneralInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общее`)
};

export const tag_coding = /** @type {(inputs: Tag_CodingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Программирование`)
};

export const tag_mdx = /** @type {(inputs: Tag_MdxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MDX`)
};

export const tag_open_source = /** @type {(inputs: Tag_Open_SourceInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открытый исходный код`)
};

export const tag_seoul = /** @type {(inputs: Tag_SeoulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сеул`)
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