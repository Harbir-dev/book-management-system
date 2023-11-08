module.exports = {
    mongoDB: {
        connection_url: process.env.MONGODB_CONNECTION_URL,
        max_retries: process.env.MONGODB_MAX_RETRIES || 10,
    },
}