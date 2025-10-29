-- Create enums first
CREATE TYPE employment_status AS ENUM ('employed', 'unemployed', 'self_employed', 'retired', 'student', 'other');
CREATE TYPE gender_enum AS ENUM ('male', 'female');
CREATE TYPE loan_type AS ENUM ('normal', 'study', 'travel');
CREATE TYPE marital_status AS ENUM ('single', 'married', 'divorced', 'widowed', 'other');

-- Create deliveryapplications table
CREATE TABLE deliveryapplications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id TEXT NOT NULL,
    sendername TEXT NOT NULL,
    senderphonenumber TEXT NOT NULL,
    receivername TEXT NOT NULL,
    receiverphonenumber TEXT NOT NULL,
    receiveremail TEXT NOT NULL,
    receiveraddress TEXT NOT NULL,
    receivercity TEXT NOT NULL,
    receiverpostal_code TEXT NOT NULL,
    packageweight NUMERIC NOT NULL,
    numberofboxes INTEGER NOT NULL,
    declaredvalue NUMERIC NOT NULL,
    deliverydate TEXT NOT NULL,
    acceptshippingpolicy BOOLEAN NOT NULL,
    status TEXT DEFAULT 'pending'
);

-- Create loanApplications table
CREATE TABLE "loanApplications" (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    "clerkId" TEXT DEFAULT '',
    "firstName" TEXT DEFAULT '',
    "lastName" TEXT DEFAULT '',
    "otherNames" TEXT,
    "emailAddress" TEXT DEFAULT '',
    "phoneNo" TEXT,
    dob TEXT NOT NULL,
    gender gender_enum NOT NULL,
    "maritalStatus" marital_status NOT NULL,
    "maidenName" TEXT,
    nationality TEXT DEFAULT '',
    "stateOfOrigin" TEXT DEFAULT '',
    lga TEXT DEFAULT '',
    "residentialAddress" TEXT NOT NULL,
    "employmentStatus" employment_status NOT NULL,
    employer TEXT,
    occupation TEXT,
    "businessName" TEXT,
    "businessNature" TEXT,
    "idCardType" TEXT DEFAULT '',
    nin TEXT NOT NULL,
    bvn TEXT NOT NULL,
    "loanType" loan_type NOT NULL,
    "loanAmount" NUMERIC NOT NULL,
    "nextOfKin" JSONB NOT NULL
);

-- Create complaint table
CREATE TABLE complaint (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email TEXT NOT NULL,
    complaint TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE deliveryapplications ENABLE ROW LEVEL SECURITY;
ALTER TABLE "loanApplications" ENABLE ROW LEVEL SECURITY;
ALTER TABLE complaint ENABLE ROW LEVEL SECURITY;

-- Create policies (adjust as needed for your security requirements)
CREATE POLICY "Enable read access for all users" ON deliveryapplications FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON deliveryapplications FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for users based on user_id" ON deliveryapplications FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON "loanApplications" FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON "loanApplications" FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for users based on clerkId" ON "loanApplications" FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON complaint FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON complaint FOR INSERT WITH CHECK (true);