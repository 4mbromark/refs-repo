import { Button } from './../refs-db/entity/board-button';
import { CustomTextline } from './CustomTextline';
export declare class CustomButton {
    id: number;
    title: CustomTextline;
    subtitle: CustomTextline;
    type: 'LINK' | 'PAGE' | string;
    action: string;
    border: string;
    radius: string;
    background: string;
    contextOrder: number;
    constructor(button: Button, t: CustomTextline, st: CustomTextline);
}
