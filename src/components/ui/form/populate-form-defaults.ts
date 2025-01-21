import { FormField } from "./form";

export const populateFormDefaults = <T extends Record<string, any>>(
    data: T,
    fields: FormField[],
): FormField[] => {
    return fields.map((field) => ({
        ...field,
        defaultValue: data[field.name as keyof T],
    }));
};
