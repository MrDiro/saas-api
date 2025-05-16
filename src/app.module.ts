import { ModAdministracionModule } from './mod_administracion/mod_administracion.module';
import { ModSistemaModule } from './mod_sistema/mod_sistema.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: "postgres",
                    host: configService.get<string>("DB_HOST"),
                    port: configService.get<number>("DB_PORT"),
                    username: configService.get<string>("DB_USERNAME"),
                    password: configService.get<string>("DB_PASSWORD"),
                    database: configService.get<string>("DB_NAME"),
                    logging: configService.get<string>("NODE_ENV") == "development",
                    synchronize: configService.get<string>("NODE_ENV") == "development",
                    autoLoadEntities: true,
                }
            },
            dataSourceFactory: async (options: DataSourceOptions) =>
                await new DataSource(options).initialize()
        }),
        ModSistemaModule,
        ModAdministracionModule
    ]
})
export class AppModule { }
