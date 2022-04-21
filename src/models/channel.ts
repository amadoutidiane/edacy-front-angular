import { Item } from "./item";

export interface Channel {
    title:       string;
    description: string;
    copyright:   string;
    link:        string[];
    pubDate:     string;
    language:    string;
    item:        Item[];
}