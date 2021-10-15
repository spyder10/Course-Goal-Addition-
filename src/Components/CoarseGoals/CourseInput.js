import './CourseInput.css';
import { useState } from 'react';

function CourseInput(props) {

    const [enteredCourseGoal,setEnteredCourseGoal] = useState('');
    const [isvalid,setValid] = useState(true);

    const CourseInputChangeHandler = (event) => {
        setValid(true);
        setEnteredCourseGoal(event.target.value);    
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        if(enteredCourseGoal.trim().length === 0){
          setValid(false);
          return;
        }
        props.onAddCourseGoal(enteredCourseGoal);
        setEnteredCourseGoal('');
    }

    let classes = "form-control ";
    if(! isvalid){
      classes += "invalid";
    }
  return (
      <form onSubmit={submitFormHandler}>
        <div className={classes}>
          <label>Course Goal</label>
          <input type="text" value={enteredCourseGoal} onChange={CourseInputChangeHandler}></input>
        </div>
        <button type="submit">Add Goal</button>
      </form>
  );
}
export default CourseInput;
