const BY_BLANK_SPACE = " ";
const FIRST_LETTER = 0;
const WORD_WITHOUT_FIRST_LETTER = 1;

export const capitalize = (text: string) => {
  return text
    .split(BY_BLANK_SPACE)
    .map(
      (word) =>
        word.charAt(FIRST_LETTER).toUpperCase() +
        word.slice(WORD_WITHOUT_FIRST_LETTER)
    )
    .join(BY_BLANK_SPACE);
};
