module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-85-113-73.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd6hcvaf9lg4re8'),
      user: env('DATABASE_USERNAME', 'ssqcdmglhqnewe'),
      password: env('DATABASE_PASSWORD', 'f03ce2a5bf8a8e61cf1a3f43117a163060f852a482e5cf94d40d1f8632ea3108'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
