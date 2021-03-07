import { AuthService } from './../../refs-service/auth.service';
import { Strategy } from "passport-jwt";
import { UnauthorizedException } from '@nestjs/common';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: any): Promise<import("../refs-object/MasterUser").MasterUser | UnauthorizedException>;
}
export {};
