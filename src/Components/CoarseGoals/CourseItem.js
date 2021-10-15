import './CourseItem.css';

function CourseItem(props){
    const clickGoalHandler = (event) => {
        props.onDelete(props.content.id);
    }

    return <div className="goal-item" onClick={clickGoalHandler}>{props.content.text}</div>
}
export default CourseItem;