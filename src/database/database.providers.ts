import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'admin',
                database: 'appFridas',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: false,
                migrationsRun: true,
            });

            return dataSource.initialize();
        },
    },
];