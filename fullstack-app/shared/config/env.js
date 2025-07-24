// This file contains environment variables and configuration settings for the application.
// Please update the values according to your environment.

const config = {
    PORT: process.env.PORT || 3000,
    DB_TABLE: process.env.DB_TABLE || 'YourDynamoDBTableName',
    AWS_REGION: process.env.AWS_REGION || 'us-east-1',
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || 'your-access-key-id',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || 'your-secret-access-key',
};

module.exports = config;