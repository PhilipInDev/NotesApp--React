import {shallowEqual} from "react-redux";
import {useAppDispatch, useAppSelector} from "../store";
import {addNote, deleteNote, editNote, EditNotePayloadType, NoteItemType, toggleEditing} from "../slices/notesPageSlice";

export const useNotesPageSelector = () => {
    return {
        notes: useAppSelector(state => state.notesPage.notes, shallowEqual),
        editingNotes: useAppSelector(state => state.notesPage.editingNotes, shallowEqual),
        categories: useAppSelector(state => state.notesPage.categories)
    }
}
export const useNotesPageDispatch = () => {
    const dispatch = useAppDispatch();
    return {
        deleteNote: (id: number) => dispatch(deleteNote(id)),
        addNote: (note: NoteItemType) => dispatch(addNote(note)),
        editNote: (editedFields: EditNotePayloadType) => dispatch(editNote(editedFields)),
        toggleEditing: (id: number | null) => dispatch(toggleEditing(id))
    }
}