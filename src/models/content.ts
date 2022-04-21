import { Credit } from "./credit";
import { Description } from "./description";
import { Prefix } from "./prefix";

export interface Content {
    description?: Description;
    credit?:      Credit;
    _url:         string;
    _width:       string;
    _height:      string;
    __prefix:     Prefix;
}
