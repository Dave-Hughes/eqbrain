-- Function to drop the zones table
CREATE OR REPLACE FUNCTION public.drop_zones_table()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    DROP TABLE IF EXISTS public.zones CASCADE;
END;
$$;

-- Function to create the zones table
CREATE OR REPLACE FUNCTION public.create_zones_table()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    CREATE TABLE public.zones (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name TEXT NOT NULL,
        short_name TEXT,
        level_range TEXT,
        expansion TEXT,
        description TEXT,
        zone_type TEXT,
        instance_type TEXT,
        key_required BOOLEAN DEFAULT false,
        min_level INTEGER,
        max_level INTEGER,
        safe_x FLOAT,
        safe_y FLOAT,
        safe_z FLOAT,
        safe_heading FLOAT,
        succor_x FLOAT,
        succor_y FLOAT,
        succor_z FLOAT,
        succor_heading FLOAT,
        xp_modifier FLOAT,
        can_bind BOOLEAN DEFAULT false,
        can_levitate BOOLEAN DEFAULT false,
        can_cast_outdoor BOOLEAN DEFAULT false,
        connected_zones JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );

    -- Create updated_at trigger
    CREATE OR REPLACE FUNCTION public.handle_updated_at()
    RETURNS TRIGGER AS $$
    BEGIN
        NEW.updated_at = timezone('utc'::text, now());
        RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;

    CREATE TRIGGER handle_zones_updated_at
        BEFORE UPDATE ON public.zones
        FOR EACH ROW
        EXECUTE FUNCTION public.handle_updated_at();
END;
$$; 