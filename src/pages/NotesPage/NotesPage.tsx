import './NotesPage.scss';
import Table from "../../components/Table/Table";
import {nanoid} from "nanoid";

const NotesPage = () => {
    const noteItemsTableCols = ['Name', 'Created', 'Category', 'Content', 'Dates'];
    const statItemsTableCols = ['Note Category', 'Active', 'Archived'];
    return(
        <div className={ 'notes-page' }>
            <Table columns={noteItemsTableCols} renderControllers={true} height={'400px'} key={nanoid()}/>
            <Table columns={statItemsTableCols} renderControllers={false} key={nanoid()}>
                <div>Hi</div>
            </Table>
        </div>
    )
}

export default NotesPage;