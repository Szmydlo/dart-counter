import React from "react";

export type mathPanelProps = {
  avg: number;
  legAvg: number;
  sets: number;
  legs: number;
  lastScore: number;
};
const MathPanel = ({
  avg = 0,
  legAvg = 0,
  sets = 0,
  legs = 0,
  lastScore = 0,
}: mathPanelProps) => {
  return (
    <div className="bg-gray-400 w-[200px] h-[100px] text-center flex flex-col justify-center">
      <span>
        Avg: <b>{avg.toFixed(2)}</b> | Leg Avg: <b>{legAvg.toFixed(2)}</b>
      </span>
      <span>
        Sets: <b>{sets}</b> | Legs: <b>{legs}</b>
      </span>
      <span>
        Last score: <b>{lastScore}</b>
      </span>
    </div>
  );
};

export default MathPanel;
