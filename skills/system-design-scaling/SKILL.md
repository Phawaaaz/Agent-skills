---
name: system-design-scaling
description: Practical backend scaling and delivery playbook - growing from one server to load balancer, cache, read replicas, sharding, object storage and CDN; caching correctly (hits, misses, TTL, invalidation, stampedes); surviving the first 100 users with connection pooling, caching and load tests; and CI/CD pipelines. Use this whenever the user asks about scaling, performance under load, Redis or caching, database bottlenecks, "my app crashed with users", load testing, deployment pipelines, GitHub Actions, or system design interviews, even if they don't say "system design".
---

# System design and scaling

Saved reels on backend scaling. The core idea: nobody designs a nine-component system up front. Start with one server and add each piece only when something breaks.

## Growth ladder: add a piece when its problem appears
| Problem | Add |
| --- | --- |
| One server can't keep up | More app servers plus a **load balancer** |
| Every server hammers the same database | A **cache** (Redis) for repeated reads |
| Reads keep growing | **Read replicas** (primary writes, replicas read) |
| One database can't hold or serve it all | **Sharding** (partition users or data by range or key) |
| Images and videos in the database | **Object storage** (S3, R2) plus a **CDN** near users |
| Slow work in the request (uploads, emails, video) | A **queue** and background workers |

## Caching, step by step
1. **Basic cache-aside**: check Redis; on a hit return it; on a miss read the database, store in Redis, return. A miss costs two trips.
2. **Stale data**: when a user changes their username, Redis still has the old one.
3. **TTL**: expire entries (e.g. 5 minutes). Simple, but 5 minutes of stale data can reach thousands of users.
4. **Invalidation**: when the record changes, delete its cache key. Prefer this for user-visible data.
5. Watch for the next failure: a popular key expiring causes many simultaneous misses (a stampede) that hit the database at once. Use request coalescing or a lock, or refresh the entry before it expires.
Even a 1-second cache on a hot endpoint (like a feed) can let a small server handle thousands of concurrent users.

## Surviving your first 100 users (30 minutes each)
1. **Connection pooling**: reuse database connections (Supabase has it built in; self-hosted Postgres: PgBouncer). 50 requests share 10 connections instead of opening 50.
2. **Caching layer**: Redis, Upstash or in-memory for anything that doesn't change every second (e.g. 800 ms → 50 ms, database load down ~80%).
3. **Load test before launch**: k6 or Artillery, simulate 100 users at once, and fix what breaks before real users find it.

## CI/CD
- **CI** answers "is this code safe to merge?" Every push runs install, lint, unit and integration tests, build and a security scan. Red means no merge.
- **CD** builds a release artifact (e.g. a Docker image) and deploys to staging, where more checks run.
  - Continuous **delivery**: a human approves production.
  - Continuous **deployment**: if every check passes, it goes straight to production.
- Typical flow: push to GitHub → GitHub Actions → tests → Docker image → staging → production. Include database migrations in the pipeline; forgetting one by hand is a classic cause of a 502.

## Sources
| Topic | Reel | Creator |
| --- | --- | --- |
| System design 101: growth ladder | https://www.instagram.com/reel/DdrHAI1MrFb/ | @rick.theengineer |
| Designing a cache, version by version | https://www.instagram.com/reel/Db3a1pms88h/ | @rick.theengineer |
| CI/CD explained | https://www.instagram.com/reel/DeCf1khst4y/ | @rick.theengineer |
| 50 users broke your app: 3 fixes | https://www.instagram.com/reel/DYkAobpgwjI/ | @mattmurphyai |
| How many users can a $12 server support? (load test with a 1 s feed cache) | https://www.instagram.com/reel/DdukPSkR2S1/ | @arjay_the_dev |
