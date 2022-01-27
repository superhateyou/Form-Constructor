import { MultiInputConstructor } from "./inputmulti_constructor"

export const multiInput = ({data, changeHandler}) => {
    return (
        <MultiInputConstructor data={data} changeHandler={changeHandler} />
    )
}