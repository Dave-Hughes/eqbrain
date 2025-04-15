# Database Schema Documentation

## Overview

Our database is built on Supabase (PostgreSQL) and uses Row Level Security (RLS) for access control. This document describes the current database schema and its components.

## Tables

### Zones

The `zones` table stores comprehensive information about EverQuest zones.

#### Columns

| Column Name | Type | Description |
|------------|------|-------------|
| id | UUID | Primary key, auto-generated |
| name | TEXT | Zone name (required) |
| short_name | TEXT | Short name/abbreviation |
| level_range | TEXT | Level range (e.g., "1-10") |
| expansion | TEXT | Expansion the zone belongs to |
| description | TEXT | Zone description |
| zone_type | TEXT | Type of zone (Outdoor, Indoor, City, etc.) |
| instance_type | TEXT | Instance type (None, Shared, Solo) |
| key_required | BOOLEAN | Whether a key is required to enter |
| min_level | INTEGER | Minimum level requirement |
| max_level | INTEGER | Maximum level for the zone |
| safe_x | FLOAT | Safe spot X coordinate |
| safe_y | FLOAT | Safe spot Y coordinate |
| safe_z | FLOAT | Safe spot Z coordinate |
| safe_heading | FLOAT | Safe spot heading |
| succor_x | FLOAT | Succor X coordinate |
| succor_y | FLOAT | Succor Y coordinate |
| succor_z | FLOAT | Succor Z coordinate |
| succor_heading | FLOAT | Succor heading |
| xp_modifier | FLOAT | Experience point modifier |
| can_bind | BOOLEAN | Whether players can bind in the zone |
| can_levitate | BOOLEAN | Whether levitation works |
| can_cast_outdoor | BOOLEAN | Whether outdoor spells work |
| connected_zones | JSONB | Array of connected zones |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

#### Security

The table is protected by Row Level Security (RLS) policies:
- Read access is granted to all users
- Write access (insert/update/delete) is restricted to authenticated users

## Migrations

Database changes are managed through SQL migrations in the `supabase/migrations` directory. Each migration file is prefixed with a timestamp to ensure proper ordering.

## Best Practices

1. Always use migrations for schema changes
2. Include appropriate RLS policies for new tables
3. Document any new columns or tables
4. Test migrations before applying to production 