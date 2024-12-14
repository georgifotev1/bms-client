import { createBrowserRouter, RouterProvider } from "react-router";
import { paths } from "../config/paths";
import { AppRoot, AppRootErrorBoundary } from "./routes/app/root";
import { Spinner } from "../components/ui/spinner/spinner";

const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      HydrateFallback: Spinner,
      lazy: () =>
        import("./routes/landing").then(({ LandinRoute }) => ({
          Component: LandinRoute,
        })),
    },
    {
      path: paths.auth.register.path,
      HydrateFallback: Spinner,
      lazy: () =>
        import("./routes/auth/register").then(({ RegisterRoute }) => ({
          Component: RegisterRoute,
        })),
    },
    {
      path: paths.auth.login.path,
      HydrateFallback: Spinner,
      lazy: () =>
        import("./routes/auth/login").then(({ LoginRoute }) => ({
          Component: LoginRoute,
        })),
    },
    {
      path: paths.app.root.path,
      element: <AppRoot />,
      ErrorBoundary: AppRootErrorBoundary,
      HydrateFallback: Spinner,
      children: [
        {
          path: paths.app.dashboard.path,
          lazy: () =>
            import("./routes/app/dashboard").then(({ DashboardRoute }) => ({
              Component: DashboardRoute,
            })),
        },
        {
          path: paths.app.hotels.path,
          lazy: () =>
            import("./routes/app/hotels").then(({ HotelsRoute }) => ({
              Component: HotelsRoute,
            })),
        },
      ],
    },
    {
      path: "*",
      lazy: async () =>
        import("./routes/not-found").then(({ NotFoundRoute }) => ({
          Component: NotFoundRoute,
        })),
    },
  ]);

export const AppRouter = () => {
  return <RouterProvider router={createAppRouter()} />;
};
