import { Form, FormField } from "../../../components/ui/form/form";
import { Link } from "../../../components/ui/link/link";
import { paths } from "../../../config/paths";

export const RegisterRoute = () => {
  const registerFields: FormField[] = [
    {
      type: "text",
      name: "first_name",
      id: "first_name",
      label: "First Name",
      placeholder: "John",
      required: true,
    },
    {
      type: "text",
      name: "last_name",
      id: "last_name",
      label: "Last Name",
      placeholder: "Doe",
      required: true,
    },
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
      Already have an account?{" "}
      <Link
        to={paths.auth.login.path}
        className="text-blue-700 hover:underline dark:text-blue-500"
      >
        Sign In
      </Link>
    </div>
  );
  return (
    <div className="w-full h-screen flex">
      <div className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Form
          title="Register to our platform"
          fields={registerFields}
          onSubmit={handleSubmit}
          submitButtonText="Create account"
        >
          {FormFooter}
        </Form>
      </div>
    </div>
  );
};
