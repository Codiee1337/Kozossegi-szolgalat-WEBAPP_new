import { RedisOptions } from 'ioredis'
import { hostname } from 'os'

const {
REDIS_PORT = 6379,
REDIS_HOST = '192.168.0.2',
REDIS_PASSWORD = 'secret'

} = process.env

export const REDIS_OPTIONS: RedisOptions = {
port: +REDIS_PORT,
host: REDIS_HOST,
password: REDIS_PASSWORD,
}