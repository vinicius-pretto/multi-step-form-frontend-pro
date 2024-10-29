import { Input } from "@/components/core/Input";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const Phone = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="phone"
      control={control}
      render={({ field, fieldState }) => {
        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
          event.target.value = formatPhoneNumber(event.target.value);
          field.onChange(event);
        };

        return (
          <Input
            type="text"
            label="Phone Number"
            placeholder="(222) 222-2222"
            required
            name={field.name}
            value={field.value}
            onChange={onChange}
            onBlur={field.onBlur}
            ref={field.ref}
            error={fieldState.error?.message}
            maxLength={14}
          />
        );
      }}
    />
  );
};
