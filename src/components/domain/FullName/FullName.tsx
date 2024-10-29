import { Input } from "@/components/core/Input";
import { ChangeEvent } from "react";

const BY_BLANK_SPACE = ' ';
const FIRST_NAME_LETTER = 0;
const NAME_WITHOUT_FIRST_LETTER = 1;

const capitalize = (fullName: string) => {
  return fullName
    .split(BY_BLANK_SPACE)
    .map(name => name.charAt(FIRST_NAME_LETTER).toUpperCase() + name.slice(NAME_WITHOUT_FIRST_LETTER))
    .join(BY_BLANK_SPACE);
}

export const FullName = () => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = capitalize(event.target.value);
  }

  return (
    <Input required error="Required" type="text" label="Full Name" placeholder="John Doe" onChange={onChange} />
  )
};