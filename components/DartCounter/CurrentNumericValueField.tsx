import React from "react";

type props = {
  value: number;
  minValue?: number;
  maxValue?: number;
};

const CurrentNumericValueField = ({
  value,
  minValue = 0,
  maxValue = 180,
}: props) => {
  let adjustedNumber = value;
  if (value < minValue) adjustedNumber = minValue;
  if (value > maxValue) adjustedNumber = maxValue;
  return (
    <div className="w-[100px] text-black h-[50px] leading-[50px] text-2xl bg-gray-400 text-center">
      {adjustedNumber}
    </div>
  );
};

export default CurrentNumericValueField;
