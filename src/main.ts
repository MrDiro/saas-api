import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '@api/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const logger = new Logger();
    const port = process.env.NODE_PORT!;
    const host = process.env.NODE_HOST!;

    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        abortOnError: false,
        autoFlushLogs: true,
        bufferLogs: true,
        bodyParser: true,
        rawBody: true,
        cors: {
            origin: [
                "localhost"
            ],
            methods: [
                "GET", "POST", "PATCH", "DELETE", "HEAD", "OPTIONS"
            ],
            allowedHeaders: [
                "Content-Type", "Authorization", "X-Requested-With"
            ],
            credentials: true
        }
    });

    app.useBodyParser("urlencoded", { limit: "50mb", extends: true });
    app.useBodyParser("json", { limit: "100mb" });
    app.useBodyParser("text", { limit: "10mb" });
    app.enableCors();

    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true
    }));

    app.enableVersioning({
        type: VersioningType.URI
    });

    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle("API")
        .setDescription("API REST")
        .setVersion("1.0")
        .build();

    SwaggerModule.setup("document", app, SwaggerModule.createDocument(app, config), {
        customSiteTitle: "document",
        customfavIcon: "/favicon.png",
        customCss: '.swagger-ui .topbar { display: none }',
        swaggerOptions: {
            persistAuthorization: true,
            docExpansion: 'none',
            defaultModelsExpandDepth: -1,
            filter: true,
            showExtensions: true,
            showCommonExtensions: true,
        },
        explorer: true,
    });

    await app.listen(port, host, () => {
        logger.log(`Running on port ${port} 🚀`, "Api");
    });
}

bootstrap();