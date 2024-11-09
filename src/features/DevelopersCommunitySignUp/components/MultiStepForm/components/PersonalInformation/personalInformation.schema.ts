import { email } from "@/components/domain/Email/Email.schema";
import { fullName } from "@/components/domain/FullName/FullName.schema";
import { phone } from "@/components/domain/Phone/Phone.schema";
import { portifolioLink } from "@/components/domain/PortifolioLink/PortifolioLink.schema";
import { z } from "zod";

export const personalInformationSchema = z.object({
  fullName,
  email,
  phone,
  portifolioLink,
});

export type PersonalInfo = z.infer<typeof personalInformationSchema>;
