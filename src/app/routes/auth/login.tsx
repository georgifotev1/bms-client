import { Link } from "react-router";
import { Form, FormField } from "../../../components/ui/form/form";
import { paths } from "../../../config/paths";

export const LoginRoute = () => {
  const loginFields: FormField[] = [
    {
      type: "email",
      name: "email",
      id: "email",
      label: "Your email",
      placeholder: "name@company.com",
      required: true,
    },
    {
      type: "password",
      name: "password",
      id: "password",
      label: "Your password",
      placeholder: "••••••••",
      required: true,
    },
  ];

  const handleSubmit = (data: any) => {
    console.log("Form data:", data);
    // Handle login logic
  };

  const FormFooter = (
    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered?{" "}
      <Link
        to={paths.auth.register.path}
        className="text-blue-700 hover:underline dark:text-blue-500"
      >
        Create account
      </Link>
    </div>
  );

  return (
    <div className="w-full h-screen flex">
      <div className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Form
          title="Sign in to our platform"
          fields={loginFields}
          onSubmit={handleSubmit}
          submitButtonText="Login to your account"
        >
          {FormFooter}
        </Form>
      </div>
    </div>
  );
};
