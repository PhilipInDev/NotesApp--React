import './ControllerBtn.scss';
import {FC, MouseEventHandler} from "react";

export type ControllerBtnTypes = 'Archive' | 'Unzip' | 'Edit' | 'Submit' | 'Delete';
type ControllerBtnProps = {
    type: ControllerBtnTypes
    color: 'light' | 'blue'
    isAll: boolean
    onClick?: MouseEventHandler<HTMLDivElement>
}
const ControllerBtn: FC<ControllerBtnProps> = ({ type, color, isAll, onClick}) => {
    const colorStyle = color === 'light' ? 'white' : '#569adf';
    let iconClasses;
    switch (type) {
        case 'Archive':
            iconClasses = 'fas fa-box';
            break;
        case 'Unzip':
            iconClasses = 'fas fa-box-open';
            break;
        case 'Edit':
            iconClasses = 'fas fa-pencil-alt';
            break;
        case 'Submit':
            iconClasses = 'fas fa-check-circle';
            break;
        case 'Delete':
            iconClasses = 'fas fa-trash-alt';
            break
        default:
            iconClasses = 'far fa-question-circle'
    }
    return(
        <div className={'controller-btn'}
             onClick={onClick}
             title={isAll ? type + ' All' : type}
             style={{ color: colorStyle }}>
            <i className={iconClasses}/>
        </div>
    )
}

export default ControllerBtn;