export const config = {
  uri: process.env.MONGODB_URL || '',
  database: process.env.MONGODB_DATABASE,
  connectionOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: parseInt(process.env.MONGODB_POOL_SIZE || '10'),
  },
}
