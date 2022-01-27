import { checkInput } from './subcomponents/checkbox'
import { textInput } from './subcomponents/input'
import { numberInput } from './subcomponents/number'
import { passwordInput } from './subcomponents/password'
import { areaInput } from './subcomponents/textarea'

const keyHolder = {
    "textInput" : textInput,
    "numberInput" : numberInput,
    "passwordInput" : passwordInput,
    "areaInput" : areaInput,
    "checkInput" : checkInput
}

export const FieldTemplate = ({data, changeHandler, checkedHandler}) => {
    for (const key in keyHolder) {
        if (key === data.type){
            const ComponentName = keyHolder[key]
            return (
                <ComponentName data={data} changeHandler={changeHandler} checkedHandler={checkedHandler}/>
            )
        }
    }
    return null
}