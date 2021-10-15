import './CourseInput.css';
import { useState } from 'react';

function CourseInput(props) {

    const [enteredCourseGoal,setEnteredCourseGoal] = useState('');

    const CourseInputChangeHandler = (event) => {
        setEnteredCourseGoal(event.target.value);    
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        props.onAddCourseGoal(enteredCourseGoal);
        setEnteredCourseGoal('');
    }

  return (
      <form onSubmit={submitFormHandler}>
        <div className="form-control">
          <label>Course Goal</label>
          <input type="text" value={enteredCourseGoal} onChange={CourseInputChangeHandler}></input>
        </div>
        <button type="submit">Add Goal</button>
      </form>
  );
}
export default CourseInput;
