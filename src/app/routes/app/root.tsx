import { Outlet } from "react-router";
import { AppLayout } from "../../../components/layouts/app-layout";

export const AppRoot = () => {
  return (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </>
  );
};

export const AppRootErrorBoundary = () => <div>Something went wrong!</div>;
