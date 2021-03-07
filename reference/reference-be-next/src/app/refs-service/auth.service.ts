import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MasterUser } from '../refs-utility/refs-object/MasterUser';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ) {}

    public getToken(user: MasterUser): string {
        const ult = {
            id: user.id,
            name: user.name,
            surname: user.surname,
            username: user.username,
            email: user.email
        }

        const token = this.jwtService.sign(ult, { expiresIn: process.env.JWT_EXPIRATION });
        return token;
    }

    public verifyToken(token: string): MasterUser {
        let user = null;

        try {
            user = this.jwtService.verify(token);
        } catch (error) { }

        return user;
    }
}