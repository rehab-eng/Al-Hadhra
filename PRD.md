# TECHNICAL REQUIREMENTS DOCUMENT (PRD)
Project: Al-Hadhra University Platform
Status: Approved by Mr. Abdulraouf Abu Jarad
Date: 2026-02-12

## 1. EXECUTIVE SUMMARY
Building a world-class, animation-driven university platform similar to Harvard/MIT, replacing the old static system. Focus on high performance, security, and visual impact.

## 2. ACADEMIC STRUCTURE (UPDATED)
NOTE: Engineering Faculty is REMOVED.

### Approved Faculties & Departments:
1. Faculty of IT & Computer Science:
   - Computer Science (CS)
   - Cyber Security (Priority)
   - Software Engineering
2. Faculty of Law:
   - Public Law
   - Private Law
3. Faculty of Languages:
   - English Language & Translation
4. Faculty of Arts & Design:
   - Interior Design
5. Faculty of Economics:
   - Business Administration
   - Accounting

## 3. TECHNICAL ARCHITECTURE
- Frontend: Next.js (App Router), Tailwind CSS, GSAP (Animations).
- Backend: NestJS (Modular), Prisma ORM.
- Database: PostgreSQL (Dockerized).
- Caching: Redis.

## 4. DATABASE SCHEMA RULES
- Use 'Departments' table for scalability.
- User roles: STUDENT, ADMIN, STAFF.
- All IDs must be UUIDs.
