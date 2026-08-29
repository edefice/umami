import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

// Umami v3.3.1 is on Prisma ORM 7, which moved connection URLs out of
// schema.prisma and into this file (see prisma/schema.prisma's datasource
// block — it only has `provider` and `relationMode`, no `url`). There is no
// `directUrl` field here the way older Prisma versions had one in
// schema.prisma: instead, the CLI (this config) points at the DIRECT,
// non-pooled connection for `prisma migrate deploy`/`migrate dev`, while
// the running app reads DATABASE_URL itself at runtime (src/lib/prisma.ts) —
// see infra/umami/RUNBOOK.md, "Two different Postgres URLs, on purpose".
export default defineConfig({
  datasource: {
    url: env('DIRECT_DATABASE_URL'),
  },
});
