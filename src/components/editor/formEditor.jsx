import { useState } from "react"
import styles from "./formEditor.module.css"
import { FieldTemplate } from "./fieldtemplate"

export const FormEditor = ({arr}) => {
    const [statement, setStatement] = useState('')
    const changeHandler = (e) => {
        setStatement({...statement, [e.target.name] : e.target.value})
    }

    console.log(statement)

    return (    
        <div className={styles.editorBox}>
           {arr.map((el, i) => <FieldTemplate key={i.toString()} data={el} changeHandler={changeHandler}/>)}
        </div>
    )
}
