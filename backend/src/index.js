// src/index.js
import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from './auth/jwt.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import { graphqlUploadExpress } from './shims/graphql-upload.js';
import redis from './utils/redis.js';

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 4000;
const baseUrl = process.env.BASE_URL;

// Allow all CORS
app.use(cors({
  origin: (origin, callback) => {
    callback(null, true); // accept all origins
  },
  credentials: true,
}));

// Middleware
app.use(graphqlUploadExpress({ maxFileSize: 300_000_000, maxFiles: 5 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apollo Server
const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });
await server.start();

app.use(
  '/api/graphql',
  expressMiddleware(server, {
    context: async ({ req }) => {
      const auth = req.headers.authorization || '';
      const token = auth.replace('Bearer ', '');
      let userId = null;

      if (token) {
        try {
          const decoded = verifyToken(token);
          const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
          if (!user || user.tokenId !== decoded.tokenId) {
            throw new Error('Token is no longer valid');
          }
          userId = user.id;
        } catch (err) {
          console.error('❌ Invalid token:', err);
        }
      }

      return { userId, prisma };
    },
  })
);

app.listen(port, () => {
  console.log(`🚀 Apollo Server running at ${baseUrl}`);
});

// Cleanup
process.on('SIGINT', async () => {
  try {
    console.log('\n🧹 Cleaning up resources...');
    await redis.flushAll();
    await redis.quit();
    console.log('✅ Redis disconnected');

    await prisma.$disconnect();
    console.log('✅ Prisma disconnected');
    console.log('👋 Server exiting...');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during shutdown:', err);
    process.exit(1);
  }
});
