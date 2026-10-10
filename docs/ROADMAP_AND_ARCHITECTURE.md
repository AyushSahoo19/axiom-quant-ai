# Axiom: Quant & AI SaaS Transformation Roadmap

This document outlines the strategic roadmap and technical architecture for transforming the Axiom Quant Learning Hub from a static frontend interface into a fully functional, production-ready AI Software-as-a-Service (SaaS) platform.

---

## 1. Core Architecture & Tech Stack

The transition to a SaaS model will build upon the existing Next.js framework, integrating robust open-source and free-tier solutions.

*   **Frontend Framework:** Next.js 14+ (App Router), React, Tailwind CSS.
*   **Hosting & CI/CD:** Vercel (Native Next.js support, edge caching, automated GitHub deployments).
*   **Authentication & Database:** Supabase (PostgreSQL, Row Level Security, Google/GitHub OAuth).
*   **AI Integration:** Vercel AI SDK communicating with Groq API.
*   **Open-Source LLMs:** Meta Llama 3 (8B/70B) or Mixtral via Groq for ultra-low latency, free-tier inference.

---

## 2. Phased Implementation Roadmap

### Phase 1: Source Control & Foundation (Current)
- [x] Initialize Git repository.
- [ ] Push codebase to GitHub.
- [ ] Connect GitHub repository to Vercel for continuous deployment.
- [ ] Verify production build stability on Vercel.

### Phase 2: AI Assistant Integration
- [ ] Register for a free API key on Groq (or Together AI).
- [ ] Install `ai` and `@ai-sdk/openai` (or groq provider) via npm.
- [ ] Create API route `app/api/chat/route.ts` for secure backend LLM communication.
- [ ] Refactor `AssistantWorkspace.tsx` to use the `useChat` hook for real-time streaming responses, replacing the mocked bot logic.

### Phase 3: SaaS Mechanics (Auth & DB)
- [ ] Setup Supabase project and link to Next.js using `@supabase/ssr`.
- [ ] Implement user authentication (Sign In / Sign Up modals).
- [ ] Create PostgreSQL tables:
    - `users` (id, email, role, created_at)
    - `targets` (id, user_id, title, priority, status, date)
    - `projects` (id, user_id, title, tech_stack, metrics)
- [ ] Update `TargetsWorkspace` and `ProjectsWorkspace` to fetch and mutate real data from Supabase instead of local React state.

### Phase 4: The Quant Marketplace
- [ ] Create a new route `app/marketplace/page.tsx` utilizing the global `Topbar`.
- [ ] Design a unified dashboard layout featuring tabs for:
    - **Jobs & Internships:** Curated list of roles at top firms (Jane Street, HRT, Citadel).
    - **Research Papers:** Integration with ArXiv API or a curated Supabase table for Quant/ML papers.
    - **Algorithms & Products:** A digital storefront for trading scripts, datasets, and alpha signals.
- [ ] Implement search and filtering mechanics for the marketplace.

---

## 3. Deployment Pipeline

1. **Local Development:** `npm run dev`
2. **Commit:** `git add .` -> `git commit -m "feature description"`
3. **Push:** `git push origin main`
4. **Deploy:** Vercel automatically detects the push, runs `npm run build`, and updates the live production URL.

---

## 4. Maintenance & Scalability

*   **Database Scaling:** Supabase Postgres easily scales vertically. Row Level Security (RLS) ensures users only access their own targets and projects.
*   **AI Costs:** Utilizing Groq's free tier keeps initial operating costs near zero. If volume scales, Groq's token pricing remains highly competitive compared to proprietary APIs.
*   **Monetization:** Once features are stable, Stripe Checkout can be integrated to gate premium marketplace products or advanced AI capabilities.
