import { Input } from "@/components/core/Input";
import { Controller, useFormContext } from "react-hook-form";

export const Phone = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="phone"
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Input
            type="text"
            label="Phone Number"
            placeholder="(222) 222-2222"
            required
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            ref={field.ref}
            error={fieldState.error?.message}
          />
        )
      }}
    />
  )
};