import { NestMiddleware } from "@nestjs/common";
import { Request } from "express";
export declare class AngularMiddleware implements NestMiddleware {
    use(req: Request, res: any, next: () => void): void;
}
