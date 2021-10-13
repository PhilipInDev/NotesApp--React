import './Button.scss';
import {FC, MouseEventHandler, ReactElement} from "react";

type ButtonPropsType = {
    type: 'submit' | 'button'
    inner: string | ReactElement
    bgColor: 'green' | 'blue'
    color: string
    disabled?: boolean
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonPropsType> = ({ type, inner, bgColor , color, disabled, onClick}) => {
    return(
        <button className={ `common-btn ${ bgColor === 'green' ? 'common-btn--green' : 'common-btn--blue' } common-btn${disabled ? '--disabled' : ''}`}
                type={ type }
                style={{ color }}
                onClick={onClick}
        >
            { inner }
        </button>
    )
}

export default Button;