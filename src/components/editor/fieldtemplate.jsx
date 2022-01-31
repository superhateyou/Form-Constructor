import { checkInput } from './subcomponents/checkbox'
import { multiCheck } from './subcomponents/checkmulti'
import { textInput } from './subcomponents/input'
import { multiInput } from './subcomponents/inputmulti'
import { numberInput } from './subcomponents/number'
import { passwordInput } from './subcomponents/password'
import { areaInput } from './subcomponents/textarea'
import { radioInput } from './subcomponents/radio'
import { selectInput } from './subcomponents/select'

const keyHolder = {
    "textInput" : textInput,
    "numberInput" : numberInput,
    "passwordInput" : passwordInput,
    "areaInput" : areaInput,
    "checkInput" : checkInput,
    "multiInput" : multiInput,
    "multiCheck" : multiCheck,
    "radioInput" : radioInput,
    "selectInput" : selectInput
}

export const FieldTemplate = ({data, changeHandler, checkedHandler, multiInputHandler, multiCheckHandler}) => {
    for (const key in keyHolder) {
        if (key === data.type){
            const ComponentName = keyHolder[key]
            return (
                <ComponentName data={data} 
                    changeHandler={changeHandler} 
                    checkedHandler={checkedHandler} 
                    multiInputHandler={multiInputHandler}
                    multiCheckHandler={multiCheckHandler}
                />
            )
        }
    }
    return null
}