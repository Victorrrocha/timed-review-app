import style from '../styles/Card.module.css'

export default function Card({title, body, field, subject}) {
    return (
        <div className={` ${style.card} ${style.yellow}`}>
            <p className={style.title}>{title}</p>
            <p className={style.field_subject}>{field}, {subject}</p>
            {/* <p>{body.length > 200 ? body.substring(0, 200) + "..." : body }</p> */}
        </div>
    )
}
