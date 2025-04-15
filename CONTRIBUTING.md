# Contributing to EQBrain

Thank you for your interest in contributing to EQBrain! This document provides guidelines and instructions for setting up and working on the project.

## Project Overview

EQBrain is a monorepo project consisting of two main components:
- Frontend: React-based web application
- Backend: Node.js/Express server with MongoDB

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)
- MongoDB (v6 or higher)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/eqbrain.git
   cd eqbrain
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install dependencies for both frontend and backend using npm workspaces.

3. **Environment Setup**
   Create the following environment files:

   For backend (`backend/.env`):
   ```
   MONGODB_URI=mongodb://localhost:27017/eqbrain
   PORT=5000
   ```

   For frontend (`frontend/.env`):
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. **Start MongoDB**
   Ensure MongoDB is running locally on the default port (27017).

## Development

### Running the Application

1. **Development Mode**
   To run both frontend and backend simultaneously:
   ```bash
   npm run dev
   ```
   This will start:
   - Frontend on http://localhost:3000
   - Backend on http://localhost:5000

2. **Running Individual Components**
   - Frontend only: `npm run start`
   - Backend only: `npm run start:backend`

### Project Structure

```
eqbrain/
├── frontend/           # React frontend application
│   ├── src/           # Source files
│   ├── public/        # Static files
│   └── package.json   # Frontend dependencies
├── backend/           # Node.js backend application
│   ├── src/          # Source files
│   └── package.json  # Backend dependencies
└── package.json      # Root package.json (monorepo config)
```

### Available Scripts

- `npm run dev`: Start both frontend and backend in development mode
- `npm run start`: Start frontend only
- `npm run start:backend`: Start backend only
- `npm run build`: Build frontend for production
- `npm run test`: Run tests for both frontend and backend

## Development Guidelines

### Code Style
- Frontend: Follow React best practices and ESLint configuration
- Backend: Follow Express.js best practices
- Use meaningful commit messages
- Keep components and functions small and focused

### Testing
- Write tests for new features
- Run tests before submitting pull requests
- Maintain good test coverage

### Git Workflow
1. Create a new branch for your feature/fix
2. Make your changes
3. Write tests if applicable
4. Run tests
5. Submit a pull request

## Troubleshooting

### Common Issues

1. **Port Conflicts**
   - If port 3000 or 5000 is in use, you can change them in the respective `.env` files

2. **MongoDB Connection**
   - Ensure MongoDB is running
   - Check the connection string in `backend/.env`

3. **Dependency Issues**
   - Try deleting `node_modules` and running `npm install` again
   - Clear npm cache: `npm cache clean --force`

## Need Help?

If you encounter any issues or have questions:
1. Check the documentation
2. Search for similar issues
3. Create a new issue with detailed information

## License

This project is licensed under the MIT License - see the LICENSE file for details. 