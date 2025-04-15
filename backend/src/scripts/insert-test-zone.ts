import { supabase } from '../lib/supabase';

async function insertTestZone() {
    try {
        console.log('Starting zone insertion...');
        
        const zoneData = {
            name: 'Qeynos Hills',
            short_name: 'qeytoqrg',
            level_range: '1-5',
            expansion: 'Classic',
            description: 'A peaceful area outside the city of Qeynos, home to various low-level creatures and quests.',
            zone_type: 'Outdoor',
            instance_type: 'None',
            key_required: false,
            min_level: 1,
            max_level: 5,
            safe_x: -1000.0,
            safe_y: 0.0,
            safe_z: 0.0,
            safe_heading: 0.0,
            succor_x: -1000.0,
            succor_y: 0.0,
            succor_z: 0.0,
            succor_heading: 0.0,
            xp_modifier: 1.0,
            can_bind: true,
            can_levitate: true,
            can_cast_outdoor: true,
            connected_zones: {
                north: 'North Qeynos',
                south: 'South Qeynos',
                east: 'West Karana',
                west: 'Qeynos Hills'
            }
        };

        console.log('Attempting to insert zone with data:', JSON.stringify(zoneData, null, 2));

        const { data, error } = await supabase
            .from('zones')
            .insert([zoneData])
            .select();

        if (error) {
            console.error('Error details:', error);
            throw error;
        }

        console.log('Successfully inserted Qeynos Hills. Returned data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error inserting test zone:', error);
    }
}

insertTestZone(); 