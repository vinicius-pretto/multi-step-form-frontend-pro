import { Input } from "@/components/core/Input";

export const FullName = () => {
  return (
    <Input required error="Required" type="text" label="Full Name" placeholder="John Doe" />
  )
};