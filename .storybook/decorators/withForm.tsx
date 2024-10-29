import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../src/components/core/Button";

export type WithFormProps = {
  schema: z.Schema<any>;
  defaultValues?: Record<string, any>;
}

export const withForm = ({ schema }: WithFormProps) => {
  return (Story: React.FunctionComponent) => {
    const formMethods = useForm({
      mode: 'onChange',
      shouldFocusError: true,
      resolver: zodResolver(schema),
    });

    const onSubmit = (values: unknown) => {
      console.log(values);
    }

    return (
      <FormProvider {...formMethods}>
        <form noValidate onSubmit={formMethods.handleSubmit(onSubmit)}>
          <Story />
          <Button
            type="submit"
            style={{
              display: 'block',
              marginInlineStart: 'auto',
              marginBlockStart: '2rem'
            }}
          >
            Submit
          </Button>
        </form>
      </FormProvider>
    );
  }
}