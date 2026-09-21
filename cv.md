# Muhammad Uzair

Senior Software Engineer. Backend systems and production AI on AWS.

I build the backend and the AI layer of products that handle real money, real identities and real health data: Pakistan's first passwordless digital identity platform, a multi-tenant workforce platform serving up to 15 organisations and nearly 30,000 people, and two AI-powered health products live in the US App Store.

TypeScript and Node.js on AWS, serverless and event-driven by default. LLM applications with grounding, guardrails and evals that hold up in production. I design the cloud architecture, run what I ship, and keep the cloud bill in check.

## At a glance

- **Role:** Senior Software Engineer: backend, cloud and AI engineering
- **Experience:** 6+ years hands-on, senior roles at two product companies
- **Stack:** TypeScript, Node.js, AWS serverless (Lambda, Step Functions, SQS, EventBridge, AppSync, CDK), PostgreSQL; LLM applications with RAG, agents and evals
- **Location:** Pakistan (UTC+5). Remote-first for years with North American teams; overlaps US and EU working hours. No visa needed to work remotely from Pakistan; relocation with sponsorship welcome
- **Open to:** Senior Software Engineer, Backend Engineer and AI Engineer roles at remote product companies in the EU, UK and US; relocation possible

- **$40k+ / yr** cloud and vendor spend cut or avoided across two platforms
- **2** AI-powered health products live in the US App Store
- **30,000** people on a B2B workforce platform serving up to 15 client organisations

## Work

### meraID

*Productbox, 2021 to 2024, Islamabad*

Pakistan's first passwordless digital identity platform, in the category of Sweden's BankID: one verified identity to sign in, authorise transactions and sign documents across partner services.

- **~10,000** identity verifications processed
- **5** partner services, including a university, an online shop and a hiring product
- **9 s to 1 s** API response time on live traffic

- Replaced passwords with a device-bound identity: partner services authenticate people, approve transactions and collect signatures through one integration, and the signing key never leaves the person's phone.
- Turned identity verification from minutes of manual document checking per applicant into an automated pipeline: web automation of the national identity portal with English and Urdu OCR.
- Designed and shipped the partner-facing API with per-partner key exchange, and the integration guide that partner engineering teams built against.
- Packaged the platform for on-premise deployment so banks with strict hosting rules could adopt it: the same services as containers with self-hosted databases and queues in place of managed AWS.

**My part.** Owned the backend and the AWS architecture across five event-driven serverless services, and re-architected the core when the requirements changed.

**Stack:** Node.js, AWS Lambda, DynamoDB, Serverless Framework, Puppeteer, Python, OpenCV, Tesseract, Docker.

### DigiStaff

*DigiStaff, Nov 2024 to Sep 2025, Canada, remote*

Multi-tenant workforce platform for temporary staffing in Canada: scheduling, worker check-in, payroll and billing for up to 15 client organisations.

- **15k to 30k** users, and client organisations from 5 to 15
- **45%** off the AWS bill, about $23k a year
- **1 to 5 min** downtime to move a live production database

- Cut the AWS bill by 45%, about $23,000 a year: moved the production database off end-of-life Aurora Serverless v1 to v2 with one to five minutes of downtime and no application change, then consolidated servers. Written up as a three-part series on dev.to.
- Gave supervisors plain-language candidate search: an LLM reads each résumé into structured data in a vector database, so a plain sentence finds candidates that rigid filter forms missed. Adopted across client organisations.
- Made payroll and billing safe to retry: a rerun or a redelivered message never pays a worker twice or charges a client twice.
- Shipped three ways for workers to clock in, including fingerprint hardware shared across tenants and a PIN route for workers without a phone, and removed the per-client tablet purchase that slowed onboarding.

**My part.** Led backend engineering on AWS: AppSync GraphQL over Lambda services in CDK, a master-pool Aurora PostgreSQL with a database per tenant. Hired one engineer and mentored two.

**Stack:** TypeScript, AWS Lambda, AppSync, Step Functions, SQS, EventBridge, Aurora PostgreSQL, AWS CDK, Weaviate, Gemini.

### Augi Passport

*Algorithm, Sep 2025 to present, US market, remote*

AI-powered consumer health platform for the US market: wearable data, medical records and an AI assistant on one timeline.

- **15,000** wearable samples per person per day
- **90%** less storage for health time series
- **$20k / yr** vendor spend avoided by building the realtime data path

- Built the wearable data platform on TimescaleDB: up to 15,000 samples per person per day from Apple Watch, Garmin, Oura, Fitbit and WHOOP, aggregated correctly across time zones, with storage cut by up to 90%. It shipped and carried real users' health data.
- Chose build over buy for the realtime data path after evaluating six options: hourly granularity and local raw data the vendor could not offer, and about $20,000 a year in vendor fees avoided.
- Connected medical records through a FHIR aggregator covering Epic, Cerner and Athenahealth networks, so a person's records and device data sit on one timeline.
- Made the AI assistant safe to operate: spend capped per person and per service, every request attributable, and a fault in the limiter can never take the product down; right to erasure across four data stores.

