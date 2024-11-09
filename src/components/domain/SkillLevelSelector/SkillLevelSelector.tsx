import styles from "./SkillLevelSelector.module.css";
import { skillLevels } from "./skillLevels";

export const SkillLevelSelector = () => {
  return (
    <fieldset className={styles.fieldset} aria-labelledby="skillSelectorTitle">
      <legend id="skillSelectorTitle" hidden>
        Select your skill level
      </legend>
      {skillLevels.map((skillLevel) => (
        <label className={styles.label} key={skillLevel.id}>
          <span className={styles.icon}>{skillLevel.icon}</span>
          {skillLevel.label}
          <input
            className={styles.input}
            type="radio"
            name="skillLevel"
            value={skillLevel.id}
          />
        </label>
      ))}
    </fieldset>
  );
};
