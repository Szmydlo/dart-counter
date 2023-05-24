import MathPanel, { mathPanelProps } from "./MathPanel";

import React from "react";
import ScoreText from "./ScoreText";

const ScoreField = ({
  score = 0,
  mathObject,
  noOfPlayers = 1,
}: {
  score: number;
  mathObject: mathPanelProps;
  noOfPlayers: number;
}) => {
  let computedUI = (
    <div className="bg-green-700 w-[400px] h-[300px] text-center">
      <div className="py-5 h-[200px]">
        <ScoreText value={score} size={8} />
      </div>
      <div className="flex justify-center">
        <MathPanel {...mathObject} />
      </div>
    </div>
  );

  if (noOfPlayers !== 1) {
    computedUI = (
      <div className="flex bg-green-700 w-[400px] h-[300px]">
        <div className="text-center border-r-2 box-border w-1/2">
          <div className="py-5 h-[200px]">
            <ScoreText value={score} size={6} />
          </div>
          <div className="flex justify-center">
            <MathPanel {...mathObject} />
          </div>
        </div>
        <div className="text-center border-l-2 box-border w-1/2">
          <div className="py-5 h-[200px]">
            <ScoreText value={score} size={6} />
          </div>
          <div className="flex justify-center">
            <MathPanel {...mathObject} />
          </div>
        </div>
      </div>
    );
  }
  return <>{computedUI}</>;
};

export default ScoreField;
