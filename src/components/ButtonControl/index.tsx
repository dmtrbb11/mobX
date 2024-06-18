import React from "react";
import { observer } from "mobx-react-lite";

interface Button {
  text: string;
  onClick: () => void;
}

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  clearHandler: (value: string) => void;
  leftButtons?: Button[];
  rightButtons?: Button[];
}

const ButtonControl: React.FC<Props> = observer(
  ({ rightButtons, leftButtons, inputValue, setInputValue }) => {
    // const setInputState = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const inputValueString: string = e.target.value;
    //   setInputValue(inputValueString);
    // };

    // const [state, setState] = React.useState("");

    // console.log(state);
    return (
      <div className="button-control">
        <div className="button-control__buttons">
          {leftButtons &&
            leftButtons.map((button) => (
              <button key={button.text} onClick={button.onClick}>
                {button.text}
              </button>
            ))}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {/* {rightButtons &&
          rightButtons.map((button) => (
            <button key={button.text} onClick={button.onClick}>
              {button.text}
            </button>
          ))} */}
        </div>
      </div>
    );
  }
);
export default ButtonControl;
