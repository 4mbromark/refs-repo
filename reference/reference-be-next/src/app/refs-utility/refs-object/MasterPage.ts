import { CustomBlob } from './CustomBlob';
import { CustomButton } from './CustomButton';
import { CustomInfo } from './CustomInfo';
import { CustomTextline } from './CustomTextline';
import { Page } from '../refs-db/entity/board-page';

export class MasterPage {
    id: number;
    code: string;
    title: CustomTextline;
    subtitle: CustomTextline;
    avatar: CustomBlob;
    caption: string;
    text: string;
    image: CustomBlob;
    infoList: CustomInfo[];
    buttonList: CustomButton[];

    constructor(
        page: Page,
        t: CustomTextline,
        st: CustomTextline,
        a: CustomBlob,
        i: CustomBlob,
        il: CustomInfo[],
        bl: CustomButton[]
    ) {
        this.id = page.id;
        this.code = page.code;
        this.title = t;
        this.subtitle = st;
        this.avatar = a;
        this.caption = page.caption;
        this.text = page.text;
        this.image = i;
        this.infoList = il;
        this.buttonList = bl;
    }
}