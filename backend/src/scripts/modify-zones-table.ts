import { supabase } from '../lib/supabase';

async function modifyZonesTable() {
    try {
        console.log('Modifying zones table structure...');
        
        // First, drop the existing table if it exists
        const { error: dropError } = await supabase.rpc('drop_zones_table');
        if (dropError) {
            console.error('Error dropping table:', dropError);
            return;
        }

        // Create the table with all required columns
        const { error: createError } = await supabase.rpc('create_zones_table');
        if (createError) {
            console.error('Error creating table:', createError);
            return;
        }

        console.log('Table structure modified successfully');
    } catch (error) {
        console.error('Error modifying table:', error);
    }
}

modifyZonesTable(); 