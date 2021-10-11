import {shallowEqual} from "react-redux";
import {useAppDispatch, useAppSelector} from "../store";
import {addNote, deleteNote, editNote, EditNotePayloadType, NoteItem} from "../slices/notesPageSlice";

export const useNotesPageSelector = () => {
    return {
        notes: useAppSelector(state => state.notesPage.notes, shallowEqual)
    }
}
export const useNotesPageDispatch = () => {
    const dispatch = useAppDispatch();
    return {
        deleteNote: (id: number) => dispatch(deleteNote(id)),
        addNote: (note: NoteItem) => dispatch(addNote(note)),
        editNote: (editedFields: EditNotePayloadType) => dispatch(editNote(editedFields))
    }
}