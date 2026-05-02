import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';

const client = new MongoClient(process.env.MONGODB_URI);


if (!client.topology?.isConnected()) {
  await client.connect();
}

const db = client.db('SKILL_SPHERE');

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  trustedOrigins: [
    'http://localhost:3000',
    'https://skill-sphere-sable.vercel.app',
  ],

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
