import {NoteFields} from "../../../redux/slices/notesPageSlice";
import {FC} from "react";
import {useNotesPageDispatch, useNotesPageSelector} from "../../../redux/hooks/notesPageHooks";
import {Formik} from "formik";
import * as Yup from "yup";
import Field from "../Field/Field";
import {nanoid} from "nanoid";

type NoteItemFormPropsType = {
    fields: NoteFields
    id: number
    formikRef: any
}

const NoteItemForm: FC<NoteItemFormPropsType> = ({ fields, id, formikRef }) => {
    const { editNote } = useNotesPageDispatch();
    const { categories } = useNotesPageSelector();
    return(
        <Formik
            innerRef={formikRef}
            initialValues={{
                nameInput: fields.name,
                categorySelect: fields.category,
                contentInput: fields.content
            }}
            validationSchema={
                Yup.object({
                    nameInput: Yup.string().min(1, 'Required').max(50, 'Max 50 characters').required('Required'),
                    contentInput: Yup.string().max(150, 'Max 150 characters')
                })
            }
            onSubmit={(values) => {
                editNote({
                    id,
                    name: values.nameInput,
                    category: values.categorySelect,
                    content: values.contentInput,
                    dates: getDateFromItemContent(values.contentInput)
                })
            }}
        >
            {
                formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <Field isEditable={true}
                               name={'nameInput'}
                               value={formik.values.nameInput}
                               onChange={formik.handleChange}
                               key={`${id}__name`}
                        />
                        <Field innerText={fields.created}
                               isEditable={false}
                               key={nanoid()}
                        />
                        <div className="table-item__field">
                            <select name={'categorySelect'}
                                    onChange={formik.handleChange}
                                    value={formik.values.categorySelect}>
                                {
                                    categories.map(cat => <option value={cat}
                                                                  key={nanoid()}>{ cat }</option>)
                                }
                            </select>
                        </div>
                        <Field isEditable={true}
                               name={'contentInput'}
                               value={formik.values.contentInput}
                               onChange={formik.handleChange}
                               key={`${id}__content`}
                        />
                        <Field innerText={fields.dates}
                               isEditable={false}
                               key={nanoid()}
                        />
                    </form>
                )
            }

        </Formik>
    )
}
const getDateFromItemContent = (content: string): string => {
    //Matching d/m/yy and dd/mm/yyyy date formats
    const regExp = /(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/\d{4}/g;
    const dates = content.match(regExp);
    if (dates && dates.length) {
        return dates.join(', ');
    } else {
        return '';
    }
}

export default NoteItemForm;