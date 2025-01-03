import { User } from "lucide-react";
import { Navigate } from "react-router";
import { Dropdown } from "../../../../components/ui/dropdown/dropdown";
import { paths } from "../../../../config/paths";
import { useLogout } from "../../../../lib/auth";

export const ProfileButton = () => {
    const logout = useLogout();

    if (logout.isSuccess) {
        return <Navigate to={paths.auth.login.getHref()} />;
    }

    return (
        <Dropdown
            items={[
                {
                    label: "Profile",
                    href: "/",
                },
                {
                    label: "Sign Out",
                    onClick: () => logout.mutate(),
                },
            ]}
        >
            <User />
        </Dropdown>
    );
};
