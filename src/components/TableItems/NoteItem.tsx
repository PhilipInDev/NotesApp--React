import './TableItem.scss';
import {FC, useRef} from "react";
import {NoteItemType} from "../../redux/slices/notesPageSlice";
import {FormikValues} from 'formik';
import Field from "./Field/Field";
import {useNotesPageDispatch} from "../../redux/hooks/notesPageHooks";
import ControllerBtn from "../SharedComponents/ControllerBtn/ControllerBtn";
import NoteItemForm from "./NoteItemForm/NoteItemForm";
import {nanoid} from "nanoid";


export const chooseCategoryIcon = (category: string) => {
    switch (category) {
        case 'Task':
            return <i className={ 'fas fa-tasks' } />
        case 'Idea':
            return <i className={ 'fas fa-lightbulb' } />
        case 'Random Thought':
            return <i className={ 'fas fa-code-branch' } />
    }
}

type TableItemType = {
    item: NoteItemType
    isEditable: boolean
}
const NoteItem: FC<TableItemType> = ({ item, isEditable }) => {
    const { toggleEditing, editNote, deleteNote } = useNotesPageDispatch();
    const formikRef = useRef<FormikValues>(null);
    const typeOfEditController = isEditable ? 'Submit' : 'Edit';
    const typeOfArchiveController = item.isActive ? 'Archive' : 'Unzip';
    const handleSubmit = () => {
        if (formikRef.current) {
            formikRef.current.handleSubmit()
        }
    }
    const fields = {
        name: item.name,
        created: item.created,
        category: item.category,
        content: item.content,
        dates: item.dates
    } as any
    return(
        <div id={`${item.id}__note-item`} className={'table-item'}>
                <div className="table-item__category-icon-box">
                    { chooseCategoryIcon(item.category)  }
                </div>
            {
                isEditable
                ? <NoteItemForm fields={fields} id={item.id} formikRef={formikRef} />
                : Object.keys(fields).map((key: string) => <Field innerText={fields[key]}
                                                                  isEditable={false}
                                                                  key={nanoid()} />)
            }
            <div className="table-item__controllers-box">
                <ControllerBtn type={typeOfEditController}
                               color={'blue'}
                               isAll={false}
                               key={nanoid()}
                               onClick={() => {
                                   if (isEditable) {
                                       handleSubmit();
                                       toggleEditing(null);
                                   }
                                   if (!isEditable) toggleEditing(item.id);
                               }}/>
                <ControllerBtn type={typeOfArchiveController}
                               color={'blue'}
                               isAll={false}
                               key={nanoid()}
                               onClick={() => {
                                   editNote({ id: item.id, isActive: !item.isActive })
                               }}/>
                <ControllerBtn type={'Delete'}
                               color={'blue'}
                               isAll={false}
                               key={nanoid()}
                               onClick={() => {
                                   deleteNote(item.id);
                               }}/>
            </div>
        </div>
    )
}

export default NoteItem;