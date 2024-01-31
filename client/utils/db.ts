import { MongoClient, Db } from 'mongodb';

let client: MongoClient;

export const connectToDatabase = async (): Promise<Db> => {
  if (!client) {
    const uri = process.env.MONGODB_URI ;

    if (!uri) {
      throw new Error('MONGODB_URI is not defined in the environment variables.');
    }

    client = await MongoClient.connect(uri);
  }

  return client.db();
};
