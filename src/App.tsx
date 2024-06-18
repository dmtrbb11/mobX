import React from "react";
import ButtonControl from "./components/ButtonControl";
import { observer } from "mobx-react-lite";
import ControlStore from "./stores/ButtonControlStore";

const App: React.FC = observer(() => {
  const btnsControl1 = new ControlStore();
  const btnsControl2 = new ControlStore();

  return (
    <div>
      <ButtonControl
        inputValue={btnsControl1.inputValue}
        setInputValue={btnsControl1.setInputValue}
        clearHandler={btnsControl1.clearHandler}
        rightButtons={[
          { text: "Очистить", onClick: btnsControl1.clearHandler },
          { text: "Hello world", onClick: btnsControl1.helloHandler },
        ]}
      />

      {/* <ButtonControl
        inputValue={btnsControl2.inputValue}
        setInputValue={btnsControl2.setInputValue}
        leftButtons={[
          { text: "Показать число", onClick: btnsControl2.isNumberHandler },
        ]}
        rightButtons={[
          { text: "Alert InputValue", onClick: btnsControl2.alertHandler },
        ]}
      /> */}
    </div>
  );
});

export default App;
