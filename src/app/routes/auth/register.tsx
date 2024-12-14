import { Form } from "../../../components/ui/form/form";

export const RegisterRoute = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Form />
      </div>
    </div>
  );
};
