import mongoose from 'mongoose';

class Database {
  private DB_URL: string;

  constructor() {
    this.DB_URL =
      process.env.MONGO_URL || 'mongodb://localhost:27917/db_portal';
  }

  async createConnection(): Promise<void> {
    await mongoose.connect(this.DB_URL, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...({ useNewUrlParser: true, useUnifiedTopology: true } as any),
    });
  }
}

export default Database;
