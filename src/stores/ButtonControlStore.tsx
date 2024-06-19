import { makeAutoObservable } from "mobx";

class ControlStore {
  inputValue: string = "";

  constructor() {
    makeAutoObservable(this);
  }
  setInputValue = (newValue: string) => {
    this.inputValue = newValue;
  };

  clearHandler = () => {
    this.inputValue = "";
  };

  helloHandler = () => {
    this.inputValue = "Hello world!";
  };
  alertHandler = () => {
    if (this.inputValue.trim().length === 0) {
      alert("Введите значение");
    } else {
      alert(this.inputValue);
    }
  };

  isNumberHandler = () => {
    const inputValue = this.inputValue.trim();
    if (/^\d+$/.test(inputValue)) {
      alert(parseInt(inputValue));
    } else {
      alert("Введите числовое значение");
    }
  };
}

export default ControlStore;
