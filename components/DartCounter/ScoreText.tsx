import React from "react";

type props = {
  value: number;
  size: number;
};
const ScoreText = ({ value, size }: props) => {
  return (
    <span className={`text-${size}xl inline-block h-[60px]`}>
      <b>{value}</b>
    </span>
  );
};

export default ScoreText;
