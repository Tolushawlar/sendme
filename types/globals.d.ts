export {};

// Create a type for the roles
export type Roles = "superAdmin" | "admin" | "user";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
