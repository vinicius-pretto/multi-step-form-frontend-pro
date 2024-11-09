import { Compass } from "@/components/icons/Compass";
import { Plant } from "@/components/icons/Plant";
import { RocketLaunch } from "@/components/icons/RocketLaunch";
import { Trophy } from "@/components/icons/Trophy";

export const skillLevels = [
  {
    id: "beginner",
    label: "Beginner",
    icon: <Plant />,
  },
  {
    id: "intermediate",
    label: "Intermediate",
    icon: <Compass />,
  },
  {
    id: "advanced",
    label: "Advanced",
    icon: <RocketLaunch />,
  },
  {
    id: "expert",
    label: "Expert",
    icon: <Trophy />,
  },
];
