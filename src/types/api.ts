export type Hotel = {
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
    role: UserRoles;
    created_at: string;
};

export type AuthResponse = {
    user: User;
    token: string;
};

export type Room = {
    room_id: string;
    hotel_id: string;
    room_number: number;
    price_per_night: string;
    is_available: boolean;
    type: string;
};
