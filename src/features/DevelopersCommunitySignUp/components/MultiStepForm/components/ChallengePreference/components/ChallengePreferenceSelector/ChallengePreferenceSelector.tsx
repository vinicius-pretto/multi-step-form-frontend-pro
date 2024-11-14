import { Controller, useFormContext } from "react-hook-form";
import challenges from "./challenges.json";

export const ChallengePreferenceSelector = () => {
  const { control } = useFormContext();

  return (
    <fieldset aria-labelledby="challengePreferenceTitle">
      <legend id="challengePreferenceTitle" hidden>
        Choose your challenge preference
      </legend>
      {challenges.map((challenge) => {
        return (
          <Controller
            key={challenge.id}
            name={challenge.id}
            control={control}
            render={({ field }) => {
              return (
                <label>
                  {challenge.name}
                  <input
                    type="checkbox"
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    defaultChecked={field.value === true}
                  />
                </label>
              );
            }}
          />
        );
      })}
    </fieldset>
  );
};
