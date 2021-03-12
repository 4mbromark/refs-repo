import { User } from './../../refs-utility/refs-db/entity/reguser';
import { CryptService } from './../crypt.service';
import { ExtraService } from './../database-services/extra.service';
import { UserService } from './../database-services/user.service';
import { AuthService } from './../auth.service';
import { ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { MasterUser } from '../../refs-utility/refs-object/MasterUser';
import { MasterUserWithToken } from '../../refs-utility/refs-object/MasterUserWithToken';

@Injectable()
export class UserMasterService {
    private readonly logger = new Logger(UserMasterService.name);

    constructor(
        private authService: AuthService,
        private cryptService: CryptService,
        private userService: UserService,
        private extraService: ExtraService
    ) {}

    public async authUser(uid: string, pwd: string): Promise<MasterUserWithToken> {
        const user = await this.userService.getUserByUser(uid);

        if (user) {
            const hash = await this.cryptService.check(pwd, user.password);

            if (hash) {
                this.logger.log('Authentication success for: ' + uid);
                return this.buildMasterUserWithToken(user);
            }

            this.logger.log('Authentication failed for: ' + uid);
            throw new UnauthorizedException();
        }

        this.logger.log('Authentication failed, user not found: ' + uid);
        throw new NotFoundException();
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

    public async verifyUser(token: string): Promise<MasterUser> {
        const masterUser = await this.authService.verifyToken(token);
        if (masterUser) {
            const user = await this.userService.getUserById(masterUser.id);
            return new MasterUser(user);
        }
        throw new UnauthorizedException();
    }

    public async getUserPropic(idUser: number): Promise<string> {
        const extra = await this.extraService.getExtraByIdUser(idUser);
        if (extra) {
            return Buffer.from(extra.propic).toString();
        }
        throw new NotFoundException();        
    } 

    public async saveUser(user: User): Promise<MasterUser> {
        const newUser = await this.userService.saveUser(user);
        if (newUser) {
            return new MasterUser(newUser);
        }
        throw new InternalServerErrorException();       
    }

    private async buildMasterUserWithToken(user: User): Promise<MasterUserWithToken> {
        const masterUser = new MasterUser(user);
        const token = await this.authService.getToken(masterUser);
        return new MasterUserWithToken(user, token);
    }
}