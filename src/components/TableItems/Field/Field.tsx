import './Field.scss';
import {FC, Ref} from "react";

type InputSettings = {
    name?: string
    value?: string
    placeholder?: string
    error?: string
    onChange?: any
}
type FieldPropsType = InputSettings & {
    innerText?: string
    isEditable: boolean
    fieldRef?: Ref<any> | null
}

const Field: FC<FieldPropsType> = ({ innerText, isEditable, name, value, placeholder, error, fieldRef = null, onChange}) => {
    return(
        <div className={ 'table-item__field' }>
            {
                isEditable
                ? <>
                        <input type={ 'text' }
                               name={name}
                               defaultValue={value ? value : ''}
                               placeholder={placeholder ? placeholder : ''}
                               className={error ? 'table-item__input-error' : ''}
                               ref={fieldRef}
                               onChange={onChange} />
                        <span className="table-item__field-error">
                            { error ? error : '' }
                        </span>
                    </>
                : <p ref={fieldRef} title={innerText}>{ innerText }</p>
            }
        </div>
    )
}

export default Field;