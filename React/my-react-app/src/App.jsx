import Props from "./Components/Props";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import StudentReg from "./Components/StudentReg";
import StundentForm from "./Components/StudentForm";

import StudentCard from "./Exp-7/StudentCard";
import Count from "./Exp-8/Count";

import RegistrationForm from "./Exp-9/RegistrationForm";
function App() {
  /*   const students = [
    { name: "Abhay", rollno: "250B1034", course: "B.Tech" },
    { name: "Vikas", rollno: "250B1035", course: "MCA" },
    { name: "Rahul", rollno: "250B1036", course: "BCA" }
  ]; */

  return (
    <>
      {/* <Props name="Abhay" rollno="250B1034" course="B.Tech"/> */}
      {/* for multiple data */}
      {/* <Props students={students} /> */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      <StudentReg/>
      {/* <StundentForm/> */}

      {/* Experiment 07 
       <h1>Student Information System</h1>
      <div className="student-container">
        <StudentCard name="Monika" course="B.Tech Data Science" marks="95" />
        <StudentCard name="Rahul" course="B.Tech CS" marks="88" />
        <StudentCard name="Sneha" course="B.Tech IT" marks="92" />
      </div> */}

      {/* Experiment 08 
      <Count/> */}

      {/* Experiment 09 
      <RegistrationForm/> */}
    </>
  );
}

export default App;
