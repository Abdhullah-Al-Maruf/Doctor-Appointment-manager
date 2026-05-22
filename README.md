# 🏥 DocAppoint

> **Your Health, Our First Priority.**  
A secure, clinical-grade Doctor Appointment Booking System for seamless scheduling, doctor browsing, and patient management.

🌐 Live Site: https://doctor-appointment-manager-beta.vercel.app

---

## 📌 Overview

**DocAppoint** is a modern full-stack healthcare appointment management platform designed to connect patients with verified doctors in an efficient and secure way. Users can explore doctors, view detailed profiles, book appointments, and manage their bookings through a protected dashboard.

This project simulates a real-world healthcare workflow with a strong focus on **security, usability, performance, and scalability**.

---

## ✨ Key Features

- 👨‍⚕️ Browse verified doctors with detailed profiles  
- 📅 Real-time appointment booking system  
- 🔐 Secure authentication (JWT / Better Auth)  
- 🧑‍💻 Protected dashboard for users  
- ✏️ Update and delete appointments (full CRUD operations)  
- 🏥 Detailed doctor profile pages  
- 🔍 Search appointments by doctor name  
- 📱 Fully responsive design (mobile, tablet, desktop)  
- ⚡ Fast, modern, and optimized user experience  

---

## 🎨 UI/UX Design

- Clean, healthcare-focused interface  
- Soft and calming color palette (teal, white, neutral tones)  
- Consistent typography and spacing system  
- Card-based layout for doctors and appointments  
- Accessibility-friendly design approach  
- Modern UX inspired by real healthcare platforms  

---

## 🧰 Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT / Better Auth (Google or GitHub OAuth)

### Deployment
- Vercel (Frontend)
- Render / Vercel (Backend)

---

## 📁 Project Structure

```bash
docappoint/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── app/
│   ├── services/
│   ├── utils/
│   └── styles/
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
├── .env.local
├── next.config.js
└── README.md



---
⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/your-username/docappoint.git
cd docappoint
2. Install Dependencies
npm install
3. Setup Environment Variables

Create a .env.local file:

NEXT_PUBLIC_API_URL=http://localhost:5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. Run Development Server
npm run dev
5. Open in Browser
http://localhost:3000
---

---
🧑‍⚕️ Core Modules
🏠 Home Page
Hero section with banner
Top rated doctors
Additional feature sections
📋 Appointments Page
View all appointments
Search by doctor name
Protected details navigation
👨‍⚕️ Doctor Details Page
Full doctor information
Availability schedule
Book appointment feature
📝 Booking System
Appointment form/modal
Store data in MongoDB
Success confirmation system
📊 Dashboard (Protected)
My Bookings
View personal appointments
Update appointment
Delete appointment instantly
My Profile
View user details
Update profile info
Instant UI updates
🔐 Authentication Flow
Email/password authentication
Google or GitHub OAuth support
JWT/session-based security
Protected routes
Redirect to previous route after login
📱 Responsive Design
Mobile-first layout
Tablet optimized UI
Desktop full experience
Consistent spacing system
❗ Error Handling
Custom 404 page
Toast notifications for success/error
No default browser alerts
Safe API error handling
🚀 Deployment
Frontend: Vercel
Backend: Render / Vercel
Database: MongoDB Atlas
---
```bash
👨‍💻 Author

Md Maruf
Full Stack Developer (MERN / Next.js)


---