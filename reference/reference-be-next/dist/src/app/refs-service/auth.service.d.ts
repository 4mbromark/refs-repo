import { JwtService } from '@nestjs/jwt';
import { MasterUser } from '../refs-utility/refs-object/MasterUser';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    getToken(user: MasterUser): string;
    verifyToken(token: string): MasterUser;
}
