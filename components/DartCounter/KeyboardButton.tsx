import React from "react";

type props = {
  buttonText: string;
  onPress: () => void;
  warning?: boolean;
  confirm?: boolean;
};
const KeyboardButton = ({
  buttonText = "as",
  onPress,
  warning,
  confirm,
}: props) => {
  let classes = "bg-gray-400 hover:bg-gray-600";
  if (warning) classes = "bg-red-400 hover:bg-red-600";
  if (confirm) classes = "bg-green-400 hover:bg-green-600";
  return (
    <button
      className={`w-[100px] text-black h-[50px] leading-10 text-2xl ${classes}`}
      onClick={onPress}
    >
      {buttonText}
    </button>
  );
};

export default KeyboardButton;
