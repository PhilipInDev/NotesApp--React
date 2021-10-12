import './Table.scss';
import {FC} from "react";
import Column from "./Column/Column";
import ControllerBtn, {ControllerBtnTypes} from "../SharedComponents/ControllerBtn/ControllerBtn";
import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid";

type TableItemPropsType = {
    columns: string[]
    renderControllers: boolean
    height?: string
}
const Table: FC<TableItemPropsType> = ({ columns, renderControllers = false, height='100%', children }) => {
    const cols = columns.map(colName => <Column columnName={colName} key={nanoid()}/>);
    const location = useLocation();
    const controllersTypes: ControllerBtnTypes[] = [location.pathname === '/active' ? 'Archive' : 'Unzip', 'Delete'];
    const controllers = renderControllers
        ? controllersTypes.map((type) => {
        return <ControllerBtn type={type}
                              color={'light'}
                              isAll={true}
                              key={nanoid()}/>
        })
        : null;
    return(
        <div className={ 'table' } >
            <div className={ 'table__header' }>
                { cols }
                <div className={ 'table__controllers' }>{ controllers }</div>
            </div>
            <div className={ 'table__items' } style={{ height: height}}>
                { children }
            </div>
        </div>
    )
}

export default Table;