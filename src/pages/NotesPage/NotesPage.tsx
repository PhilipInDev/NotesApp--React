import './NotesPage.scss';
import Table from "../../components/Table/Table";
import {nanoid} from "nanoid";
import NoteItem from "../../components/TableItems/NoteItem";
import {useNotesPageDispatch, useNotesPageSelector} from "../../redux/hooks/notesPageHooks";
import StatItem from "../../components/TableItems/StatItem";
import {Category, NoteItemType} from "../../redux/slices/notesPageSlice";
import Slide from "../../components/Slider/Slide";
import Button from "../../components/SharedComponents/Button/Button";


export const noteItemsTableCols = ['Name', 'Created', 'Category', 'Content', 'Dates'];
export const statItemsTableCols = ['Note Category', 'Active', 'Archived'];
export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const countNotesByCategories = (category: Category, notes: NoteItemType[]) => {
    let active = 0;
    let archived = 0;
    notes.forEach(note => {
        if (note.category === category) {
            if (note.isActive) active++;
            if (!note.isActive) archived++;
        }
    })

    return {
        category,
        active,
        archived
    }
}

const NotesPage = () => {
    const { notes, editingNotes, categories, currentSlide } = useNotesPageSelector();
    const { addNote, toggleCurrentSlide, toggleEditing } = useNotesPageDispatch();
    let isEditable: boolean = false;
    const activeNotes: JSX.Element[] = [];
    const archivedNotes: JSX.Element[] = [];
    const date = new Date();
    notes.forEach(note => {
        isEditable = !!(editingNotes && editingNotes[0] === note.id);
        if (note.isActive) {
            activeNotes.push(<NoteItem key={`${note.id}__note-item`}
                             item={note}
                             isEditable={isEditable}/>)
        } else {
            archivedNotes.push(<NoteItem key={`${note.id}__note-item`}
                                    item={note}
                                    isEditable={isEditable}/>)
        }
    })

    return(
        <div className={'notes-page'}>
            <Table columns={noteItemsTableCols} renderControllers={true} height={'100%'} key={nanoid()}>
                <div className={'notes-page__slider-box'}>
                    <Slide title={'Active Notes'} isCurrent={currentSlide === 'Active'} >
                        { activeNotes }
                    </Slide>
                    <Slide title={'Archived Notes'} isCurrent={currentSlide === 'Archived'}>
                        { archivedNotes }
                    </Slide>
                </div>
            </Table>
            <div className="notes-page__controllers">
                <Button type={'button'}
                        inner={'Create Note'}
                        bgColor={'green'}
                        color={'white'}
                        disabled={currentSlide === 'Archived'}
                        onClick={() => {
                            addNote(
                                {
                                    id: notes.length + 1,
                                    isActive: true,
                                    name: '',
                                    created: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
                                    category: 'Task',
                                    content: '',
                                    dates: ''
                                });
                            toggleEditing(notes.length + 1);
                            window.scrollTo(0, 0);
                        }}/>
                <Button type={'button'}
                        inner={currentSlide === 'Archived' ? 'To Active' : 'To Archive'}
                        bgColor={'blue'}
                        color={'white'}
                        onClick={() => toggleCurrentSlide()}/>
            </div>
            <Table columns={statItemsTableCols} renderControllers={false} key={nanoid()}>
                {
                    categories.map((cat, index) => {
                        const stats = countNotesByCategories(cat, notes);
                        return <StatItem category={cat}
                                         active={stats.active}
                                         archived={stats.archived}
                                         key={`${index}__item__${cat}`}/>
                    })
                }
            </Table>
        </div>
    )
}

export default NotesPage;