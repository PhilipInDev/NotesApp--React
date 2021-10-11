import './ControllerBtn.scss';
import {FC} from "react";

export type ControllerBtnTypes = 'Archive' | 'Unzip' | 'Edit' | 'Submit' | 'Delete';
type ControllerBtnProps = {
    type: ControllerBtnTypes
    color: string
    isAll: boolean
}
const ControllerBtn: FC<ControllerBtnProps> = ({ type, color, isAll }) => {
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
        <div className={'controller-btn'} title={isAll ? type + ' All' : type} style={{ color: color }}>
            <i className={iconClasses}/>
        </div>
    )
}

export default ControllerBtn;