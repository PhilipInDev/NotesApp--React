import './Slide.scss';
import {FC} from "react";
// import {useNotesPageSelector} from "../../redux/hooks/notesPageHooks";

type SlidePropsType = {
    title: string
    isCurrent: boolean
}
const Slide: FC<SlidePropsType> = ({ title, isCurrent, children}) => {
    const current = isCurrent ? 'slide--current' : '';
    // const { noteItemSlideScrollTop } = useNotesPageSelector();
    // const slideRef = useRef<HTMLDivElement>(null);
    // useEffect(() => {
    //     const elem = slideRef.current;
    //     if (elem) elem.scrollTop = noteItemSlideScrollTop;
    // }, [])
    return(
        <div className={ `slide ${current}` }>
            <h2 className={'slide__title'}>{ title }</h2>
            { children }
        </div>
    )
}

export default Slide;