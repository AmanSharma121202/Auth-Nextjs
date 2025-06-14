declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    MAILTRAP_HOST: string;
    MAILTRAP_PORT: string;
    MAILTRAP_USER: string;
    MAILTRAP_PASS: string;
    DOMAIN: string;
    JWT_SECRET: string;
    MONGODB_URI: string;
  }
}
