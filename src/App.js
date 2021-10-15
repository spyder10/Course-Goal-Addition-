import CourseInput from "./Components/CoarseGoals/CourseInput";
import CourseList from "./Components/CoarseGoals/CourseList";
import { useState } from 'react';
import "./App.css";

function App() {
  const [courses,setCourses] = useState([
    {text:"Database" ,id:"g1"},
    {text:"CN" ,id:"g2"},
    {text:"OS" ,id:"g3"}
  ]);
  
  const addCourseGoalHandler = (enteredCourseGoal) =>{
    setCourses((prevCourses) => {
      const ans =  [ ...prevCourses];
      ans.unshift({
        text:enteredCourseGoal,
        id:Math.random().toString()
      });
      return ans;
    })
  }

  const deleteGoalHandler = (deletedGoalid) =>{
    setCourses((prevCourses)=>{
      return courses.filter((course)=>{
        return course.id !== deletedGoalid;
      })
    })
  }
  return (
    <div>
      <div id="goal-form">
        <CourseInput onAddCourseGoal={addCourseGoalHandler}></CourseInput>
      </div>
      <div id="goals">
        <CourseList items={courses} onDelete = {deleteGoalHandler}></CourseList>
      </div>
    </div>
  );
}

export default App;
