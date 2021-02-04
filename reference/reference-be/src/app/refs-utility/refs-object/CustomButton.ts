import { Button } from './../refs-db/entity/board-button';
import { CustomTextline } from './CustomTextline';

export class CustomButton {
    id: number;
    title: CustomTextline;
    subtitle: CustomTextline;
    type: 'LINK' | 'PAGE' | string;
    action: string;
    border: string;
    radius: string;
    background: string;
    contextOrder: number;

    constructor(
        button: Button,
        t: CustomTextline,
        st: CustomTextline
    ) {
        this.id = button.id;
        this.title = t;
        this.subtitle = st;
        this.type = button.type;
        this.action = button.action;
        this.border = button.border;
        this.radius = button.radius;
        this.background = button.background;
        this.contextOrder = button.contextOrder;
    }
}