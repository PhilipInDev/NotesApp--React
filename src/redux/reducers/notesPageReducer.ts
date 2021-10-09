import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {shallowEqual} from "react-redux";
import {useAppDispatch, useAppSelector} from "../store";


type Category = 'Task' | 'Random Thought' | 'Idea';
type Note = {
    id: number
    isActive: boolean
    name: string
    created: string,
    category: Category
    content: string
    dates: string
};
type EditNotePayloadType = {
    id: number
    isActive?: boolean
    name?: string
    created?: string,
    category?: Category
    content?: string
    dates?: string
}
type initialStateType = {
    notes: Note[]
}
const initialState: initialStateType = {
    notes: [
        {
            id: 1,
            isActive: true,
            name: 'Radency internship',
            created: '4 October 2021',
            category: 'Task',
            content: '18/10/2021',
            dates: '18/10/2021'
        },
        {
            id: 2,
            isActive: true,
            name: 'Dentist',
            created: '20 April 2021',
            category: 'Random Thought',
            content: 'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
            dates: '3/5/2021, 5/5/2021'
        },
        {
            id: 3,
            isActive: false,
            name: 'Riding a bike',
            created: '20 April 2021',
            category: 'Task',
            content: 'Somehow somewhere one time',
            dates: ''
        },
        {
            id: 4,
            isActive: true,
            name: 'Dating with Natalya',
            created: '5 October 2021',
            category: 'Task',
            content: '15/10/2021',
            dates: '15/10/2021'
        },
        {
            id: 5,
            isActive: true,
            name: 'Shopping List',
            created: '20 April 2021',
            category: 'Task',
            content: 'Potatoes - 1kg, Milk - 1.5l, Snickers - 2',
            dates: ''
        },
        {
            id: 6,
            isActive: true,
            name: 'What if',
            created: '20 April 2021',
            category: 'Random Thought',
            content: '...',
            dates: ''
        },
        {
            id: 7,
            isActive: true,
            name: 'Good idea',
            created: '20 April 2021',
            category: 'Idea',
            content: 'Really good idea',
            dates: ''
        }
    ]
}

const notesPageReducer = createSlice({
    name: 'notesPage',
    initialState,
    reducers: {
        deleteNote: (state, action: PayloadAction<number>) => {

        },
        addNote: (state, action: PayloadAction<Note>) => {

        },
        editNote: (state, action: PayloadAction<EditNotePayloadType>) => {

        }
    }
})

const { deleteNote, addNote, editNote } = notesPageReducer.actions;

export const useNotesPageSelector = () => ({
    notes: useAppSelector(state => state.notesPage.notes, shallowEqual)
})
export const useNotesPageDispatch = () => {
    const dispatch = useAppDispatch();
    return {
        deleteNote: (id: number) => dispatch(deleteNote(id)),
        addNote: (note: Note) => dispatch(addNote(note)),
        editNote: (editedFields: EditNotePayloadType) => dispatch(editNote(editedFields))
    }
}
export default notesPageReducer.reducer;