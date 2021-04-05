import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MasterUser } from '../refs-object/master/MasterUser';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService
    ) {}

    public async getToken(user: MasterUser): Promise<string> {
        const ult = {
            _id: user._id,
            email: user.email
        }

        return new Promise(async (resolve, rejects) => {
            const token = await this.jwtService.sign(ult, { expiresIn: process.env.JWT_EXPIRATION });
            resolve(token);
        });
    }

    public async verifyToken(token: string): Promise<MasterUser> {
        let user = null;

        return new Promise(async (resolve, rejects) => {
            try {
                user = await this.jwtService.verify(token);
            } catch (error) {
                // TODO
            }
            resolve(user);
        });
    }
}