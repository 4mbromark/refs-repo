import { Textline } from './../refs-db/entity/board-textline';

export class CustomTextline {
    id: number;
    text: string;
    size: string;
    color: string;
    weight: string;

    constructor(
        textline: Textline
    ) {
        this.id = textline.id;
        this.text = textline.text;
        this.color = textline.color;
        this.weight = textline.weight;
    }
}