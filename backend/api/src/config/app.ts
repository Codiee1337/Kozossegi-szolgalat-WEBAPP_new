export const{
    NODE_ENV = 'development',
    APP_PORT = 5000,
    IP_BIND = 'localhost'
} = process.env

export const IN_PROD = NODE_ENV === 'production'