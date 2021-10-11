import './Button.scss';
import {FC} from "react";

type ButtonPropsType = {
    type: 'submit' | 'button'
    inner: string | HTMLOrSVGImageElement
    bgColor: 'green' | 'blue'
    color: string
}

const Button: FC<ButtonPropsType> = ({ type, inner, bgColor , color}) => {
    return(
        <button className={ `common-btn ${ bgColor === 'green' ? 'common-btn--green' : 'common-btn--blue' }` }
                type={ type }
                style={{ color }}
        >
            { inner }
        </button>
    )
}

export default Button;