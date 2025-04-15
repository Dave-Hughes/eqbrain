# EQBrain Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Problem Statement](#problem-statement)
3. [Solution](#solution)
4. [Technical Architecture](#technical-architecture)
5. [Features](#features)
6. [Development Guidelines](#development-guidelines)
7. [Contributing](#contributing)

## Project Overview
EQBrain is a comprehensive platform designed to aggregate and modernize information about the MMORPG EverQuest (EQ), particularly focusing on Time-Locked Progression (TLP) servers. The platform aims to provide a centralized, user-friendly database of game information that is currently scattered across multiple outdated websites.

The project will initially focus on:
- Aggregating game data from various sources
- Providing a modern, intuitive user interface
- Supporting TLP server variations
- Creating a foundation for future features

## Problem Statement
EverQuest, launched in 1999, has a vast amount of game information spread across multiple outdated websites. This presents several challenges:

1. **Information Fragmentation**
   - Game data is scattered across multiple sources
   - No single source of truth for game information
   - Outdated and hard-to-navigate websites

2. **TLP Server Variations**
   - Different TLP servers have unique modifications
   - No centralized way to track these variations
   - Players struggle to find server-specific information

3. **New Player Experience**
   - Overwhelming amount of information to learn
   - No clear path for progression
   - Difficulty in finding relevant information

4. **Modern UX Needs**
   - Existing resources lack modern user experience
   - Mobile accessibility is limited
   - Search and navigation are often cumbersome

## Solution
EQBrain will solve these problems through a multi-phase approach:

1. **Data Aggregation**
   - Primary Sources:
     - EverQuest Allakhazam (https://everquest.allakhazam.com/)
     - Project 1999 Wiki (https://wiki.project1999.com/)
     - PQDI (https://www.pqdi.cc/) for Quarm-specific data
   - Data Collection Strategy:
     - One-time scraping of static content
     - Rate-limited collection to respect source websites
     - Future user-submitted content integration

2. **Modern User Interface**
   - Inspired by modern gaming databases (e.g., wowhead.com)
   - Responsive design for all devices
   - Intuitive navigation and search
   - Server-specific information display

3. **Community Integration**
   - Discord OAuth for user authentication
   - User-generated content capabilities
   - Community-driven updates and guides

## Technical Architecture

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- ShadCN UI components
- Responsive design principles

### Backend
- Node.js/Express
- Supabase for database and authentication
- Redis for caching
- Discord OAuth integration

### Database (Supabase)
- PostgreSQL-based
- Real-time capabilities
- Built-in authentication
- Row-level security
- Automatic API generation

### Data Collection
- Web scraping with rate limiting
- Batch processing
- Data validation and cleaning
- Error handling and retry mechanisms

## Features
*To be filled in through discussion*

## Development Guidelines
*To be filled in through discussion*

## Contributing
*To be filled in through discussion* 