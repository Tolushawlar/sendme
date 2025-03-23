export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      deliveryapplications: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          sendername: string;
          senderphonenumber: string;
          receivername: string;
          receiverphonenumber: string;
          receiveremail: string;
          receiveraddress: string;
          receivercity: string;
          receiverpostal_code: string;
          packageweight: number;
          numberofboxes: number;
          declaredvalue: number;
          deliverydate: string;
          acceptshippingpolicy: boolean;
          status: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          sendername: string;
          senderphonenumber: string;
          receivername: string;
          receiverphonenumber: string;
          receiveremail: string;
          receiveraddress: string;
          receivercity: string;
          receiverpostal_code: string;
          packageweight: number;
          numberofboxes: number;
          declaredvalue: number;
          deliverydate: string;
          acceptshippingpolicy: boolean;
          status?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          sendername?: string;
          senderphonenumber?: string;
          receivername?: string;
          receiverphonenumber?: string;
          receiveremail?: string;
          receiveraddress?: string;
          receivercity?: string;
          receiverpostalcode?: string;
          packageweight?: number;
          numberofboxes?: number;
          declaredvalue?: number;
          deliverydate?: string;
          acceptshippingpolicy?: boolean;
          status?: string;
        };
        Relationships: [
          {
            foreignKeyName: "deliveryApplications_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      loanApplications: {
        Row: {
          businessName: string | null;
          businessNature: string | null;
          bvn: string;
          clerkId: string;
          createdAt: string;
          dob: string;
          emailAddress: string;
          employer: string | null;
          employmentStatus: Database["public"]["Enums"]["employment_status"];
          firstName: string;
          gender: Database["public"]["Enums"]["gender_enum"];
          id: string;
          idCardType: string;
          lastName: string;
          lga: string;
          loanAmount: number;
          loanType: Database["public"]["Enums"]["loan_type"];
          maidenName: string | null;
          maritalStatus: Database["public"]["Enums"]["marital_status"];
          nationality: string;
          nextOfKin: Json;
          nin: string;
          occupation: string | null;
          otherNames: string | null;
          phoneNo: string | null;
          residentialAddress: string;
          stateOfOrigin: string;
        };
        Insert: {
          businessName?: string | null;
          businessNature?: string | null;
          bvn: string;
          clerkId?: string;
          createdAt?: string;
          dob: string;
          emailAddress?: string;
          employer?: string | null;
          employmentStatus: Database["public"]["Enums"]["employment_status"];
          firstName?: string;
          gender: Database["public"]["Enums"]["gender_enum"];
          id?: string;
          idCardType?: string;
          lastName?: string;
          lga?: string;
          loanAmount: number;
          loanType: Database["public"]["Enums"]["loan_type"];
          maidenName?: string | null;
          maritalStatus: Database["public"]["Enums"]["marital_status"];
          nationality?: string;
          nextOfKin: Json;
          nin: string;
          occupation?: string | null;
          otherNames?: string | null;
          phoneNo?: string | null;
          residentialAddress?: string;
          stateOfOrigin?: string;
        };
        Update: {
          businessName?: string | null;
          businessNature?: string | null;
          bvn?: string;
          clerkId?: string;
          createdAt?: string;
          dob?: string;
          emailAddress?: string;
          employer?: string | null;
          employmentStatus?: Database["public"]["Enums"]["employment_status"];
          firstName?: string;
          gender?: Database["public"]["Enums"]["gender_enum"];
          id?: string;
          idCardType?: string;
          lastName?: string;
          lga?: string;
          loanAmount?: number;
          loanType?: Database["public"]["Enums"]["loan_type"];
          maidenName?: string | null;
          maritalStatus?: Database["public"]["Enums"]["marital_status"];
          nationality?: string;
          nextOfKin?: Json;
          nin?: string;
          occupation?: string | null;
          otherNames?: string | null;
          phoneNo?: string | null;
          residentialAddress?: string;
          stateOfOrigin?: string;
        };
        Relationships: [];
      };
      complaint: {
        Row: {
          id: string;
          email: string;
          complaint: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          complaint: string;
          created_at?: string;
        };
        Update: {
          email?: string;
          complaint?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      employment_status:
        | "employed"
        | "unemployed"
        | "self_employed"
        | "retired"
        | "student"
        | "other";
      gender_enum: "male" | "female";
      loan_type: "normal" | "study" | "travel";
      marital_status: "single" | "married" | "divorced" | "widowed" | "other";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export type LoanApplicationType =
  Database["public"]["Tables"]["loanApplications"]["Row"];
export type ComplaintFormType =
  Database["public"]["Tables"]["complaint"]["Row"];
export type DeliveryApplicationType =
  Database["public"]["Tables"]["deliveryapplications"]["Row"];
