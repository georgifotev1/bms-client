import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { User } from "../types/api";
import { api } from "./api-client";

export const loginInputSchema = z.object({
    email: z.string().min(1, "Required").email("Invalid email"),
    password: z.string().min(3, "Invalid Password"),
});

export const registerInputSchema = z.object({
    email: z.string().min(1, "Required").email("Invalid email"),
    first_name: z.string().min(1, "Required"),
    last_name: z.string().min(1, "Required"),
    password: z.string().min(3, "Invalid Password"),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
export type RegisterInput = z.infer<typeof registerInputSchema>;

const getUser = async (): Promise<User> => {
    return await api.get("/me");
};

const logout = (): Promise<void> => {
    return api.post("/auth/logout");
};

const login = (data: LoginInput): Promise<any> => {
    return api.post("/auth/login", data);
};

const register = (data: RegisterInput): Promise<any> => {
    return api.post("/auth/register", data);
};

export const useUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: getUser,
    });
};

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            queryClient.setQueryData(["user"], data);
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
    });
};

export const useRegister = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: register,
        onSuccess: (data) => {
            queryClient.setQueryData(["user"], data);
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.removeQueries({ queryKey: ["user"] });
        },
    });
};
