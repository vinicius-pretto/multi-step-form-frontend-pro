import { Input } from "@/components/core/Input";
import { Controller, useFormContext } from "react-hook-form";

export const Email = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="email"
      control={control}
      render={({ field, fieldState }) => {
        const value = field.value === undefined ? "" : field.value;

        return (
          <Input
            type="email"
            placeholder="john.doe@domain.com"
            label="Email Address"
            name={field.name}
            value={value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            required
            ref={field.ref}
            error={fieldState.error?.message}
          />
        );
      }}
    />
  );
};
