import s from './Conteniteams.module.css';

let Conteniteams = (props) => {
    return(
    <div className={s.left}>
        {props.message}
        {props.likeCount}
    </div>
    );
}


export default Conteniteams;