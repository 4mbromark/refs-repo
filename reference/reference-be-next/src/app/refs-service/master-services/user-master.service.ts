import { User } from './../../refs-utility/refs-db/entity/reguser';
import { CryptService } from './../crypt.service';
import { ExtraService } from './../database-services/extra.service';
import { UserService } from './../database-services/user.service';
import { AuthService } from './../auth.service';
import { Injectable } from "@nestjs/common";
import { MasterUser } from '../../refs-utility/refs-object/MasterUser';
import { MasterUserWithToken } from '../../refs-utility/refs-object/MasterUserWithToken';

@Injectable()
export class UserMasterService {

    constructor(
        private authService: AuthService,
        private cryptService: CryptService,
        private userService: UserService,
        private extraService: ExtraService
    ) {}

    public async authUser(uid: string, pwd: string): Promise<MasterUserWithToken> {
        const user = await this.userService.getUserByUser(uid);

        let masterUserWithToken = null;
        if (user) {
            const hash = await this.cryptService.check(pwd, user.password);

            if (hash) {
                masterUserWithToken = this.buildMasterUserWithToken(user);
            }
        }
        return masterUserWithToken;
    }

    /** @deprecated */
    public async authUserWithPassword(uid: string, pwd: string): Promise<MasterUserWithToken> {
        const word = this.cryptService.encrpt(pwd);
        const user = await this.userService.getUserByUserAndPassword(uid, word);

        let masterUserWithToken = null;
        if (user) {
            masterUserWithToken = this.buildMasterUserWithToken(user);
        }
        return masterUserWithToken;
    }

    public verifyUser(token: string): MasterUser {
        return this.authService.verifyToken(token);
    }

    public async getUserPropic(idUser: number): Promise<string> {
        const extra = await this.extraService.getExtraByIdUser(idUser);
        return Buffer.from(extra.propic).toString();
    } 

    private buildMasterUserWithToken(user: User): MasterUserWithToken {
        const masterUser = new MasterUser(user);
        const token = this.authService.getToken(masterUser);
        return new MasterUserWithToken(user, token);
    }
}