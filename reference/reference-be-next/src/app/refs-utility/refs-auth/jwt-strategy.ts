import { UserMasterService } from './../../refs-service/master-services/user-master.service';
import { AuthService } from './../../refs-service/auth.service';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwtStrategy') {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExipation: false,
            secretOrKey: process.env.JWT_SECRET
        });
    }

    async validate(payload: any) {
        // const user = await this.userMasterService.verifyUser(payload);
        // return user;
        return payload;
    }
}