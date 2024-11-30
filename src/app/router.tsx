import { createBrowserRouter, RouterProvider } from "react-router";
import { paths } from "../config/paths";
import { AppRoot, AppRootErrorBoundary } from "./routes/app/root";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.app.root.path,
      element: <AppRoot />,
      ErrorBoundary: AppRootErrorBoundary,
      HydrateFallback: AppRoot,
      children: [
        {
          path: paths.app.dashboard.path,
          lazy: async () => {
            const { DashboardRoute } = await import("./routes/app/dashboard");
            return {
              Component: DashboardRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
      ],
    },
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return {
          Component: NotFoundRoute,
        };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  return <RouterProvider router={createAppRouter()} />;
};
