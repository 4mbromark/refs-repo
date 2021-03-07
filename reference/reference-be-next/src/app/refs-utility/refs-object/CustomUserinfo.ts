import { Userinfo } from './../refs-db/entity/board-userinfo';
import { CustomInfo } from './CustomInfo';
import { CustomBlob } from './CustomBlob';
import { CustomTextline } from './CustomTextline';
import { CustomButton } from './CustomButton';

export class CustomUserinfo {
    id: number;
    name: string;
    sentence: CustomTextline;
    profile: CustomTextline;
    avatar: CustomBlob;
    bio: string;
    infoList: CustomInfo[];
    buttonList: CustomButton[];

    constructor(
        userinfo: Userinfo,
        s: CustomTextline,
        p: CustomTextline,
        a: CustomBlob,
        il: CustomInfo[],
        bl: CustomButton[],
    ) {
        this.id = userinfo.id;
        this.name = userinfo.name
        this.sentence = s;
        this.profile = p;
        this.avatar = a;
        this.bio = userinfo.bio;
        this.infoList = il;
        this.buttonList = bl;
    }
}