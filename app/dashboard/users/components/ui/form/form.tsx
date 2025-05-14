import * as React from "react";
import { useForm, UseFormReturn, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/app/users/lib/utils";

interface FormProps<
  TSchema extends z.ZodType<any, any, any> = z.ZodType<any, any, any>,
> extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  form: UseFormReturn<z.infer<TSchema>>;
  onSubmit: (values: z.infer<TSchema>) => void;
}

const Form = <TSchema extends z.ZodType<any, any, any>>({
  children,
  form,
  onSubmit,
  className,
  ...props
}: FormProps<TSchema>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-6", className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export { Form };
