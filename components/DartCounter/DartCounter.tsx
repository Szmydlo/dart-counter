import KeyboardSection from "./KeyboardSection";
import React from "react";
import ScoreField from "./ScoreField";

type props = {
  noOfPlayers: number;
};
const DartCounter = ({ noOfPlayers }: props) => {
  return (
    <div>
      <ScoreField
        score={153}
        mathObject={{
          avg: 66.78,
          legAvg: 71.03,
          sets: 1,
          legs: 1,
          lastScore: 98,
        }}
        noOfPlayers={noOfPlayers}
      />
      <KeyboardSection />
    </div>
  );
};

export default DartCounter;
