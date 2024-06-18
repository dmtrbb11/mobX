import { makeAutoObservable } from "mobx";

class ControlStore {
  inputValue: string = "";

  constructor() {
    makeAutoObservable(this);
  }
  setInputValue = (newValue: string) => {
    this.inputValue = newValue;
    console.log("go", this.inputValue);
  };

  clearHandler = () => {
    this.inputValue = "";
  };

  helloHandler = () => {
    this.inputValue = "Hello world!";
  };
  alertHandler = () => {
    alert(this.inputValue);
  };

  isNumberHandler = () => {
    const value: number = parseInt(this.inputValue);
    if (!isNaN(value)) {
      alert(value);
    } else {
      alert("Введите числовое значение");
    }
  };
}

export default ControlStore;
