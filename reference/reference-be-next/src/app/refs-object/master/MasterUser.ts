import { User } from "../../refs-dao/schema/user.schema";
import { Master } from "./Master";

export class MasterUser extends Master {
    name: string;
    surname: string;
    username: string;
    email: string; 

    constructor(
        user: User,
    ) {
        super(user);
        this.name = user.name;
        this.surname = user.surname;
        this.username = user.username;
        this.email = user.email;
    }
}