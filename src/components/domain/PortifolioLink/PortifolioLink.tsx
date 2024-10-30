import { Input } from "@/components/core/Input";
import { Controller, useFormContext } from "react-hook-form";

export const PortifolioLink = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="profileLink"
      control={control}
      render={({ field, fieldState }) => {
        const value = field.value === undefined ? "" : field.value;

        return (
          <Input
            type="url"
            label="Portifolio/GitHub Link"
            placeholder="https://github.com/johndoe"
            name={field.name}
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={value}
            error={fieldState.error?.message}
          />
        );
      }}
    />
  );
};
