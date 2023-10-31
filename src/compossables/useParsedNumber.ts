export default function useParsedNumber(value: number) {
  const arrValue = String(value).split("");

  if (String(value).length === 4) {
    arrValue.splice(1, 0, " ");
  } else if (String(value).length > 4) {
    arrValue.splice(2, 0, " ");
  }
  return {
    parsed: arrValue.join(""),
  };
}
