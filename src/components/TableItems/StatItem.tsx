import './TableItem.scss';
import {chooseCategoryIcon} from "./NoteItem";
import {Category} from "../../redux/slices/notesPageSlice";
import {FC} from "react";
import Field from "./Field/Field";

type StatItemPropsType = {
    category: Category
    active: number
    archived: number
}

const StatItem: FC<StatItemPropsType> = ({ category, active, archived}) => {
    return(
        <div className={'table-item'}>
            <div className="table-item__category-icon-box">
                {chooseCategoryIcon(category)}
            </div>
            <Field innerText={`${category}`} isEditable={false} key={`${category}__${category}`}/>
            <Field innerText={`${active}`} isEditable={false} key={`${active}__active__${category}`}/>
            <Field innerText={`${archived}`} isEditable={false} key={`${archived}__archived__${category}`}/>
        </div>
    )
}

export default StatItem;