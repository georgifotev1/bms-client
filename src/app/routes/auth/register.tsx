import { Check } from "lucide-react";
import { Form } from "../../../components/ui/form/form";
import { AuthFooter } from "../../../components/ui/form/form-footer";
import { Link } from "../../../components/ui/link/link";
import { paths } from "../../../config/paths";
import { registerInputSchema, useRegister } from "../../../lib/auth";
import { registerFields } from "./form-content";

export const RegisterRoute = () => {
  const register = useRegister();

  let err = "";

  if (register.isError) {
    err = register.error.message;
  }

  return (
    <div className="w-full h-screen flex">
      <div className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {register.isSuccess ? (
          <div className="flex flex-col items-center gap-3">
            <Check
              size={48}
              color="green"
              className="border-4 border-green-500 rounded-full"
            />
            <h2 className="text-center text-lg font-bold">
              Your submission was successful and your profile will be reviewed
              shortly
            </h2>
            <Link
              to={paths.auth.login.path}
              className="text-lg text-blue-700 hover:underline dark:text-blue-500"
            >
              Log In
            </Link>
          </div>
        ) : (
          <Form
            title="Register to our platform"
            fields={registerFields}
            schema={registerInputSchema}
            onFormSubmit={(data) => register.mutate(data)}
            isLoading={register.isPending}
            apiError={err}
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
        )}
      </div>
    </div>
  );
};
