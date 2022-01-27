import './App.css';
import { FormEditor } from './components/editor/formEditor';


// let arr = [
//   {
//       name : "input_text",
//       placeholder: "Введите текст...",
//       type: "text"
//   },
//   {
//       name : "input_multiple",
//       placeholder: "Введите текст...",
//       type: "text"
//   },
//   {
//       name : "input_number",
//       placeholder: "Введите число...",
//       type: "number"
//   },
//   {
//       name : "input_pass",
//       placeholder: "Введите пароль...",
//       type: "password",
//   },
//   {
//       name : "input_checkbox",
//       type : "checkbox"
//   },
//   {
//       name : "input_multicheck",
//       type : "checkbox"
//   }
// ]

let arr = [
  { 
      name : "multi_input_text",
      placeholder: "Введите текст...",
      type: "multiInput",
      quantity: 3
  },
  // { //не готов
  //     name : "input_multiple",
  //     placeholder: "Введите текст...",
  //     type: "text"
  // },
  // { //готов
  //     name : "input_number",
  //     placeholder: "Введите число...",
  //     type: "numberInput"
  // },
  // { //готов
  //     name : "input_pass",
  //     placeholder: "Введите пароль...",
  //     type: "passwordInput",
  // },
  // { //готов
  //   name : "input_textarea",
  //   placeholder: "Введите текст...",
  //   type : "areaInput"
  // },
  // { //готов
  //     name : "input_checkbox",
  //     type : "checkInput"
  // },
  // {
  //     name : "input_multicheck",
  //     type : "checkbox"
  // }
]

function App() {
  return (
    <div className="app-wrapper">
      <FormEditor arr={arr} />
    </div>
  );
}

export default App;
