import CourseItem from "./CourseItem";
import "./CourseList.css";

function CourseList(props) {

    const deleteGoalHandler = (deletedGoalid) =>{
        props.onDelete(deletedGoalid);
    }
  return (
    <ul className="goal-list">
      {props.items.map((course) => {
        return <CourseItem key={course.id} content={course} onDelete = {deleteGoalHandler}></CourseItem>;
      })}
    </ul>
  );
}
export default CourseList;