**My part.** Backend engineer across the Node/Express API and the React Native client; built the time-series platform and the wearable ingestion path.

**Stack:** Node.js, Express, PostgreSQL, TimescaleDB, MongoDB, Redis, BullMQ, React Native, Claude.

### Augi Echo

*Algorithm, 2026, US market, remote*

AI-first care companion for parents of newly diagnosed autistic children, with a live view for their clinician. Live on the App Store.

- **10 s** to log an observation by voice, down from minutes of typing
- **6** LLM features on one shared provider layer

- Parents speak; the app turns it into plain-language records, next steps and a weekly recap, and their doctor sees a structured view of the child between appointments.
- Grounded clinician chat that cites the child's own records and peer-reviewed literature, with prompt-injection and scope guardrails and rate limiting: an answer a doctor can rely on inside a fifteen-minute appointment.
- One provider layer across Anthropic and OpenAI for streaming, retries, overload deferral and kill switches, so a model swap or a cost limit is a one-line change rather than a rewrite.
- Built for daily releases: in-flight AI work finishes before a deploy, a slow provider cannot slow the rest of the app, and stranded jobs resume on their own.

**My part.** Built the AI layer end to end and most of the parent app's server: voice log, follow-up tasks, milestones, resource library, summaries, weekly recap, email verification.

**Stack:** NestJS, MongoDB, Redis, BullMQ, Anthropic, OpenAI, Expo / React Native.

### DonnaAI

*Algorithm, for a client, Sep 2025, remote*

AI phone receptionist for service businesses: a voice agent answers the call and books the job into the company's CRM, or hands over to a person.

- Every finished call becomes a booked job in the customer's CRM with nobody re-keying it: a typed integration that surfaces vendor failures as clear errors, retries with backoff and keeps credentials out of logs.
- Twilio carries the call, Retell runs speech, the product owns the LLM conversation with tool calling; fixed a production defect in the call-transfer path.

**My part.** Built the CRM integration service.

**Stack:** TypeScript, Express, Twilio, Retell, OpenAI.

### AKASH

*Freelance, Jan to Aug 2026, remote*

Marketplace for live video wellness sessions: clients book practitioners, sessions run as video calls, and money moves safely through the platform.

- Payments end to end on Stripe: wallets, payouts, transactions, commission and accounting, with webhook handling that keeps every balance right.
- Live sessions on Agora with real-time updates over Socket.IO and Redis; background work on BullMQ with a dedicated session worker.
- Shipped with CI, database migrations and a deploy path the client runs without me, plus most of the React admin dashboard.

**My part.** Built and ran the backend for a freelance client: Express on PostgreSQL with Prisma, Redis, S3.

**Stack:** Node.js, Express, PostgreSQL, Prisma, Stripe, Redis, BullMQ, Agora, Socket.IO, AWS S3, Docker.

## Earlier work

### Lettus Kitchens

*Productbox, 2021 to 2022*

Supply-chain and inventory backend for multi-city cloud kitchens: real-time stock and order tracking with transactional updates, so two orders never claim the same stock. Node.js, Express, MySQL on AWS.

### jobApp

*Productbox, 2022*

Hiring portal with configurable pipelines, stage boards, score cards and automations, with meraID for passwordless sign-in. Serverless AWS, DynamoDB.

### MonsterPool

*Productbox, 2021*

Interest-free peer-to-peer lending for the US market with Plaid bank integration; shipped the tips feature end to end. Express, MySQL.

## Open source

### [pennyllm-router](https://github.com/uzair004/pennyllm-router)

A TypeScript router between application code and LLM providers: an ordered model chain with two-tier failover (rotate keys within a provider, then move to the next), provider-error classification that never leaks a vendor SDK's error type, per-key cooldowns with exponential backoff, and a rolling-window circuit breaker with half-open recovery.

### [candidate-finder-ai](https://github.com/uzair004/candidate-finder-ai)

Résumé ingestion and semantic candidate search on AWS: a five-stage Step Functions pipeline fed by SQS through EventBridge Pipes, hybrid BM25 plus vector search in Weaviate joined back to Postgres, behind an AppSync GraphQL API. Runs locally on Docker with Ollama at zero API cost. The open-source sibling of the pipeline shipped at DigiStaff.

### [event-driven-serverless-app](https://github.com/uzair004/event-driven-serverless-app)

