import { supabase } from '../lib/supabase';

async function verifyZoneData() {
    try {
        const { data, error } = await supabase
            .from('zones')
            .select('*');

        if (error) {
            throw error;
        }

        console.log('Found zones:', data);
        console.log('Total zones:', data?.length);
        
        if (data && data.length > 0) {
            console.log('\nFirst zone details:');
            console.log(JSON.stringify(data[0], null, 2));
        }
    } catch (error) {
        console.error('Error verifying zone data:', error);
    }
}

verifyZoneData(); 