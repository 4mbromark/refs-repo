import { LanguageTag } from './../refs-language/language-tag';
import { Tag } from './../refs-enum/word/tag';
import { LanguageLabel } from './../refs-language/language-label';

export class AdminButton {
  icon?: string;
  title: LanguageLabel;
  tag?: Tag;
}
