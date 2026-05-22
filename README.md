# Himanshu Kumar Thakur Portfolio

Full-stack student portfolio built with:

- React frontend
- Java Spring Boot backend
- REST APIs
- MySQL-ready persistence

## Project Structure

```text
frontend/   React portfolio UI
backend/    Spring Boot REST API + MySQL configuration
```

## Run Backend

Create a MySQL database:

```sql
CREATE DATABASE portfolio_db;
```

Then update credentials in `backend/src/main/resources/application.properties` if needed.

```bash
cd backend
mvn spring-boot:run
```

The API runs on `http://localhost:8080`.

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

The React app runs on `http://localhost:5173`.

## API

- `GET /api/profile`
- `GET /api/projects`
- `GET /api/skills`
- `GET /api/experience`
- `GET /api/education`
- `GET /api/achievements`
