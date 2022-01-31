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
    name : "Login",
    placeholder: "Введите логин...",
    type: "textInput"
},
{
    name: "Radio",
    type: "radioInput",
    value: "Pizza?"
},
{ 
    name : "Blog",
    placeholder: "Введите текст...",
    type: "multiInput",
    quantity: 3
},
{ 
    name : "Quiz",
    type: "multiCheck",
    quantity: 3
},
{ 
    name : "Blog",
    placeholder: "Введите текст...",
    type: "multiInput",
    quantity: 3
},
{
    name: "Password",
    placeholder: "Введите пароль",
    type: "passwordInput"
}
  // { 
  //     name : "Blog",
  //     placeholder: "Введите текст...",
  //     type: "multiInput",
  //     quantity: 3
  // },
  // { 
  //     name : "Comments",
  //     placeholder: "Введите текст...",
  //     type: "multiInput",
  //     quantity: 1
  // },
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
  // { //готов
  //     name : "input_checkbox",
  //     type : "multiCheck",
  //     quantity : 5
  // },
  // {
  //     name : "input_multicheck",
  //     type : "checkbox"
  // }
]

function App() {
  return (
    <div className='App'>
      <div className="app-wrapper">
        <FormEditor arr={arr} />
      </div>
    </div>
  );
}

export default App;
