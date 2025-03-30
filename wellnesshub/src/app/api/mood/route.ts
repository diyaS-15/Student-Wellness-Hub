import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "your_mongodb_connection_string";
let client: MongoClient;

async function connectToDB() {
  if (!client) client = new MongoClient(uri);
  await client.connect();
  return client.db("wellnesshub").collection("moodTracker");
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const collection = await connectToDB();

  if (req.method === "GET") {
    const mood = await collection.findOne({});
    res.json({ mood: mood?.value || 3 });
  } else if (req.method === "POST") {
    const { mood } = req.body;
    await collection.updateOne({}, { $set: { value: mood } }, { upsert: true });
    res.status(200).json({ message: "Mood updated!" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}