import { User } from "../../refs-dao/schema/user.schema";
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