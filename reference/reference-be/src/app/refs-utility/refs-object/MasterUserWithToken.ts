import { User } from '../refs-db/entity/reguser';
import { MasterUser } from "./MasterUser";

export class MasterUserWithToken extends MasterUser {
    token: string;
    
    constructor(
        protected user: User,
        private tk: string
    ) {
        super(user);
        this.token = tk;
    }
}