export const between0and180 = (num: number): number => {
  let adjustedNumber = num;
  if (num < 0) adjustedNumber = 0;
  if (num > 180) adjustedNumber = 180;

  return adjustedNumber;
};
