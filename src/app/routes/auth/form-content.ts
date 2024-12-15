import { FormField } from "../../../components/ui/form/form";

export const loginFields: FormField[] = [
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

export const registerFields: FormField[] = [
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
