export const checkInput = ({data, changeHandler}) => {
    return <input name={data.name} type='checkbox' key={data.key} onChange={e => {changeHandler(e)}}/>
}