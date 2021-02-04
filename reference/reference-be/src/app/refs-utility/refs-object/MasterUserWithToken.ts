import { User } from '../refs-db/entity/reguser';
import { MasterUser } from "./MasterUser";

export class MasterUserWithToken extends MasterUser {
    token: string;
    
    constructor(
        user: User,
        tk: string
    ) {
        super(user);
        this.token = tk;
    }
}