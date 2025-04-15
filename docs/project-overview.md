# EQBrain - Comprehensive Project Overview

## Project Vision
EQBrain is a modern, centralized platform for EverQuest (EQ) game information, specifically focusing on Time-Locked Progression (TLP) servers. The platform aims to aggregate and modernize information that is currently scattered across multiple outdated websites, providing a superior user experience for both new and veteran players.

## Core Features

### 1. Data Aggregation
- **Primary Sources**:
  - EverQuest Allakhazam (https://everquest.allakhazam.com/)
  - Project 1999 Wiki (https://wiki.project1999.com/)
  - PQDI (https://www.pqdi.cc/) for Quarm-specific data
- **Data Collection Method**:
  - Web scraping using Playwright
  - Rate-limited collection to respect source websites
  - One-time scraping of static content
  - Future user-submitted content integration

### 2. Modern User Interface
- Inspired by modern gaming databases (e.g., wowhead.com)
- Responsive design for all devices
- Intuitive navigation and search
- Server-specific information display
- User-friendly content presentation

### 3. TLP Server Support
- Support for multiple TLP servers
- Server-specific variations tracking
- Custom rules and modifications per server
- Expansion-specific content filtering

### 4. Community Features
- Discord OAuth integration
- User-generated content
- Community guides and updates
- User comments and discussions

### 5. Admin Interface
- Content management system
- Entity editing capabilities
- User management
- Data source monitoring
- Content moderation tools

## Technical Architecture

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- ShadCN UI components
- Responsive design principles
- Modern, intuitive user interface

### Backend
- Node.js/Express
- Supabase for database and authentication
- Redis for caching
- Discord OAuth integration
- Admin interface for content management

### Database (Supabase)
- PostgreSQL-based
- Real-time capabilities
- Built-in authentication
- Row-level security
- Automatic API generation

### Data Collection
- Web scraping with Playwright
- Rate limiting implementation
- Batch processing
- Data validation and cleaning
- Error handling and retry mechanisms

## Data Models
See [Data Models Documentation](data-models.md) for detailed database schema.

## Development Phases

### Phase 1: Foundation
- Project setup
- Database schema implementation
- Basic frontend structure
- Authentication system
- Admin interface foundation

### Phase 2: Data Collection
- Web scraping implementation
- Data validation and cleaning
- Database population
- Source tracking system

### Phase 3: Core Features
- User interface implementation
- Search functionality
- Entity relationship visualization
- Server variation support

### Phase 4: Community Features
- User authentication
- Content submission system
- Comment system
- Community guides

### Phase 5: Advanced Features
- Character tracking
- Item recommendations
- Quest progression tracking
- Trading system

## Future Considerations
- Mobile application
- Real-time updates
- Advanced search features
- API for third-party integration
- Additional game support

## Technical Requirements
- Modern web browser support
- Mobile responsiveness
- Fast loading times
- SEO optimization
- Accessibility compliance

## Security Considerations
- Rate limiting for scraping
- User data protection
- Content moderation
- API security
- Database security

## Performance Goals
- Fast page load times
- Efficient database queries
- Optimized image loading
- Responsive UI
- Scalable architecture

## Maintenance Plan
- Regular data updates
- Bug tracking and fixing
- Performance monitoring
- User feedback integration
- Security updates

## Success Metrics
- User engagement
- Content accuracy
- Page load times
- User satisfaction
- Community growth 