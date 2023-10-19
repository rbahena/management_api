import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10),
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    jwt:{
      jwt_secret: process.env.JWTSECRET,
      jwt_expiration: process.env.EXPIRATION_TIME_JWT
    },
    key_public_endpoint: process.env.KEY_PUBLIC_ENDPOINT
  };
});
