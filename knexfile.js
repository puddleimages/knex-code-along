// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: `127.0.0.1`,
      password: 'turtles?',
      user: 'postgres',
      port: 5432,
      database: 'pet_store'
    }//'postgres://pg_docker:docker@localhost/database.sql'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};