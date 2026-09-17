# Wanderlust-Project

A full-stack accommodation and travel platform where users can discover, create, edit, and manage property listings.

## Features

* User authentication and authorization
* Create, edit, and delete property listings
* Property image uploads
* Reviews and ratings
* Responsive user interface
* MongoDB database integration
* Cloudinary image storage

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* EJS
* JavaScript
* Cloudinary
* Bootstrap

## Installation

### Prerequisites

Make sure you have the following installed:

* Node.js
* MongoDB
* Nodemon

### 1. Clone the repository

```bash
git clone https://github.com/Ankurchaudhary9565/Wanderlust-Project.git
cd Wanderlust-Project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
SECRET=your_session_secret
```

Do not upload the `.env` file to GitHub.

### 4. Start the application

```bash
nodemon app.js
```

The application will run at:

```text
http://localhost:8080
```

## Project Structure

```text
Wanderlust-Project/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── classroom/
├── app.js
├── middleware.js
├── schema.js
├── cloudConfig.js
├── package.json
└── package-lock.json
```
