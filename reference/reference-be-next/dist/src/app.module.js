"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const app_controller_1 = require("./app.controller");
const jwt_strategy_1 = require("./app/refs-utility/refs-auth/jwt-strategy");
const jwt_guard_1 = require("./app/refs-utility/refs-auth/jwt-guard");
const info_dao_1 = require("./app/refs-dao/info.dao");
const extra_dao_1 = require("./app/refs-dao/extra.dao");
const page_dao_1 = require("./app/refs-dao/page.dao");
const textline_dao_1 = require("./app/refs-dao/textline.dao");
const user_dao_1 = require("./app/refs-dao/user.dao");
const card_dao_1 = require("./app/refs-dao/card.dao");
const button_dao_1 = require("./app/refs-dao/button.dao");
const board_dao_1 = require("./app/refs-dao/board.dao");
const crypt_service_1 = require("./app/refs-service/crypt.service");
const auth_service_1 = require("./app/refs-service/auth.service");
const userinfo_service_1 = require("./app/refs-service/database-services/userinfo.service");
const user_service_1 = require("./app/refs-service/database-services/user.service");
const textline_service_1 = require("./app/refs-service/database-services/textline.service");
const page_service_1 = require("./app/refs-service/database-services/page.service");
const info_service_1 = require("./app/refs-service/database-services/info.service");
const extra_service_1 = require("./app/refs-service/database-services/extra.service");
const card_service_1 = require("./app/refs-service/database-services/card.service");
const button_service_1 = require("./app/refs-service/database-services/button.service");
const board_service_1 = require("./app/refs-service/database-services/board.service");
const blob_service_1 = require("./app/refs-service/database-services/blob.service");
const general_builder_service_1 = require("./app/refs-service/general-builder.service");
const page_master_service_1 = require("./app/refs-service/master-services/page-master.service");
const board_master_service_1 = require("./app/refs-service/master-services/board-master.service");
const aka_dao_1 = require("./app/refs-dao/aka.dao");
const alix_dao_1 = require("./app/refs-dao/alix.dao");
const aka_service_1 = require("./app/refs-service/database-services/aka.service");
const alix_service_1 = require("./app/refs-service/database-services/alix.service");
const page_controller_1 = require("./app/refs-controller/page.controller");
const board_controller_1 = require("./app/refs-controller/board.controller");
const user_controller_1 = require("./app/refs-controller/user.controller");
const alix_controller_1 = require("./app/refs-controller/alix.controller");
const common_1 = require("@nestjs/common");
const alix_master_service_1 = require("./app/refs-service/master-services/alix-master.service");
const config_1 = require("@nestjs/config");
const user_master_service_1 = require("./app/refs-service/master-services/user-master.service");
const userinfo_dao_1 = require("./app/refs-dao/userinfo.dao");
const blob_dao_1 = require("./app/refs-dao/blob.dao");
const jwt_1 = require("@nestjs/jwt");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRATION },
            }),
        ],
        controllers: [
            alix_controller_1.AlixController,
            user_controller_1.UserController,
            board_controller_1.BoardController,
            page_controller_1.PageController,
            app_controller_1.AppController
        ],
        providers: [
            /** MASTER SERVICES */
            alix_master_service_1.AlixMasterService,
            user_master_service_1.UserMasterService,
            board_master_service_1.BoardMasterService,
            page_master_service_1.PageMasterService,
            /** BUILDER SERVICES */
            general_builder_service_1.GeneralBuilderService,
            /** DATABASE SERVICES */
            aka_service_1.AkaService,
            alix_service_1.AlixService,
            blob_service_1.BlobService,
            board_service_1.BoardService,
            button_service_1.ButtonService,
            card_service_1.CardService,
            extra_service_1.ExtraService,
            info_service_1.InfoService,
            page_service_1.PageService,
            textline_service_1.TextlineService,
            user_service_1.UserService,
            userinfo_service_1.UserinfoService,
            /** UTILS SERVICES */
            auth_service_1.AuthService,
            crypt_service_1.CryptService,
            /** DAO */
            aka_dao_1.AkaDao,
            alix_dao_1.AlixDao,
            blob_dao_1.BlobDao,
            board_dao_1.BoardDao,
            button_dao_1.ButtonDao,
            card_dao_1.CardDao,
            extra_dao_1.ExtraDao,
            info_dao_1.InfoDao,
            page_dao_1.PageDao,
            textline_dao_1.TextlineDao,
            user_dao_1.UserDao,
            userinfo_dao_1.UserinfoDao,
            /** JWT AUTH */
            jwt_strategy_1.JwtStrategy,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_guard_1.JwtGuard
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map