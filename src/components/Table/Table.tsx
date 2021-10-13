import './Table.scss';
import {FC, SyntheticEvent} from "react";
import Column from "./Column/Column";
import ControllerBtn, {ControllerBtnTypes} from "../SharedComponents/ControllerBtn/ControllerBtn";
import {nanoid} from "nanoid";
import {useNotesPageDispatch, useNotesPageSelector} from "../../redux/hooks/notesPageHooks";

type TableItemPropsType = {
    columns: string[]
    renderControllers: boolean
    height?: string
}
const Table: FC<TableItemPropsType> = ({ columns, renderControllers = false, height='100%', children }) => {
    const cols = columns.map(colName => <Column columnName={colName} key={nanoid()}/>);
    const { currentSlide } = useNotesPageSelector();
    const { deleteAllNotes, archiveAllNotes, unzipAllNotes } = useNotesPageDispatch();
    const controllersTypes: ControllerBtnTypes[] = [currentSlide === 'Active' ? 'Archive' : 'Unzip', 'Delete'];
    const controllersOnClick = (e: SyntheticEvent) => {
        switch (e.currentTarget?.getAttribute('title')) {
            case 'Delete All':
                deleteAllNotes(currentSlide === 'Active' ? 'Active' : 'Archived');
                break;
            case 'Archive All':
                archiveAllNotes();
                break;
            case 'Unzip All':
                unzipAllNotes();
                break;
            default:
                break;
        }
    }
    const controllers = renderControllers
        ? controllersTypes.map((type) => (
            <ControllerBtn type={type}
                           color={'light'}
                           isAll={true}
                           key={nanoid()}
                           onClick={controllersOnClick}/>))
        : null;
    return(
        <div className={ 'table' } >
            <div className={ 'table__header' }>
                { cols }
                <div className={ 'table__controllers' }>
                    { controllers }
                </div>
            </div>
            <div className={ 'table__items' } style={{ height: height}}>
                { children }
            </div>
        </div>
    )
}

export default Table;