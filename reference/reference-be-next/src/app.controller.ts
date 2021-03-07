import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import path from "path";
import { Public } from "./app/refs-utility/refs-auth/jwt-public";

@Controller('/*')
export class AppController {

    @Public()
    @Get()
    redirectToAngular(@Res() res: Response) {
        res.sendFile(path.resolve('../reference-fe/dist/reference-fe/index.html'));
    }
}