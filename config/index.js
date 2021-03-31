module.exports = {
    name: 'Tested',
    version: '1.0.0',
    env: process.env.NODE_ENV || 'development',
    serverSettings: {
        port: process.env.PORT || 3000
    },
    dbSettings: {
        db: process.env.DB || '',
        server: process.env.DB_SERVER || '',
        get url (){
             return `mongodb://${this.server}/${this.db}`
        }
    },
    tokenSettings: {
        publicKey: process.env.PUBLIC_KEY || 'PTTDIGITALTEST',
        accessTokenExpiry: 60 * 60 * 24 * 14, // 2 weeks.
        privateKey: process.env.PRIVATE_KEY || 'PTTDIGITALTEST',
        privateAccessTokenExpiry: 60, // 1 minute.
    }
}