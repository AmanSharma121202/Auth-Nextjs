# 🔐 Auth-Nextjs

A token-based authentication system built with **Next.js (App Router)**, featuring:

- User Sign Up / Log In
- Email Verification
- JWT-based Token Authentication
- Protected Routes using Middleware
- Password Reset Flow

---

## 🚀 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript / JavaScript**
- **MongoDB with Mongoose**
- **JWT (JSON Web Tokens)**
- **Tailwind CSS**
- **Mailtrap / Nodemailer** (for sending email links)

---

## ✨ Features

✅ User registration with email verification  
✅ Login with token-based session  
✅ Middleware to protect private routes  
✅ Password reset via email link  
✅ Toast notifications for success/errors  
✅ Clean and responsive UI with Tailwind

---

## 🛠️ How It Works

### 🔑 Token-Based Auth

- On login/signup, a **JWT token** is generated and sent to the client in **cookies**
- Middleware checks for a valid token before allowing access to protected pages
- Email verification is required before login is allowed

---



