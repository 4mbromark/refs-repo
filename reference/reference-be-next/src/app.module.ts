import { AppController } from './app.controller';
import { JwtStrategy } from './app/refs-utility/refs-auth/jwt-strategy';
import { JwtGuard } from './app/refs-utility/refs-auth/jwt-guard';
import { InfoDao } from './app/refs-dao/info.dao';
import { ExtraDao } from './app/refs-dao/extra.dao';
import { PageDao } from './app/refs-dao/page.dao';
import { TextlineDao } from './app/refs-dao/textline.dao';
import { UserDao } from './app/refs-dao/user.dao';
import { CardDao } from './app/refs-dao/card.dao';
import { ButtonDao } from './app/refs-dao/button.dao';
import { BoardDao } from './app/refs-dao/board.dao';
import { CryptService } from './app/refs-service/crypt.service';
import { AuthService } from './app/refs-service/auth.service';
import { UserinfoService } from './app/refs-service/database-services/userinfo.service';
import { UserService } from './app/refs-service/database-services/user.service';
import { TextlineService } from './app/refs-service/database-services/textline.service';
import { PageService } from './app/refs-service/database-services/page.service';
import { InfoService } from './app/refs-service/database-services/info.service';
import { ExtraService } from './app/refs-service/database-services/extra.service';
import { CardService } from './app/refs-service/database-services/card.service';
import { ButtonService } from './app/refs-service/database-services/button.service';
import { BoardService } from './app/refs-service/database-services/board.service';
import { BlobService } from './app/refs-service/database-services/blob.service';
import { GeneralBuilderService } from './app/refs-service/general-builder.service';
import { PageMasterService } from './app/refs-service/master-services/page-master.service';
import { BoardMasterService } from './app/refs-service/master-services/board-master.service';
import { AkaDao } from './app/refs-dao/aka.dao';
import { AlixDao } from './app/refs-dao/alix.dao';
import { AkaService } from './app/refs-service/database-services/aka.service';
import { AlixService } from './app/refs-service/database-services/alix.service';
import { PageController } from './app/refs-controller/page.controller';
import { BoardController } from './app/refs-controller/board.controller';
import { UserController } from './app/refs-controller/user.controller';
import { AlixController } from './app/refs-controller/alix.controller';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AlixMasterService } from './app/refs-service/master-services/alix-master.service';
import { ConfigModule } from '@nestjs/config';
import { UserMasterService } from './app/refs-service/master-services/user-master.service';
import { UserinfoDao } from './app/refs-dao/userinfo.dao';
import { BlobDao } from './app/refs-dao/blob.dao';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { LoggerInterceptor } from './app/refs-utility/refs-logger/logger.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),
  ],
  controllers: [
    AlixController,
    UserController,
    BoardController,
    PageController,

    AppController
  ],
  providers: [
    /** MASTER SERVICES */
    AlixMasterService,
    UserMasterService,
    BoardMasterService,
    PageMasterService,

    /** BUILDER SERVICES */
    GeneralBuilderService,
    
    /** DATABASE SERVICES */
    AkaService,
    AlixService,
    BlobService,
    BoardService,
    ButtonService,
    CardService,
    ExtraService,
    InfoService,
    PageService,
    TextlineService,
    UserService,
    UserinfoService,

    /** UTILS SERVICES */
    AuthService,
    CryptService,

    /** DAO */
    AkaDao,
    AlixDao,
    BlobDao,
    BoardDao,
    ButtonDao,
    CardDao,
    ExtraDao,
    InfoDao,
    PageDao,
    TextlineDao,
    UserDao,
    UserinfoDao,

    /** JWT AUTH */
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtGuard
    },

    /** INTERCEPTORS */
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor
    },
  ],
})
export class AppModule {}
