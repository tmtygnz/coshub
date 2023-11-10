export const stringIsNullOrWhitespace = (string: string) => {
  return string === null || string.match(/^ *$/) !== null;
};
