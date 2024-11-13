import { FormErrorMessage } from "@/components/core/FormErrorMessage";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./SkillLevelSelector.module.css";
import { skillLevels } from "./skillLevels";

export type SkillLevelSelectorProps = {
  error: boolean;
};

export const SkillLevelSelector = ({ error }: SkillLevelSelectorProps) => {
  const { control } = useFormContext();

  return (
    <>
      <fieldset
        className={styles.fieldset}
        aria-labelledby="skillSelectorTitle"
        data-error={error}
      >
        <legend id="skillSelectorTitle" hidden>
          Select your skill level
        </legend>
        {skillLevels.map((skillLevel) => (
          <Controller
            key={skillLevel.id}
            name="skillLevel"
            control={control}
            render={({ field }) => {
              return (
                <label className={styles.label} key={skillLevel.id}>
                  <span className={styles.icon}>{skillLevel.icon}</span>
                  {skillLevel.label}
                  <input
                    className={styles.input}
                    type="radio"
                    name={field.name}
                    value={skillLevel.id}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    ref={field.ref}
                    checked={field.value === skillLevel.id}
                  />
                </label>
              );
            }}
          />
        ))}
      </fieldset>
      <FormErrorMessage error={error}>
        Please select one of the options above.
      </FormErrorMessage>
    </>
  );
};
