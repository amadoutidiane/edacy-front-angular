import { Attributes5 } from "./Attributes5"
import { MediaCredit } from "./mediaCredit"
import { MediaDescription } from "./mediaDescription"

export interface MediaContent {
    "media:description"?: MediaDescription
    "media:credit"?: MediaCredit
    "@attributes": Attributes5
  }