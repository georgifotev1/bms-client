import { Form } from "../../../components/ui/form/form";
import { AuthFooter } from "../../../components/ui/form/form-footer";
import { paths } from "../../../config/paths";
import { useLogin } from "../../../lib/auth";
import { loginFields } from "./form-content";

export const LoginRoute = () => {
  const login = useLogin();
  return (
    <div className="w-full h-screen flex">
      <div className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Form
          title="Sign in to our platform"
          fields={loginFields}
          onSubmit={(data) => login.mutate(data)}
          submitButtonText="Login to your account"
        >
          {
            <AuthFooter
              path={paths.auth.register.path}
              text="Not recgistered?"
              linkText="Create account"
            />
          }
        </Form>
      </div>
    </div>
  );
};
