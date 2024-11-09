import { Input } from "@/components/core/Input";
import { capitalize } from "@/utils/capitalize";
import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const FullName = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="fullName"
      control={control}
      render={({ field, fieldState }) => {
        const value = field.value === undefined ? "" : field.value;

        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
          event.target.value = capitalize(event.target.value);
          field.onChange(event);
        };

        return (
          <Input
            {...field}
            required
            type="text"
            label="Full Name"
            placeholder="John Doe"
            name={field.name}
            onChange={onChange}
            onBlur={field.onBlur}
            value={value}
            ref={field.ref}
            error={fieldState.error?.message}
          />
        );
      }}
    />
  );
};
