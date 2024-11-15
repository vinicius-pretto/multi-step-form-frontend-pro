import { Controller, useFormContext } from "react-hook-form";
import styles from "./ChallengePreferenceSelector.module.css";
import challenges from "./challenges.json";

export const ChallengePreferenceSelector = () => {
  const { control } = useFormContext();

  return (
    <>
      <fieldset
        className={styles.fieldset}
        aria-labelledby="challengePreferenceTitle"
      >
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
                  <label className={styles.label}>
                    <input
                      type="checkbox"
                      className={styles.input}
                      name={field.name}
                      onBlur={field.onBlur}
                      onChange={field.onChange}
                      defaultChecked={field.value === true}
                    />
                    {challenge.name}
                  </label>
                );
              }}
            />
          );
        })}
      </fieldset>
    </>
  );
};
