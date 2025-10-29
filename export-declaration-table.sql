-- Create export_declarations table
CREATE TABLE export_declarations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Location and shipping
    location TEXT NOT NULL,
    shipping_option TEXT NOT NULL,
    
    -- Sender details
    sender_first_name TEXT NOT NULL,
    sender_middle_name TEXT,
    sender_last_name TEXT NOT NULL,
    sender_address TEXT NOT NULL,
    sender_phone TEXT NOT NULL,
    sender_email TEXT NOT NULL,
    sender_id_file TEXT, -- file path/url
    
    -- Receiver details
    receiver_first_name TEXT NOT NULL,
    receiver_middle_name TEXT,
    receiver_last_name TEXT NOT NULL,
    receiver_phone TEXT NOT NULL,
    receiver_email TEXT NOT NULL,
    receiver_address_line1 TEXT NOT NULL,
    receiver_address_line2 TEXT,
    receiver_city TEXT NOT NULL,
    receiver_state TEXT NOT NULL,
    receiver_postal_code TEXT NOT NULL,
    receiver_country TEXT NOT NULL,
    
    -- Products and declarations
    products_list TEXT NOT NULL,
    wants_insurance BOOLEAN NOT NULL DEFAULT false,
    
    -- Confirmations
    confirmed_shipper BOOLEAN NOT NULL DEFAULT false,
    confirmed_legal BOOLEAN NOT NULL DEFAULT false,
    confirmed_false_info BOOLEAN NOT NULL DEFAULT false,
    confirmed_valid_id BOOLEAN NOT NULL DEFAULT false,
    confirmed_duty_charges BOOLEAN NOT NULL DEFAULT false,
    
    status TEXT DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE export_declarations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON export_declarations FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON export_declarations FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON export_declarations FOR UPDATE USING (true);