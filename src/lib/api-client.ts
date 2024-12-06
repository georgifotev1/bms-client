import { useNotifications } from "../components/ui/notifications/notifications-store";
import { env } from "../config/env";
import { paths } from "../config/paths";

function interceptor(
  path: string,
  init: RequestInit = {},
): [RequestInfo, RequestInit] {
  const headers = new Headers(init.headers || {});
  headers.set("Accept", "application/json");

  return [
    path,
    {
      ...init,
      headers,
      // credentials: 'include',
    },
  ];
}

async function fetchWrapper(
  path: string,
  init: RequestInit = {},
): Promise<any> {
  const [url, config] = interceptor(path, init);

  try {
    const response = await fetch(`${env.API_URL}${url}`, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const message = errorData?.message || response.statusText;

      useNotifications.getState().addNotification({
        type: "error",
        title: "Error",
        message,
      });

      if (response.status === 401) {
        const searchParams = new URLSearchParams();
        const redirectTo =
          searchParams.get("redirectTo") || window.location.pathname;
        window.location.href = paths.auth.login.getHref(redirectTo);
      }

      throw new Error(message);
    }

    return await response.json();
  } catch (error) {
    useNotifications.getState().addNotification({
      type: "error",
      title: "Error",
      message:
        error instanceof Error ? error.message : "An unknown error occured",
    });
    throw error;
  }
}

export const api = {
  get: (url: string, options: RequestInit = {}) =>
    fetchWrapper(url, { method: "GET", ...options }),
  post: (url: string, body: any, options: RequestInit = {}) =>
    fetchWrapper(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      ...options,
    }),
  put: (url: string, body: any, options: RequestInit = {}) =>
    fetchWrapper(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      ...options,
    }),
  delete: (url: string, options: RequestInit = {}) =>
    fetchWrapper(url, { method: "DELETE", ...options }),
};
