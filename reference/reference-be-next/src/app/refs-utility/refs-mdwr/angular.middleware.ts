import { Injectable, NestMiddleware, Next, Req, Res } from "@nestjs/common";
import { Request, Response } from "express"
import path from 'path';
import { Url } from "../refs-url/url";

@Injectable()
export class AngularMiddleware implements NestMiddleware {

    use(@Req() req: Request, res: any, next: () => void) {
        const { url } = req;
        if (!(url.indexOf(Url.BASE_REST) === 1)) {
            res.sendFile(path.resolve('../reference-fe/dist/reference-fe/index.html'));
        }
        next();
    }
}

