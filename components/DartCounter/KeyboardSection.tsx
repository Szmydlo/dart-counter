import React, { useState } from "react";

import CurrentNumericValueField from "./CurrentNumericValueField";
import KeyboardButton from "./KeyboardButton";
import { between0and180 } from "../../utils/helperFunctions";

const NUMPAD = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const KeyboardSection = () => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  const handleEditValue = (newAction: number | string) => {
    if (typeof newAction === "number") {
      setCurrentValue((curr) => {
        return between0and180(curr * 10 + newAction);
      });
    } else if (newAction === "CLR") {
      setCurrentValue(0);
    }
  };
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-0 w-[400px]">
      <KeyboardButton buttonText="BACK" />
      <CurrentNumericValueField value={currentValue} />
      <KeyboardButton buttonText="FINISH" />
      {NUMPAD.map((num) => (
        <KeyboardButton
          key={num}
          buttonText={num}
          onPress={() => handleEditValue(num)}
        />
      ))}
      <KeyboardButton buttonText="CLR" onPress={() => handleEditValue("CLR")} />
      <KeyboardButton buttonText={0} onPress={() => handleEditValue(0)} />
      <KeyboardButton
        buttonText={currentValue ? "OK" : "No Score"}
        warning={!currentValue}
        confirm={!!currentValue}
      />
    </div>
  );
};

export default KeyboardSection;
