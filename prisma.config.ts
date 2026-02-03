import "dotenv/config";
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Adding 'prisma/' before dev.db ensures the file is created 
    // inside your prisma folder alongside your schema.
    url: 'file:./prisma/dev.db',
  },
});