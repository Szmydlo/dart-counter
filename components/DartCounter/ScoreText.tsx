import React from "react";

type props = {
  value: number;
};
const ScoreText = ({ value }: props) => {
  return (
    <span className="text-6xl inline-block h-[60px]">
      <b>{value}</b>
    </span>
  );
};

export default ScoreText;
