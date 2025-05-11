import { UsuarioModule } from '@api/modulo/usuario/usuario.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';
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
                    autoLoadEntities: true,
                    synchronize: false
                }
            },
            dataSourceFactory: async (options: DataSourceOptions) =>
                await new DataSource(options).initialize()
        }),
        RouterModule.register([
            { path: "usuario", module: UsuarioModule }
        ]),
        UsuarioModule,
    ]
})
export class AppModule { }
