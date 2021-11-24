import './App.css';
import React ,{useState,useEffect} from 'react';
import Main from './components/Main'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import StudentLogin from './components/student/StudentLogin';
import TeacherLogin from './components/teacher/TeacherLogin'
import ProjectByTeacher from './components/teacher/ProjectByTeacher'
import Student_apply from './components/student/Student_apply'
import Applications from './components/teacher/Applications';
import Approval from './components/student/Approval'
import ApprovalT from './components/teacher/ApprovalT'

function App() {

  
  return (
    <div className="App">
<Router> 
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/students' exact component={StudentLogin} />
        <Route path='/teachers' exact component={TeacherLogin}  />
        <Route path='/teacherP' exact component={ProjectByTeacher} />
        <Route path='/student_apply' exact component={Student_apply}  />
        <Route path='/applications' exact component={Applications}  />
        <Route path='/approved' exact component={Approval}  />
        <Route path='/teacher_approved' exact component={ApprovalT}  />


      </Switch>
      </Router>
    </div>
  );
}

export default App;
