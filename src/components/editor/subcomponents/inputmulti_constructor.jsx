import { useState } from "react"

export const MultiInputConstructor = ({data, changeHandler}) => {
    let tempArr = []
    const addButton = data.name + '+' + data.type + '_addButton'

    const [lengthArr, setLengthArr] = useState(data.quantity)

    const addField = () => {
        setLengthArr(lengthArr + 1)
    }

    const renderField = () => {
        if (data.quantity > 0){
            for (let i = 0; i < lengthArr; i++){
                let currentName = data.name + '_' + i
                let currentKey = data.name + '_' + i + '_' + data.type
                tempArr.push(<input name={currentName} placeholder={data.placeholder} type='text' key={currentKey} onChange={e => {changeHandler(e)}}/>)
            }
        }
        return tempArr
    }
  
    return (
        <div>
            {renderField()}
            <button key={addButton} type='button' onClick={addField}>Добавить поле ввода</button>
        </div>
    )
}