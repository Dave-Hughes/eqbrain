import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

if (!process.env.SUPABASE_URL) {
    throw new Error('Missing SUPABASE_URL environment variable')
}

if (!process.env.SUPABASE_ANON_KEY) {
    throw new Error('Missing SUPABASE_ANON_KEY environment variable')
}

// Create the Supabase client
export const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
)

// Create the zones table if it doesn't exist
export async function createZonesTable() {
    const { error } = await supabase.rpc('create_zones_table')
    if (error) {
        console.error('Error creating zones table:', error)
        return false
    }
    return true
}

// Test the connection and create table if needed
export async function testConnection() {
    try {
        // First try to select from zones
        const { data, error } = await supabase
            .from('zones')
            .select('*')
            .limit(1)
        
        if (error) {
            if (error.code === '42P01') { // Table doesn't exist
                console.log('Zones table not found, creating it...')
                const created = await createZonesTable()
                if (!created) return false
                
                // Try the select again
                const { data: newData, error: newError } = await supabase
                    .from('zones')
                    .select('*')
                    .limit(1)
                
                if (newError) throw newError
                console.log('Zones table created successfully!')
                return true
            }
            throw error
        }
        
        console.log('Supabase connection successful!')
        return true
    } catch (error) {
        console.error('Supabase connection failed:', error)
        return false
    }
} 