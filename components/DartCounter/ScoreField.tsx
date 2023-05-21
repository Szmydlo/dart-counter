import MathPanel, { mathPanelProps } from "./MathPanel";

import React from "react";
import ScoreText from "./ScoreText";

const ScoreField = ({
  score = 0,
  mathObject,
}: {
  score: number;
  mathObject: mathPanelProps;
}) => {
  return (
    <div className="bg-green-700 w-[300px] h-[200px] text-center">
      <div className="py-5 h-[100px]">
        <ScoreText value={score} />
      </div>
      <div className="flex justify-center">
        <MathPanel {...mathObject} />
      </div>
    </div>
  );
};

export default ScoreField;
