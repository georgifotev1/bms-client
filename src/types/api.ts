export type HotelsData = {
  hotel_id: string;
  name: string;
  address: string;
};

enum UserRoles {}

export type User = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: UserRoles;
  created_at: string;
};

export type AuthResponse = {
  user: User;
  token: string;
};
