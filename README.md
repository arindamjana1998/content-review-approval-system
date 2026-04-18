# Content Review & Approval System

A robust, multi-level **Content Management and Approval System (CMS)** designed to streamline the editorial process. This system facilitates a clear workflow from content creation to multi-stage review (Level 1 and Level 2) and final publishing, ensuring high-quality standards and accountability through a detailed audit trail.

---

## 🚀 Key Features

- **Multi-Level Approval Workflow**: Content moves through sequential review stages (L1 -> L2) before being finalized.
- **Role-Based Access Control (RBAC)**: Distinct permissions for **Creators**, **Reviewers (Level 1 & 2)**, and **Admins**.
- **Audit Trail & History**: Tracks every action (submit, approve, reject, publish) with timestamps and reviewer comments.
- **Dynamic Dashboard**: Provides real-time statistics and metrics for content status and system activity.
- **Versioning**: Maintains version control as content undergoes revisions.
- **Responsive UI**: A modern, sleek dashboard built with Next.js and Tailwind CSS, optimized for all devices.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.x or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 🛠️ Installation & Local Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/arindamjana1998/content-review-approval-system.git
   cd content-review-approval-system
   ```

2. **Backend Setup**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure Environment Variables:
     - Create a `.env` file in the `backend` directory based on `.env.example`.
     - Fill in your MongoDB URI and JWT Secret.

3. **Frontend Setup**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Configure Environment Variables:
     - Create a `.env` file in the `frontend` directory based on `.env.example`.
     - Set the `NEXT_PUBLIC_API_URL` to point to your backend (default: `http://localhost:5000/api`).

---

## 🔐 Environment Variables

The project uses `.env` files for configuration. You **must** create these files in their respective directories (`backend/` and `frontend/`) based on the provided `.env.example` templates.

### Backend (`backend/.env`)

| Variable      | Description                        | Example                         |
| :------------ | :--------------------------------- | :------------------------------ |
| `PORT`        | Port number for the Express server | `5000`                          |
| `MONGODB_URI` | MongoDB Connection String          | `mongodb://localhost:27017/cms` |
| `JWT_SECRET`  | Secret key for JWT authentication  | `your_super_secret_key`         |
| `NODE_ENV`    | Environment mode                   | `development`                   |

### Frontend (`frontend/.env`)

| Variable              | Description                  | Default                     |
| :-------------------- | :--------------------------- | :-------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL for the Backend API | `http://localhost:5000/api` |

---

## 🏃 Running the Project

### Start the Backend

- **Development**:
  ```bash
  npm run dev
  ```
- **Production**:
  ```bash
  npm run start
  ```
  The server will start on `http://localhost:5000`.

### Start the Frontend

- **Development**:
  ```bash
  npm run dev
  ```
- **Production**:
  ```bash
  npm run build
  npm run start
  ```
  The application will be available at `http://localhost:3000`.

---

## 🔄 Project Flow & Architecture

### Architecture

The project follows a modern **MERN-like stack** architecture:

- **Frontend**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion.
- **Backend**: Node.js, Express, MongoDB (Mongoose).
- **Security**: JWT-based authentication and Bcrypt password hashing.
- **Design Pattern**: The backend implements a **Layered Architecture** (Route -> Controller -> Service -> Repository) for scalability and maintainability.

### End-to-End Workflow

1. **Authentication**: Users log in based on their assigned roles.
2. **Content Creation**: A **Creator** drafts content and submits it for review.
3. **Level 1 Review**: A **Reviewer (L1)** checks the content. They can either **Approve** (moves to L2) or **Reject** (returns to draft).
4. **Level 2 Review**: A **Reviewer (L2)** performs the final check.
5. **Publishing**: Once approved at both levels, the content is marked as **Approved** and can be **Published**.
6. **Management**: **Admins** have full visibility, managing users, roles, and monitoring system stats via the dashboard.

---

## 📂 Folder Structure

### Backend (`/backend`)

- `src/config`: Database and environment configurations.
- `src/controllers`: Request handlers and API logic.
- `src/middlewares`: Auth guards and error handlers.
- `src/models`: Mongoose schemas (User, Content).
- `src/repositories`: Direct database interactions.
- `src/routes`: API endpoint definitions.
- `src/services`: Core business logic layer.
- `src/seeds`: Scripts for initial database seeding.

### Frontend (`/frontend`)

- `app/`: Next.js App Router (pages and layouts).
- `components/`: Reusable UI components.
- `context/`: Global states (e.g., AuthContext).
- `services/`: API integration services using Axios.
- `types/`: TypeScript interfaces and definitions.
- `lib/`: Utility functions and shared configurations.

---

## 📝 Additional Notes

- **Default Credentials**: The system includes a set of mock users for testing.

| Username    | Role     | Password | Purpose                               |
| :---------- | :------- | :------- | ------------------------------------- |
| `admin`     | Admin    | Qwe@1234 | Full system management and analytics. |
| `creator1`  | Creator  | Qwe@1234 | Content drafting and submission.      |
| `reviewer1` | Reviewer | Qwe@1234 | Level 1 / Level 2 content review.     |
| `reviewer2` | Reviewer | Qwe@1234 | Level 1 / Level 2 content review.     |

- **Seeding**: The backend automatically runs a seeding process on startup if the database is empty. To manually trigger or view the logic, see `backend/src/seeds/seed.js`.
- **Audit Logs**: Every status change is captured in the `approvalHistory` array within the content document, visible in the UI timeline.

---
