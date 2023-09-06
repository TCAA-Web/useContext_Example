import { Title } from '../Title/Title'
import style from './ContentSection.module.scss'

export const ContentSection = ({children, title, isTrue, content}) => {

    return (
        <>
        <div className={style.contentWrapper}>
            <Title title={title}/>
            <section>
                {children}
                {isTrue ? content : ""}
            </section>
        </div>
        </>
    )
}