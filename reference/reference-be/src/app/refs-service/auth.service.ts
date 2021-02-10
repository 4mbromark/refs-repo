import { MasterUser } from '../refs-utility/refs-object/MasterUser';
import { Env } from '../refs-utility/refs-env/future-env';

var jwt = require('jsonwebtoken');

export class AuthService {

    public static getToken(user: MasterUser): string {
        const ult = {
            id: user.id,
            name: user.name,
            surname: user.surname,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(ult, Env.JWT_SECRET, { expiresIn: Env.JWT_EXPIRATION });
        return token;
    }

    public static verifyToken(token: string): MasterUser {
        let user = null;

        try {
            user = jwt.verify(token, Env.JWT_SECRET);
        } catch (error) { }

        return user;
    }
}