Reference event-driven backend on AWS: Lambda behind API Gateway, DynamoDB, SQS, Serverless Framework and GitHub Actions, in clean architecture so the logic tests without the cloud.

### [missing-person-finder](https://github.com/uzair004/missing-person-finder)

Matches an uploaded photo against stored face embeddings, running face recognition server-side in Node (TensorFlow.js with MediaPipe models), 1024-dimension embeddings at a 0.55 similarity threshold.

### [nest-sse-example](https://github.com/uzair004/nest-sse-example)

Server-sent events in NestJS from an RxJS observable, the primitive the streaming work at Augi later relied on.

### [node-clean-boilerplate](https://github.com/uzair004/node-clean-boilerplate)

Node.js starting point on clean architecture and domain-driven design.

## Writing

### Aurora Serverless v1 to v2, a migration series

Written while executing the DigiStaff production migration: what changed between the versions, two strategies compared on six axes, and the snapshot-and-restore route step by step with its rollback plan.

- [Aurora Serverless v2 vs. v1: a concise comparison of key differences](https://dev.to/uzair004/aurora-serverless-v2-vs-v1-a-concise-comparison-of-key-differences-2103), Feb 2025
- [Migrate Aurora v1: strategies explained](https://dev.to/uzair004/migrate-aurora-v1-strategies-explained-3e7d), Mar 2025
- [Aurora v1 to v2, migrating via snapshot and restore: a step-by-step guide](https://dev.to/uzair004/aurora-v1-to-v2-migrating-via-snapshot-and-restore-a-step-by-step-guide-5c02), Mar 2025

## Experience

### Senior Software Engineer

*Algorithm, Remote, US products, Sep 2025 to present*

Augi Passport, Augi Echo, DonnaAI. Architecture, code review, mentoring, incident response.

### Senior Backend Engineer

*DigiStaff, Remote, Canada, Nov 2024 to Sep 2025*

Led backend engineering on the workforce platform.

### Backend Engineer

*Productbox, Islamabad, Oct 2021 to Nov 2024*

meraID backend and AWS architecture; Lettus Kitchens and jobApp backends.

### Junior Backend Engineer

*Productbox, Islamabad, Jun to Oct 2021*

MonsterPool fintech backend.

### Freelance Node.js Developer

*Fiverr, Remote, Mar to Jun 2021*

Marketplace backend for handmade-product sellers: Node.js, MongoDB, Redis, multi-currency.

## Education

### BSc Computer Science

*University of Peshawar, 2017 to 2021*

GPA 3.78 / 4.0

### Full Stack Engineer, volunteer

*University of Peshawar, Aug 2020 to Jan 2021*

First professional role, during the final year.

## Technologies

- **Languages:** TypeScript, JavaScript, SQL, Python
- **Backend:** Node.js, Express, NestJS, GraphQL (AppSync), REST, WebSocket, Server-sent events, Clean architecture, Multi-tenant SaaS
- **AWS and cloud:** Lambda, Step Functions, SQS, EventBridge, AppSync, API Gateway, Aurora, DynamoDB, S3, SES, IoT Core, EC2, CDK, Serverless Framework, CloudWatch, Firebase, GCP Functions
- **Data:** PostgreSQL, Aurora Serverless, TimescaleDB, DynamoDB, MongoDB, MySQL, Redis, Weaviate, Prisma, Sequelize
- **AI:** Anthropic, OpenAI and Gemini APIs, RAG and grounding, Embeddings and hybrid search, LLM extraction under schemas, Guardrails and evals, Provider failover and cost caps, Voice agents and tool calling, Vercel AI SDK
- **Product and integrations:** React Native (Expo), React, Next.js, Stripe, Plaid, Twilio, FHIR
- **Operations:** Docker, GitHub Actions, Infrastructure as code, Observability and on-call, Live database migrations, Cloud cost engineering

## How I work

### Cloud architecture that pays for itself

- Serverless and event-driven on AWS: Lambda, Step Functions, SQS, EventBridge, AppSync, CDK
- Infrastructure as code, CI/CD, release trains to staging and production
- $40k+ a year in cloud and vendor spend cut or avoided, measured on the bill

### Correct with real money and real data

- Payments, payroll and billing that are safe to retry
- Identity and health data handled with erasure, audit and residency in mind
- Database migrations on live traffic with a rollback plan

### AI that survives production

- Grounding and citations over private data
- Guardrails, evals and hard cost ceilings
- Provider abstraction so the feature outlives the vendor

### Remote by default

- Years of remote work with North American teams, overlapping US and EU hours
- Written proposals compared on their trade-offs before anything is built
- Code review, incident response and mentoring junior engineers

## Get in touch

- Email: uzairkhattak004@gmail.com
- LinkedIn: https://www.linkedin.com/in/uzair004
- GitHub: https://github.com/uzair004
