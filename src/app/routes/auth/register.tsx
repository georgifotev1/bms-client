import { Form } from "../../../components/ui/form/form";
import { AuthFooter } from "../../../components/ui/form/form-footer";
import { paths } from "../../../config/paths";
import { useRegister } from "../../../lib/auth";
import { registerFields } from "./form-content";

export const RegisterRoute = () => {
  const register = useRegister();

  return (
    <div className="w-full h-screen flex">
      <div className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Form
          title="Register to our platform"
          fields={registerFields}
          onSubmit={(data) => register.mutate(data)}
          submitButtonText="Create account"
        >
          {
            <AuthFooter
              path={paths.auth.login.path}
              text="Already have an account?"
              linkText="Sign In"
            />
          }
        </Form>
      </div>
    </div>
  );
};
