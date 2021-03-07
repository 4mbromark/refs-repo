import { Card } from '../refs-db/entity/board-card';
import { CustomBlob } from './CustomBlob';
import { CustomButton } from './CustomButton';
import { CustomInfo } from './CustomInfo';
import { CustomTextline } from './CustomTextline';
export declare class CustomCard {
    id: number;
    title: CustomTextline;
    subtitle: CustomTextline;
    avatar: CustomBlob;
    caption: string;
    text: string;
    image: CustomBlob;
    infoList: CustomInfo[];
    buttonList: CustomButton[];
    contextOrder: number;
    constructor(card: Card, t: CustomTextline, st: CustomTextline, a: CustomBlob, i: CustomBlob, il: CustomInfo[], bl: CustomButton[]);
}
