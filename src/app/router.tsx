import { createBrowserRouter, RouterProvider } from "react-router";
import { Spinner } from "../components/ui/spinner/spinner";
import { paths } from "../config/paths";
import { ProtectedRoute } from "../lib/protected-route";
import { AppRoot, AppRootErrorBoundary } from "./routes/app/root";

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
            element: (
                <ProtectedRoute>
                    <AppRoot />,
                </ProtectedRoute>
            ),
            ErrorBoundary: AppRootErrorBoundary,
            HydrateFallback: Spinner,
            children: [
                {
                    path: paths.app.dashboard.path,
                    lazy: () =>
                        import("./routes/app/dashboard").then(
                            ({ DashboardRoute }) => ({
                                Component: DashboardRoute,
                            }),
                        ),
                },
                {
                    path: paths.app.rooms.path,
                    lazy: () =>
                        import("./routes/app/rooms").then(({ RoomsRoute }) => ({
                            Component: RoomsRoute,
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
