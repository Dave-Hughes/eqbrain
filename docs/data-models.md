# Data Models

## Overview
This document outlines the database schema for EQBrain. The schema is designed to store game data from multiple sources while maintaining relationships between different game entities.

## Core Entities

### Zone
```sql
CREATE TABLE zones (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    expansion VARCHAR(100),
    level_range VARCHAR(50),
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Beastiary (NPCs)
```sql
CREATE TABLE npcs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    level INTEGER,
    type VARCHAR(100), -- 'normal', 'named', 'boss', etc
    faction VARCHAR(100),
    stats JSONB,
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Junction table for NPC-Zone relationships
CREATE TABLE npc_zones (
    npc_id INTEGER REFERENCES npcs(id),
    zone_id INTEGER REFERENCES zones(id),
    spawn_location VARCHAR(255),
    spawn_conditions TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (npc_id, zone_id)
);

-- Junction table for NPC-Item relationships (drops)
CREATE TABLE npc_drops (
    npc_id INTEGER REFERENCES npcs(id),
    item_id INTEGER REFERENCES items(id),
    drop_rate DECIMAL(5,2),
    drop_conditions TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (npc_id, item_id)
);

-- Junction table for NPC-Quest relationships
CREATE TABLE npc_quests (
    npc_id INTEGER REFERENCES npcs(id),
    quest_id INTEGER REFERENCES quests(id),
    interaction_type VARCHAR(50), -- 'starts', 'progresses', 'completes'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (npc_id, quest_id)
);
```

### Item
```sql
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100),
    slot VARCHAR(100),
    stats JSONB,
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Spell
```sql
CREATE TABLE spells (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    class VARCHAR(100),
    level INTEGER,
    description TEXT,
    effects JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### Quest
```sql
CREATE TABLE quests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    zone_id INTEGER REFERENCES zones(id),
    level INTEGER,
    description TEXT,
    rewards JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## TLP Server Variations

### Server
```sql
CREATE TABLE servers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(100),
    expansion VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### ServerVariation
```sql
CREATE TABLE server_variations (
    id SERIAL PRIMARY KEY,
    server_id INTEGER REFERENCES servers(id),
    entity_type VARCHAR(50), -- 'zone', 'item', 'spell', 'quest', 'npc'
    entity_id INTEGER, -- References the respective entity table
    variation_data JSONB, -- Stores server-specific modifications
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## User-Generated Content

### User
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    discord_id VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) NOT NULL,
    avatar_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### UserContent
```sql
CREATE TABLE user_content (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    entity_type VARCHAR(50), -- 'zone', 'item', 'spell', 'quest', 'npc'
    entity_id INTEGER, -- References the respective entity table
    content_type VARCHAR(50), -- 'guide', 'comment', 'update'
    content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Data Sources

### Source
```sql
CREATE TABLE sources (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255),
    last_scraped TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### EntitySource
```sql
CREATE TABLE entity_sources (
    id SERIAL PRIMARY KEY,
    source_id INTEGER REFERENCES sources(id),
    entity_type VARCHAR(50),
    entity_id INTEGER,
    source_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Notes
- All tables include `created_at` and `updated_at` timestamps for tracking changes
- JSONB fields are used for flexible data storage where the structure might vary
- Foreign key constraints ensure data integrity
- Indexes will be added for frequently queried fields
- Junction tables (npc_zones, npc_drops, npc_quests) handle many-to-many relationships 