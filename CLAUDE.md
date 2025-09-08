# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Flux Panel application with a React/Vite frontend and Spring Boot backend. The application appears to be a traffic forwarding/proxy management system with user management capabilities.

## Architecture

### Frontend (vite-frontend/)
- **Framework**: React 18 with TypeScript
- **UI Library**: HeroUI v2 components with Tailwind CSS
- **State Management**: React hooks and context
- **Routing**: React Router v6
- **Build Tool**: Vite 5

### Backend (springboot-backend/)
- **Framework**: Spring Boot 2.7.18
- **Language**: Java 21
- **Database**: MySQL with MyBatis Plus ORM
- **Authentication**: JWT-based authentication
- **API Pattern**: RESTful APIs with annotation-based routing

### Additional Components
- **go-gost/**: Go-based GOST proxy service
- **Database**: MySQL (schema in gost.sql)
- **Deployment**: Docker Compose configurations for v4 and v6

## Development Commands

### Frontend Development
```bash
cd vite-frontend
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production with TypeScript check
npm run lint         # Run ESLint with auto-fix
npm run preview      # Preview production build
```

### Backend Development
```bash
cd springboot-backend
mvn clean install    # Build the project
mvn spring-boot:run  # Run the application
mvn test            # Run tests
mvn package         # Create JAR package
```

### Database Setup
```bash
mysql -u root -p < gost.sql  # Initialize database schema
```

## Key API Endpoints

The backend runs on port 6365 with controllers for:
- `/api/user` - User management and authentication
- `/api/tunnel` - Tunnel configuration
- `/api/forward` - Port forwarding rules
- `/api/node` - Node management
- `/api/limit` - Speed limit controls
- `/api/flow` - Traffic statistics

## Environment Configuration

### Backend (application.yml)
- `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` - Database connection
- `JWT_SECRET` - JWT signing secret
- `LOG_DIR` - Log file directory

### Frontend
- API endpoint configuration in source code
- Vite environment variables for build configuration

## Project Structure

### Frontend Structure
- `src/pages/` - Page components (dashboard, config, tunnel, etc.)
- `src/components/` - Reusable UI components
- `src/layouts/` - Layout wrappers (admin, default, h5)
- `src/provider.tsx` - Context providers

### Backend Structure
- `controller/` - REST API endpoints
- `service/` - Business logic layer
- `mapper/` - MyBatis data access layer
- `entity/` - Database entity models
- `common/` - Shared utilities, DTOs, and configurations

## Security Notes

- JWT-based authentication with interceptors
- Role-based access control via `@RequireRole` annotation
- WebSocket support with authentication
- Captcha verification for login