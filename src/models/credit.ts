import { Prefix } from "./prefix";
import { Scheme } from "./scheme";

export interface Credit {
    _scheme:  Scheme;
    __prefix: Prefix;
    __text:   string;
}
