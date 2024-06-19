import React from "react";
import ButtonControl from "./components/ButtonControl";
import CountryInput from "./components/AutoCompleteControl";
import { observer } from "mobx-react-lite";
import ControlStore from "./stores/ButtonControlStore";
import CountryStore from "./stores/CountryStore";

const btnsControl1 = new ControlStore();
const btnsControl2 = new ControlStore();

const App: React.FC = observer(() => {
  return (
    <div>
      <h1>Контрол с 2 кнопками справа</h1>
      <ButtonControl
        inputValue={btnsControl1.inputValue}
        setInputValue={btnsControl1.setInputValue}
        rightButtons={[
          { text: "Очистить", onClick: btnsControl1.clearHandler },
          { text: "Hello world", onClick: btnsControl1.helloHandler },
        ]}
      />
      <h1>Контрол с 1 кнопкой справа и 1 кнопкой слева</h1>
      <ButtonControl
        inputValue={btnsControl2.inputValue}
        setInputValue={btnsControl2.setInputValue}
        leftButtons={[
          { text: "Показать число", onClick: btnsControl2.isNumberHandler },
        ]}
        rightButtons={[
          { text: "Alert InputValue", onClick: btnsControl2.alertHandler },
        ]}
      />
      <h1>Контрол-автокомплит(Максимальное кол-во подсказок - 3)</h1>
      <CountryInput store={new CountryStore(3)} />
      <h1>Контрол-автокомплит(Максимальное кол-во подсказок - 10)</h1>
      <CountryInput store={new CountryStore(10)} />
    </div>
  );
});

export default App;
