import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { AuthResponse, User } from "../types/api";
import { api } from "./api-client";

export const loginInputSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(5, "Required"),
});

export const registerInputSchema = z.object({
  email: z.string().min(1, "Required"),
  first_name: z.string().min(1, "Required"),
  last_name: z.string().min(1, "Required"),
  password: z.string().min(5, "Required"),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
export type RegisterInput = z.infer<typeof registerInputSchema>;

const getUser = async (): Promise<User> => {
  return await api.get("/auth/me");
};

const logout = (): Promise<void> => {
  return api.post("/auth/logout");
};

const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post("/auth/login", data);
};

const registerWithEmailAndPassword = (
  data: RegisterInput,
): Promise<AuthResponse> => {
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
    mutationFn: loginWithEmailAndPassword,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerWithEmailAndPassword,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      queryClient.invalidateQueries();
    },
  });
};
