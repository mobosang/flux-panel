# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a flux-panel project consisting of:
- **Go-GOST backend**: A Go-based GOST (GO Simple Tunnel) implementation for network traffic forwarding
- **Vite React frontend**: A modern React frontend built with Vite, HeroUI components, and TypeScript
- **Docker deployment**: Multi-container setup with MySQL database, Spring Boot backend, and Vite frontend

## Architecture

### Frontend (vite-frontend/)
- **Tech Stack**: React 18, TypeScript, Vite, HeroUI, TailwindCSS, React Router DOM
- **Build System**: Vite with legacy browser support
- **Main Entry**: `src/main.tsx` renders the app with HashRouter
- **Layout System**: Multiple layouts (admin, default, h5, h5-simple) in `src/layouts/`
- **Page Components**: Located in `src/pages/` (dashboard, config, forward, tunnel, etc.)
- **API Layer**: Located in `src/api/` with network utilities
- **Authentication**: JWT-based auth utilities in `src/utils/`
- **Styling**: TailwindCSS with custom theme provider

### Backend (go-gost/)
- **Language**: Go with GOST core framework
- **Configuration**: JSON-based config loading with WebSocket reporting
- **API**: RESTful API with Swagger documentation (`x/api/swagger.yaml`)
- **Features**: Proxy chains, connectors, authentication, bypass, rate limiting
- **Service Architecture**: Modular design with separate packages for different concerns

### Infrastructure
- **Database**: MySQL 5.7 with initialized schema (`gost.sql`)
- **Containers**: Multi-service Docker Compose setup
- **Network**: Custom bridge network with subnet configuration

## Development Commands

### Frontend Development
```bash
cd vite-frontend
npm run dev          # Start development server on port 3000
npm run build        # Build for production (runs TypeScript check + Vite build + toFile.mjs)
npm run lint         # Run ESLint with auto-fix
npm run preview      # Preview production build
```

### Go Backend Development
```bash
cd go-gost
go build -ldflags="-s -w" -o gost    # Build optimized binary
./gost -C config.json                # Run with config file
```

### Docker Deployment
```bash
# IPv4 setup
docker-compose -f docker-compose-v4.yml up -d

# IPv6 setup  
docker-compose -f docker-compose-v6.yml up -d
```

## Key Configuration Files

- `vite-frontend/vite.config.ts`: Vite build configuration with legacy support
- `vite-frontend/package.json`: Frontend dependencies and scripts
- `go-gost/config.json`: GOST service configuration (referenced in main.go)
- `docker-compose-*.yml`: Container orchestration with environment variables
- `gost.sql`: Database initialization schema

## Important Notes

- Frontend uses HashRouter for routing compatibility
- Build process includes TypeScript compilation and custom `toFile.mjs` script
- Go backend expects `config.json` in current directory for WebSocket reporting
- Docker setup includes health checks for service dependencies
- Project includes both IPv4 and IPv6 deployment configurations