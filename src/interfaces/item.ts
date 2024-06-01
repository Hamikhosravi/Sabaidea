export interface Item {
    type:               TypeEnum;
    id:                 string;
    link_type:          Type;
    link_key:           string;
    theme:              Theme;
    output_type:        Type;
    movie_id:           string;
    uid:                string;
    movie_title:        string;
    movie_title_en:     string;
    tag_id:             string;
    serial:             Serial;
    watermark:          boolean;
    HD:                 boolean;
    watch_list_action:  WatchListAction;
    commingsoon_txt:    string;
    rel_data:           RelData;
    badge:              Badge;
    rate_enable:        boolean;
    rate_enable_by_cnt: boolean;
    descr:              string;
    cover:              null | string;
    publish_date:       Date;
    age_range:          AgeRange;
    pic:                Pic;
    rate_avrage:        string;
    avg_rate_label:     string;
    pro_year:           string;
    imdb_rate:          string;
    categories:         Category[];
    duration:           Duration;
    countries:          Country[];
    dubbed:             Dubbed;
    subtitle:           Dubbed;
    audio:              Audio;
    language_info:      LanguageInfo;
    director:           string;
    last_watch:         null;
    freemium:           boolean;
    position:           null;
    sid:                null;
    uuid:               null;
}

export enum AgeRange {
    The1518 = "15-18",
    The1899 = "18-99",
}

export interface Audio {
    languages:       string[];
    isMultiLanguage: boolean;
}

export interface Badge {
    free:           boolean;
    backstage:      boolean;
    vision:         boolean;
    hear:           boolean;
    online_release: boolean;
    exclusive:      boolean;
    commingsoon:    boolean;
    info:           any[];
}

export interface Category {
    title_en:  string;
    title:     string;
    link_type: LinkType;
    link_key:  string;
}

export enum LinkType {
    List = "list",
}

export interface Country {
    country:    string;
    country_en: string;
}

export interface Dubbed {
    enable: boolean;
    text:   Text;
}

export enum Text {
    Empty = "",
    دوبلهشده = "دوبله شده",
    زیرنویسدارد = "زیرنویس دارد",
}

export interface Duration {
    value: number;
    text:  string;
}

export interface LanguageInfo {
    flag: Flag;
    text: Text;
}

export enum Flag {
    HasSubtitle = "hasSubtitle",
    IsDubbed = "isDubbed",
}

export enum Type {
    Movie = "movie",
}

export interface Pic {
    movie_img_s: string;
    movie_img_m: string;
    movie_img_b: string;
}

export interface RelData {
    rel_type:     RelType;
    rel_id:       string;
    rel_uid:      null | string;
    rel_title:    null | string;
    rel_type_txt: RelTypeTxt;
}

export enum RelType {
    Backstage = "backstage",
    None = "none",
}

export enum RelTypeTxt {
    Empty = "",
    پشتصحنه = "پشت صحنه",
}

export interface Serial {
    enable:       boolean;
    parent_title: string;
    season_id:    number;
    serial_part:  string;
    part_text:    string;
    season_text:  string;
    last_part:    string;
}

export enum Theme {
    Thumbnail = "thumbnail",
}

export enum TypeEnum {
    Movies = "movies",
}

export enum WatchListAction {
    Watch = "watch",
}
