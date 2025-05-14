import * as React from "react";
import {
  Controller,
  useFormContext,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  FieldValues,
  FieldPath,
  Path,
  PathValue,
  RegisterOptions,
} from "react-hook-form";
import { cn } from "../../../lib/utils";

interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  defaultValue?: PathValue<TFieldValues, TName>;
  shouldUnregister?: boolean;
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
  }) => React.ReactElement;
  className?: string;
}

const FormFieldContext = React.createContext<{ name: string }>({ name: "" });

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({ name, render, className, ...props }: FormFieldProps<TFieldValues, TName>) {
  return (
    <FormFieldContext.Provider value={{ name: name.toString() }}>
      <Controller<TFieldValues, TName>
        name={name}
        render={({ field, fieldState, formState }) => (
          <div className={cn("space-y-2", className)}>
            {render({ field, fieldState, formState })}
          </div>
        )}
        {...props}
      />
    </FormFieldContext.Provider>
  );
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  return {
    name: fieldContext.name,
    ...fieldState,
  };
};

export { FormField, useFormField };
