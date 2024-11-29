import { Outlet } from "react-router"
import { DashboardLayout } from "../../../components/layouts/dashboard-layout"

export const AppRoot = () => {
    return (
        <>
        <DashboardLayout>
            <Outlet/>
        </DashboardLayout>
        </>
    )
}

export const AppRootErrorBoundary = () => <div>Something went wrong!</div>