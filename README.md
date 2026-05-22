# 🏥 DocAppoint

> **Your Health, Our First Priority.**
> A secure, clinical-grade Doctor Appointment Booking System for seamless scheduling, doctor browsing, and patient management.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-0d9488?style=for-the-badge&logo=vercel)](https://doctor-appointment-manager-beta.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 📌 Overview

**DocAppoint** is a modern full-stack healthcare appointment management platform designed to connect patients with verified doctors efficiently and securely. Users can explore doctor profiles, book appointments in real time, and manage their bookings through a protected personal dashboard.

This project simulates a real-world healthcare workflow with a strong emphasis on **security, usability, performance, and scalability**.

---

## ✨ Features

| Feature | Description |
|---|---|
| 👨‍⚕️ Doctor Browsing | Explore verified doctors with detailed profiles and availability |
| 📅 Real-Time Booking | Book appointments instantly with confirmation feedback |
| 🔐 Secure Auth | JWT / Better Auth with Google and GitHub OAuth support |
| 📊 Protected Dashboard | Manage personal bookings with full CRUD operations |
| 🔍 Search | Filter appointments by doctor name |
| 📱 Responsive | Fully optimized for mobile, tablet, and desktop |
| ❗ Error Handling | Toast notifications, custom 404 page, safe API error handling |
| 🔁 Smart Redirects | Redirects users back to intended page after login |

---

## 🧰 Tech Stack

### Frontend
- Next.js — App Router, file-based routing, SSR/SSG
- React.js — Component-driven UI
- Tailwind CSS — Utility-first styling

### Backend
- Node.js + Express.js — RESTful API server

### Database
- MongoDB Atlas — Document-based data storage

### Authentication
- Better Auth — Session management, JWT
- OAuth 2.0 — Google and GitHub login

### Deployment
- Vercel — Frontend hosting
- Render / Vercel — Backend hosting

---

## 📁 Project Structure

```bash
docappoint/
├── public/
├── src/
│   ├── app/                  # Next.js App Router pages
│   ├── components/           # Reusable UI components
│   ├── services/             # API service functions
│   ├── utils/                # Utility/helper functions
│   └── styles/               # Global styles
├── server/
│   ├── routes/               # Express route definitions
│   ├── controllers/          # Business logic handlers
│   ├── models/               # MongoDB Mongoose models
│   └── middleware/           # Auth and validation middleware
├── proxy.js                  # Next.js 16 route protection
├── .env.local                # Environment variables
├── next.config.js
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/docappoint.git
cd docappoint
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
BETTER_AUTH_SECRET=your_better_auth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

```
http://localhost:3000
```

---

## 🧑‍⚕️ Core Modules

### 🏠 Home Page
- Hero banner section
- Top-rated doctors showcase
- Platform feature highlights

### 📋 All Appointments
- Public listing of all appointments
- Search and filter by doctor name
- Protected navigation to appointment details

### 👨‍⚕️ Doctor Profile
- Comprehensive doctor information
- Availability schedule display
- One-click appointment booking

### 📝 Booking System
- Appointment form with validation
- Data persisted to MongoDB
- Success/error toast notifications

### 📊 Dashboard (Protected)
- My Bookings — View, update, and delete personal appointments
- My Profile — View and update user details with instant UI feedback

### 🔐 Authentication
- Email/password login and registration
- Google and GitHub OAuth
- JWT / session-based security
- Protected routes via proxy.js
- Callback URL redirect after login

---

## 🔒 Route Protection

DocAppoint uses Next.js 16's `proxy.js` for route-level security:

| Route | Access |
|---|---|
| `/all-appointments` | Public |
| `/all-appointments/:path` | Requires authentication |
| `/dashboard/:path` | Requires authentication |

Unauthenticated users are redirected to `/signin` with a `callbackUrl` to restore their navigation intent after login.

---

## 🚀 Deployment

| Layer | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render / Vercel |
| Database | MongoDB Atlas |

---

## 👨‍💻 Author

**Md Maruf**
Full Stack Developer — MERN / Next.js

[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=flat&logo=github)](https://github.com/your-username)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-0d9488?style=flat&logo=vercel)](https://your-portfolio.com)

---

Built with ❤️ for better healthcare accessibility.
