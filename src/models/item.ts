import { Content } from "./content";
import { Description } from "./description";
import { GUID } from "./guid";
import { MediaContent } from "./mediaContent";

export interface Item {
    title: string
    pubDate: string
    description: string
    guid: GUID
    link: string
    content:Content
}