import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Category = 'Task' | 'Random Thought' | 'Idea';
export type NoteFields = {
    name: string
    created: string,
    category: Category
    content: string
    dates: string
}
export type NoteItemType = NoteFields & {
    id: number
    isActive: boolean
};
export type EditNotePayloadType = {
    id: number
    isActive?: boolean
    name?: string
    created?: string,
    category?: Category
    content?: string
    dates?: string
}
type initialStateType = {
    notes: NoteItemType[]
    editingNotes: number[]
    categories: Category[]
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
    ],
    editingNotes: [],
    categories: ['Task', 'Idea', 'Random Thought']
}

const notesPageSlice = createSlice({
    name: 'notesPage',
    initialState,
    reducers: {
        deleteNote: (state, action: PayloadAction<number>) => {
            const index = state.notes.findIndex(note => note.id === action.payload);
            if (index >= 0) state.notes.splice(index, 1);
        },
        addNote: (state, action: PayloadAction<NoteItemType>) => {
            state.notes = [...state.notes, action.payload]
        },
        editNote: (state, action: PayloadAction<EditNotePayloadType>) => {
            state.notes.forEach((note, i) => {
                if (note.id === action.payload.id) state.notes[i] = { ...note, ...action.payload }
            })
        },
        toggleEditing: (state, action: PayloadAction<number | null>) => {
            if (action.payload === null) state.editingNotes.pop();
            if (action.payload !== null) {
                state.editingNotes.pop();
                state.editingNotes.push(action.payload);
            }
            
        }
    }
})

export const { deleteNote, addNote, editNote, toggleEditing } = notesPageSlice.actions;
export default notesPageSlice.reducer;