// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// import Dotenv from "dotenv"
// Dotenv.config({path: 'env/dev.env'})
require('dotenv').config();
console.log('xD')

export const development = {
    client: 'mysql2',
    connection: {
        user: process.env.MYSQL_USER ?? '',
        password: process.env.MYSQL_PASSWORD ?? '',
        host: process.env.MYSQL_HOST ?? '',
        port: process.env.MYSQL_PORT ?? '',
        database: process.env.MYSQL_DATABASE ?? ''
    }
};
export const staging = {
    client: 'postgresql',
    connection: {
        database: 'my_db',
        user: 'username',
        password: 'password'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
export const production = {
    client: 'postgresql',
    connection: {
        database: 'my_db',
        user: 'username',
        password: 'password'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};