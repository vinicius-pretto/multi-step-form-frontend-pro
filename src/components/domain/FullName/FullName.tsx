import { Input } from "@/components/core/Input";
import { capitalize } from "@/utils/capitalize";
import { ChangeEvent } from "react";

export const FullName = () => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = capitalize(event.target.value);
  }

  return (
    <Input required error="Required" type="text" label="Full Name" placeholder="John Doe" onChange={onChange} />
  )
};