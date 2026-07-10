import "dotenv/config";

interface Config {
    port: number; 
    nodeEnv: string;
    mongoUri: string; 
    upstash: {
        redisRestUrl: string;
        redisRestToken: string;
    }; 
}

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) { //if undefined: type narrowing
        throw new Error(`Missing required environment variable: ${name}`); 
    }
    return value; 
}

export const config: Config = {
    port: Number(process.env.PORT) || 8080, 
    nodeEnv: process.env.NODE_ENV ?? "development",
    mongoUri: requireEnv("MONGO_URI"), 
    upstash: {
        redisRestUrl: requireEnv("UPSTASH_REDIS_REST_URL"), 
        redisRestToken: requireEnv("UPSTASH_REDIS_REST_TOKEN")
    }
}