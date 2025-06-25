# Fullstack CRUD App (Spring Boot + ReactJS)

This project is a full-stack CRUD application built with:

- **Backend**: Java Spring Boot
- **Frontend**: React.js with Material UI
- **Authentication**: JWT-based
- **Database**: PostgreSQL
- **Build Tool**: Maven

## 🛠️ Technologies Used

| Layer     | Stack                                          |
|-----------|------------------------------------------------|
| Frontend  | React.js, Axios, React Router, MUI             |
| Backend   | Spring Boot, Spring Security, JWT, JPA, Lombok |
| Database  | PostgreSQL                                     |
| Tools     | Maven, Git, IntelliJ / WebStorm                |

## 🚀 Setup Instructions

### Clone the repository
    git clone git@github.com:Yassine-121/fullstack-crud-app.git
    cd fullstack-crud-app

### Backend

1. **Configure PostgreSQL**
    - Create a database called `productdb`.

2. **Copy and configure backend properties**
    - Copy `application.properties.example` → `application.properties`.
    - Update it with your DB credentials and JWT settings.

3. **Run the backend**
   ```bash
   mvn spring-boot:run

### Frontend

1. **Copy and configure environment variables**
    - Duplicate `.env.example` and rename it to `.env`.
    - Replace the placeholder with your actual backend API URL:
      ```env
      API_BASE_URL=http://localhost:8080/api
      ```

2. **Install dependencies**
   ```bash
   npm install

3. **Run the frontend**
   ```bash
   npm start