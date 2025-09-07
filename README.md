# Mini-Property-Listing-Platform
# Property Listing Web App

This project is a simplified full-stack property listing platform where users can view properties, and administrators can add new ones.

## Features

**Frontend (Next.js):**
- **Home Page:** Displays a list of all available properties with cards showing image, title, price, and location.
- **Property Details Page:** A dynamic route (`/property/[id]`) to view detailed information about a specific property.
- **Admin Page:** A protected route (`/admin`) for authenticated administrators to add new property listings via a form.
- **Authentication:** JWT-based login for admin users.
- **Responsive UI:** Designed to be clean, functional, and responsive, taking inspiration from platforms like 99acres.

**Backend (Node.js + Express):**
- **REST API:**
    - `GET /api/properties`: Fetches all property listings.
    - `GET /api/properties/:id`: Fetches details for a single property.
    - `POST /api/properties`: Adds a new property listing (protected by admin authentication).
- **Database:** MongoDB (local or Atlas) with a schema for properties and users.
- **Authentication:** JWT for securing admin routes.
- **CORS Enabled:** Allows communication between frontend and backend on different origins during development.

## Technologies Used

- **Frontend:** Next.js, React.js, Tailwind CSS (for styling), Axios (for API calls), React Hot Toast (for notifications).
- **Backend:** Node.js, Express.js, Mongoose (for MongoDB ODM), JWT (for authentication), Bcrypt (for password hashing), Dotenv (for environment variables), CORS.
- **Database:** MongoDB (local or MongoDB Atlas).

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)
- MongoDB (running locally or a MongoDB Atlas account)

### 1. Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-link>
    cd <your-repo-name>
    ```

2.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Create a `.env` file** in the `backend` directory and add the following:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_atlas_connection_string_or_local
    JWT_SECRET=a_strong_secret_key_for_jwt
    ADMIN_EMAIL=admin@test.com
    ADMIN_PASSWORD=admin123
    ```
    *Replace `your_mongodb_atlas_connection_string_or_local` with your MongoDB connection string. For local MongoDB, it might be `mongodb://localhost:27017/propertydb`.*
    *Make sure `JWT_SECRET` is a strong, random string.*

5.  **Seed the database with an admin user and dummy properties (optional but recommended for first run):**
    ```bash
    npm run seed
    ```
    This script will create the `admin@test.com` user with password `admin123` (hashed) and add some initial property listings.

6.  **Start the backend server:**
    ```bash
    npm run dev
    # Or, for production:
    # npm start
    ```
    The backend server should start on `http://localhost:5000`.

### 2. Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend # If you are in the backend folder
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env.local` file** in the `frontend` directory and add the following:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:5000/api
    ```
    *If your backend is deployed, update this URL to your deployed backend API endpoint.*

4.  **Start the Next.js development server:**
    ```bash
    npm run dev
    ```
    The frontend application should open in your browser at `http://localhost:3000`.

## Usage

-   **View Properties:** Open `http://localhost:3000` in your browser to see all listed properties. Click on any property card to view its details.
-   **Admin Login:** Navigate to `/login` or click "Admin Login" in the navbar. Use `admin@test.com` and `admin123` to log in.
-   **Add Properties:** After logging in as admin, you'll be redirected to `/admin`. Use the form to add new property listings.

## Bonus Features (Not implemented in this initial code, but suggestions)

-   **Search & Filter:** Implement search functionality by title/location and filters by price range on the Home Page. This would involve adding query parameters to the `GET /api/properties` endpoint.
-   **Image Upload:** Instead of a URL, implement actual image file uploads (e.g., using Multer on the backend and storing images in a cloud storage like Cloudinary or AWS S3, or locally).
-   **User Registration/Roles:** Extend the authentication to support different user roles (e.g., regular user vs. admin) or multiple admins.

## Live Deployment

The final deliverable requires a live deployment. Here are common choices:

-   **Frontend (Next.js):** Vercel (highly recommended for Next.js apps, direct GitHub integration).
-   **Backend (Node.js/Express):** Render, Railway, or Heroku (free tier might have limitations).

**Deployment Steps (General):**

1.  **Create accounts** on Vercel and Render/Railway.
2.  **Connect your GitHub repository** to these platforms.
3.  **Configure environment variables** on the deployment platforms (especially `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD` for the backend, and `NEXT_PUBLIC_API_URL` for the frontend, pointing to your deployed backend URL).
4.  **Trigger builds** and deploy.

---
**GitHub Repo Link:** (To be filled by you after pushing to GitHub)
**Live Deployment Link:** (To be filled by you after successful deployment)
