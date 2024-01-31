import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/utils/db';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('users'); 
    const data = await collection.find({}).toArray();

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

