import { MasterUser } from './../refs-utility/refs-object/MasterUser';
import { Env } from '../refs-utility/refs-env/future-env';

var jwt = require ('jsonwebtoken');

export class AuthService {

    public static getToken(user: MasterUser): string {
        return jwt.sign(user, Env.JWT_SECRET, { expiresIn: Env.JWT_EXPIRATION });
    }

}