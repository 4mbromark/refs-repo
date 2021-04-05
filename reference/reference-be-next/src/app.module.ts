import { CardController } from './app/refs-controller/card.controller';
import { Page, PageSchema } from './app/refs-dao/schema/page.schema';
import { Header, HeaderSchema } from './app/refs-dao/schema/header.schema';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AlixController } from './app/refs-controller/alix.controller';
import { ContextController } from './app/refs-controller/context.controller';
import { UserController } from './app/refs-controller/user.controller';
import { Alix, AlixSchema } from './app/refs-dao/schema/alix.schema';
import { UserDao } from './app/refs-dao/user.dao';
import { User, UserSchema } from './app/refs-dao/schema/user.schema';
import { AuthService } from './app/refs-service/auth.service';
import { CryptService } from './app/refs-service/crypt.service';
import { AlixService } from './app/refs-service/database-services/alix.service';
import { BoardService } from './app/refs-service/database-services/board.service';
import { PageService } from './app/refs-service/database-services/page.service';
import { UserService } from './app/refs-service/database-services/user.service';
import { AlixMasterService } from './app/refs-service/master-services/alix-master.service';
import { ContextMasterService } from './app/refs-service/master-services/context-master.service';
import { UserMasterService } from './app/refs-service/master-services/user-master.service';
import { JwtGuard } from './app/refs-utility/refs-auth/jwt-guard';
import { JwtStrategy } from './app/refs-utility/refs-auth/jwt-strategy';
import { LoggerInterceptor } from './app/refs-utility/refs-logger/logger.interceptor';
import { Board, BoardSchema } from './app/refs-dao/schema/board.schema';
import { Button, ButtonSchema } from './app/refs-dao/schema/button.schema';
import { Info, InfoSchema } from './app/refs-dao/schema/info.schema';
import { Textline, TextlineSchema } from './app/refs-dao/schema/textline.schema';
import { BoardDao } from './app/refs-dao/board.dao';
import { Card, CardSchema } from './app/refs-dao/schema/card.schema';
import { HeaderService } from './app/refs-service/database-services/header.service';
import { CardService } from './app/refs-service/database-services/card.service';
import { ButtonService } from './app/refs-service/database-services/button.service';
import { InfoService } from './app/refs-service/database-services/info.service';
import { TextlineService } from './app/refs-service/database-services/textline.service';
import { AlixDao } from './app/refs-dao/alix.dao';
import { ButtonDao } from './app/refs-dao/button.dao';
import { CardDao } from './app/refs-dao/card.dao';
import { HeaderDao } from './app/refs-dao/header.dao';
import { InfoDao } from './app/refs-dao/info.dao';
import { PageDao } from './app/refs-dao/page.dao';
import { TextlineDao } from './app/refs-dao/textline.dao';

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

    /** MONGO DB */
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useFindAndModify: false,
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      }
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Alix.name, schema: AlixSchema },

      { name: Board.name, schema: BoardSchema },
      { name: Page.name, schema: PageSchema },

      { name: Header.name, schema: HeaderSchema },
      { name: Card.name, schema: CardSchema },

      { name: Button.name, schema: ButtonSchema },
      { name: Info.name, schema: InfoSchema },

      { name: Textline.name, schema: TextlineSchema }
    ])
  ],
  controllers: [
    AlixController,
    UserController,
    ContextController,
    CardController,

    AppController
  ],
  providers: [
    /** MASTER SERVICES */
    AlixMasterService,
    UserMasterService,
    ContextMasterService,
    
    /** DATABASE SERVICES */
    AlixService,
    BoardService,
    ButtonService,
    CardService,
    HeaderService,
    InfoService,
    PageService,
    TextlineService,
    UserService,

    /** UTILS SERVICES */
    AuthService,
    CryptService,

    /** DAO */
    AlixDao,
    BoardDao,
    ButtonDao,
    CardDao,
    HeaderDao,
    InfoDao,
    PageDao,
    TextlineDao,
    UserDao,

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
