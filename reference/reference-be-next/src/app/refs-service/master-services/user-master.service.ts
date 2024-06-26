import { UserMasterInterface } from './user-master.interface';
import { CryptService } from './../crypt.service';
import { UserService } from './../database-services/user.service';
import { AuthService } from './../auth.service';
import { Injectable, InternalServerErrorException, Logger, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { MasterUser } from '../../refs-object/master/MasterUser';
import { MasterUserWithToken } from '../../refs-object/master/MasterUserWithToken';
import { User } from '../../refs-dao/schema/user.schema';
import { ObjectId } from 'mongoose';

@Injectable()
export class UserMasterService implements UserMasterInterface {
    private readonly logger = new Logger(UserMasterService.name);

    constructor(
        private authService: AuthService,
        private cryptService: CryptService,
        private userService: UserService
    ) {}

    public async authUser(uid: string, pwd: string): Promise<MasterUserWithToken> {
        const user = await this.userService.getUserByUid(uid);

        if (user) {
            const hash = await this.cryptService.check(pwd, user.pwd);

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

    public async verifyUser(token: string): Promise<MasterUser> {
        const masterUser = await this.authService.verifyToken(token);
        if (masterUser) {
            const user = await this.userService.getUserById(masterUser._id);
            return new MasterUser(user);
        }
        throw new UnauthorizedException();
    }

    public async getUserPropic(idUser: ObjectId): Promise<string> {
        const extra = '';
        if (extra) {
            return Buffer.from(extra).toString();
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