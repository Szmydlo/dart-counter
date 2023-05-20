import KeyboardSection from "./KeyboardSection";
import React from "react";
import ScoreField from "./ScoreField";

// type props = {
//   noOfPlayers: number;
// };
const DartCounter = (/*{ noOfPlayers }: props*/) => {
  return (
    <div>
      <ScoreField />
      <KeyboardSection />
    </div>
  );
};

export default DartCounter;
