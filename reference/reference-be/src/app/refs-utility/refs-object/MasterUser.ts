import { User } from "../refs-db/entity/reguser";

export class MasterUser {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string; 

    constructor(
        protected user: User,
    ) {
        this.id = user.id;
        this.name = user.name;
        this.surname = user.surname;
        this.username = user.username;
        this.email = user.email;
    }
}