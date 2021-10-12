import './Field.scss';
import {FC} from "react";

type InputSettings = {
    name?: string
    value?: string
    placeholder?: string
    onChange?: any
}
type FieldPropsType = InputSettings & {
    innerText?: string
    isEditable: boolean
}

const Field: FC<FieldPropsType> = ({ innerText, isEditable,name, value, placeholder,onChange}) => {
    return(
        <div className={ 'table-item__field' }>
            {
                isEditable && value
                ? <input type={ 'text' }
                         name={name}
                         defaultValue={value ? value : ''}
                         placeholder={placeholder ? placeholder : ''}
                         onChange={onChange} />
                : <p title={innerText}>{ innerText }</p>
            }
        </div>
    )
}

export default Field;