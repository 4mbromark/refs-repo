import { User } from "../refs-db/entity/reguser";
export declare class MasterUser {
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    constructor(user: User);
}
